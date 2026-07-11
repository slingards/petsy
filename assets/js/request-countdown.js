document.addEventListener(
    "DOMContentLoaded",
    () => {

        const request =
        JSON.parse(
            localStorage.getItem(
                "CompanionReviewHubPendingRequest"
            )
        );

        const form =
        document.getElementById(
            "eligibilityForm"
        );

        const countdownSection =
        document.getElementById(
            "countdownSection"
        );

        const requestPreview =
        document.getElementById(
            "requestPreview"
        );

        const ageConfirmation =
        document.getElementById(
            "ageConfirmation"
        );

        const vetConfirmation =
        document.getElementById(
            "vetConfirmation"
        );

        const responsibilityConfirmation =
        document.getElementById(
            "responsibilityConfirmation"
        );

        const errorBox =
        document.getElementById(
            "eligibilityError"
        );

        const countdownValue =
        document.getElementById(
            "countdownValue"
        );

        const countdownProgress =
        document.getElementById(
            "countdownProgress"
        );

        const countdownStatus =
        document.getElementById(
            "countdownStatus"
        );

        if(!request){

            window.location.href =
            "checkout-failed.html?reason=missing-request";

            return;

        }

        const customer =
        request.customer || {};

        const totals =
        request.totals || {};

        requestPreview.innerHTML =
        `
            <strong>
                Request received for ${escapeText(customer.name || "customer")}
            </strong>

            ${Number(totals.total_quantity || 0)} selected animal profile(s)
            with a current review estimate of
            $${Number(totals.grand_total || 0).toLocaleString()}.
        `;

        /*
            The age checkbox reflects the age already entered in checkout.
            Users under 18 cannot truthfully confirm it.
        */

        if(Number(customer.age || 0) < 18){

            ageConfirmation.disabled =
            true;

        }

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                errorBox.textContent = "";

                const ageEligible =
                Number(customer.age || 0) >= 18 &&
                ageConfirmation.checked;

                const vetEligible =
                vetConfirmation.checked;

                const responsibilityEligible =
                responsibilityConfirmation.checked;

                request.eligibility = {
                    age_confirmed:
                    ageEligible,

                    veterinary_access:
                    vetEligible,

                    responsible_care:
                    responsibilityEligible,

                    checked_at:
                    new Date().toISOString()
                };

                localStorage.setItem(
                    "CompanionReviewHubPendingRequest",
                    JSON.stringify(request)
                );

                form.style.display =
                "none";

                countdownSection.classList.add(
                    "active"
                );

                runCountdown({
                    eligible:
                    ageEligible &&
                    vetEligible &&
                    responsibilityEligible,

                    valueElement:
                    countdownValue,

                    progressElement:
                    countdownProgress,

                    statusElement:
                    countdownStatus
                });

            }
        );

    }
);

function runCountdown({
    eligible,
    valueElement,
    progressElement,
    statusElement
}){

    const totalSeconds = 10;

    const radius = 58;

    const circumference =
    2 * Math.PI * radius;

    let remaining =
    totalSeconds;

    progressElement.style.strokeDasharray =
    String(circumference);

    progressElement.style.strokeDashoffset =
    "0";

    valueElement.textContent =
    String(remaining);

    const interval =
    setInterval(
        () => {

            remaining--;

            valueElement.textContent =
            String(Math.max(remaining,0));

            const elapsed =
            totalSeconds - remaining;

            const offset =
            circumference *
            (
                elapsed /
                totalSeconds
            );

            progressElement.style.strokeDashoffset =
            String(offset);

            if(remaining === 7){

                statusElement.textContent =
                "Checking age and responsible-care confirmations.";

            }

            if(remaining === 4){

                statusElement.textContent =
                "Preparing your selected-animal and payment summary.";

            }

            if(remaining <= 0){

                clearInterval(interval);

                statusElement.textContent =
                eligible
                ?
                "Eligibility confirmed. Opening the final checkout."
                :
                "One or more requirements were not confirmed.";

                setTimeout(
                    () => {

                        window.location.href =
                        eligible
                        ?
                        "final-checkout.html"
                        :
                        "checkout-failed.html?reason=eligibility";

                    },
                    700
                );

            }

        },
        1000
    );

}

function escapeText(value){

    return String(value || "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}
