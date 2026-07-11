document.addEventListener(
    "DOMContentLoaded",
    () => {

        const request =
        JSON.parse(
            localStorage.getItem(
                "CompanionReviewHubPendingRequest"
            )
        );

        if(
            !request ||
            !request.eligibility ||
            !request.eligibility.age_confirmed ||
            !request.eligibility.veterinary_access ||
            !request.eligibility.responsible_care
        ){

            window.location.href =
            "checkout-failed.html?reason=not-eligible";

            return;

        }

        const customer =
        request.customer || {};

        const items =
        Array.isArray(request.items)
        ?
        request.items
        :
        [];

        const totals =
        request.totals || {};

        const customerSummary =
        document.getElementById(
            "customerSummary"
        );

        const animalSummary =
        document.getElementById(
            "animalSummary"
        );

        const totalsSummary =
        document.getElementById(
            "totalsSummary"
        );

        const paymentMethod =
        document.getElementById(
            "finalPaymentMethod"
        );

        const paymentDetails =
        document.getElementById(
            "paymentDetails"
        );

        const proofPanel =
        document.getElementById(
            "proofPanel"
        );

        const form =
        document.getElementById(
            "finalPaymentForm"
        );

        customerSummary.innerHTML =
        `
            <div class="customer-grid">

                ${customerItem("Name",customer.name)}

                ${customerItem("Country",customer.country)}

                ${customerItem("Contact method",customer.contact_method)}

                ${customerItem("Contact",customer.contact)}

            </div>
        `;

        animalSummary.innerHTML =
        items.map(item=>{

            const quantity =
            Number(item.quantity || 1);

            const price =
            Number(item.price || 0);

            const lineTotal =
            Number(
                item.line_total ||
                price * quantity
            );

            return `
                <div class="final-animal">

                    <div>

                        <strong>
                            ${escapeText(item.name)}
                        </strong>

                        <p>
                            ${quantity} selected ×
                            $${price.toLocaleString()} each
                        </p>

                    </div>

                    <div class="final-animal-price">

                        $${lineTotal.toLocaleString()}

                    </div>

                </div>
            `;

        }).join("");

        totalsSummary.innerHTML =
        `
            ${totalRow(
                "Profile subtotal",
                totals.subtotal
            )}

            ${totalRow(
                "Delivery review estimate",
                totals.delivery_review_estimate
            )}

            ${totalRow(
                "Care / travel estimate",
                totals.care_travel_review_estimate
            )}

            <div class="total-row grand">

                <span>
                    Grand total
                </span>

                <span>
                    $${Number(totals.grand_total || 0).toLocaleString()}
                </span>

            </div>
        `;

        populateHiddenFields(
            request
        );

        paymentMethod.addEventListener(
            "change",
            () => {

                const method =
                paymentMethod.value;

                if(!method){

                    paymentDetails.classList.remove(
                        "active"
                    );

                    proofPanel.classList.remove(
                        "active"
                    );

                    paymentDetails.innerHTML = "";

                    resetConditionalProofFields();

                    return;

                }

                paymentDetails.innerHTML =
                buildPaymentDetails(
                    method,
                    totals.grand_total
                );

                paymentDetails.classList.add(
                    "active"
                );

                /*
                    Bank transfer is not currently available.
                    Show only the coming-soon message and assistance link.
                */

                if(method === "bank"){

                    proofPanel.classList.remove(
                        "active"
                    );

                    resetConditionalProofFields();

                    attachCopyButton();

                    return;

                }

                /*
                    Crypto methods reveal their QR code, wallet address,
                    and the crypto proof-of-payment form.
                */

                proofPanel.classList.add(
                    "active"
                );

                document.getElementById(
                    "paymentMethodField"
                ).value =
                paymentMethod.options[
                    paymentMethod.selectedIndex
                ].text;

                const amountInput =
                document.getElementById(
                    "amountPaid"
                );

                if(amountInput){

                    amountInput.value =
                    Number(totals.grand_total || 0)
                    .toFixed(2);

                }

                updateConditionalProofFields(
                    method
                );

                attachCopyButton();

            }
        );

        form.addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                const selectedMethod =
                paymentMethod.value;

                const status =
                document.getElementById(
                    "paymentFormStatus"
                );

                const submitButton =
                document.getElementById(
                    "paymentSubmitButton"
                );

                if(!selectedMethod){

                    status.style.color =
                    "#dc2626";

                    status.textContent =
                    "Please select a payment method first.";

                    return;

                }

                submitButton.disabled =
                true;

                submitButton.textContent =
                "Submitting For Verification...";

                status.style.color =
                "#64748b";

                status.textContent =
                "Uploading your Netlify form and sending the payment summary.";

                try{

                    const formData =
                    new FormData(form);

                    const netlifyResponse =
                    await fetch(
                        "/",
                        {
                            method:"POST",
                            body:formData
                        }
                    );

                    if(!netlifyResponse.ok){

                        throw new Error(
                            "The Netlify payment form could not be submitted."
                        );

                    }

                    const paymentPayload = {

                        customer_name:
                        request.customer.name,

                        customer_country:
                        request.customer.country,

                        contact_method:
                        request.customer.contact_method,

                        contact:
                        request.customer.contact,

                        payment_method:
                        document.getElementById(
                            "paymentMethodField"
                        ).value,

                        amount_paid:
                        Number(
                            document.getElementById(
                                "amountPaid"
                            ).value
                        ),

                        payment_category:
                        selectedMethod === "bank"
                        ?
                        "bank"
                        :
                        "crypto",

                        crypto_transaction_id:
                        selectedMethod === "bank"
                        ?
                        ""
                        :
                        document.getElementById(
                            "cryptoTransactionId"
                        ).value.trim(),

                        bank_sender_name:
                        selectedMethod === "bank"
                        ?
                        document.getElementById(
                            "bankSenderName"
                        ).value.trim()
                        :
                        "",

                        bank_name:
                        selectedMethod === "bank"
                        ?
                        document.getElementById(
                            "bankName"
                        ).value.trim()
                        :
                        "",

                        bank_transfer_reference:
                        selectedMethod === "bank"
                        ?
                        document.getElementById(
                            "bankTransferReference"
                        ).value.trim()
                        :
                        "",

                        bank_transfer_date:
                        selectedMethod === "bank"
                        ?
                        document.getElementById(
                            "bankTransferDate"
                        ).value
                        :
                        "",

                        payment_note:
                        document.getElementById(
                            "paymentNote"
                        ).value.trim(),

                        grand_total:
                        Number(
                            request.totals.grand_total ||
                            0
                        ),

                        total_quantity:
                        Number(
                            request.totals.total_quantity ||
                            0
                        ),

                        items:
                        request.items,

                        proof_uploaded:
                        selectedMethod === "bank"
                        ?
                        document.getElementById(
                            "bankPaymentProof"
                        ).files.length > 0
                        :
                        document.getElementById(
                            "cryptoPaymentProof"
                        ).files.length > 0,

                        eligibility: {
                            age_confirmed:true,
                            veterinary_access:true,
                            responsible_care:true
                        },

                        payment_status:
                        "Waiting for manual verification"
                    };

                    const telegramResponse =
                    await fetch(
                        "/.netlify/functions/send-payment",
                        {
                            method:"POST",

                            headers:{
                                "Content-Type":"application/json"
                            },

                            body:JSON.stringify(
                                paymentPayload
                            )
                        }
                    );

                    if(!telegramResponse.ok){

                        throw new Error(
                            "The payment proof was saved, but the Telegram notification failed."
                        );

                    }

                    localStorage.setItem(
                        "CompanionReviewHubLastPaymentSubmission",
                        JSON.stringify({
                            submitted_at:
                            new Date().toISOString(),

                            payment_reference:
                            paymentPayload.payment_category === "bank"
                            ?
                            paymentPayload.bank_transfer_reference
                            :
                            paymentPayload.crypto_transaction_id,

                            payment_method:
                            paymentPayload.payment_method,

                            grand_total:
                            paymentPayload.grand_total
                        })
                    );

                    localStorage.removeItem(
                        "CompanionReviewHubPendingRequest"
                    );

                    localStorage.removeItem(
                        "CompanionReviewHubCart"
                    );

                    window.location.href =
                    "payment-submitted.html";

                }

                catch(error){

                    console.error(error);

                    status.style.color =
                    "#dc2626";

                    status.textContent =
                    error.message ||
                    "Submission failed. Please try again.";

                    submitButton.disabled =
                    false;

                    submitButton.textContent =
                    "Submit Payment For Verification";

                }

            }
        );

    }
);

function updateConditionalProofFields(
    method
){

    const cryptoFields =
    document.getElementById(
        "cryptoProofFields"
    );

    const bankFields =
    document.getElementById(
        "bankProofFields"
    );

    resetConditionalProofFields();

    if(method === "bank"){

        bankFields.classList.add(
            "active"
        );

        setRequired(
            [
                "bankSenderName",
                "bankName",
                "bankTransferReference",
                "bankTransferDate",
                "bankPaymentProof"
            ],
            true
        );

    }else{

        cryptoFields.classList.add(
            "active"
        );

        setRequired(
            [
                "cryptoPaymentProof"
            ],
            true
        );

    }

}

function resetConditionalProofFields(){

    const groups =
    document.querySelectorAll(
        ".conditional-proof-fields"
    );

    groups.forEach(group=>{

        group.classList.remove(
            "active"
        );

        group
        .querySelectorAll(
            "input"
        )
        .forEach(input=>{

            input.required =
            false;

        });

    });

}

function setRequired(
    ids,
    required
){

    ids.forEach(id=>{

        const field =
        document.getElementById(
            id
        );

        if(field){

            field.required =
            required;

        }

    });

}

function buildPaymentDetails(
    method,
    amount
){

    const formattedAmount =
    Number(amount || 0)
    .toLocaleString();

    /*
        IMPORTANT:
        Replace the three wallet placeholders below with your real,
        verified receiving addresses before deployment.

        Put your QR images in:
        assets/images/payments/bitcoin-qr.jpg
        assets/images/payments/ethereum-qr.jpg
        assets/images/payments/usdt-erc20-qr.jpg
    */

    const methods = {

        bank: {
            title:
            "Bank Transfer — Coming Soon",

            isComingSoon:
            true,

            body:
            `
                <div class="bank-coming-soon">

                    <div class="bank-coming-soon-icon">
                        🏦
                    </div>

                    <div>

                        <h4>
                            Bank transfer is coming soon
                        </h4>

                        <p>
                            Bank transfer is not currently available as a
                            payment option. Please choose one of the available
                            cryptocurrency methods.
                        </p>

                        <p>
                            If you are having difficulty choosing the correct
                            payment method or need assistance before continuing,
                            reach out to CompanionReviewHub support.
                        </p>

                        <a
                        href="../index.html#contact"
                        class="payment-support-button">

                            Reach Out For Assistance

                        </a>

                    </div>

                </div>
            `
        },

        btc: {
            title:
            "Bitcoin Payment",

            currency:
            "BTC",

            network:
            "Bitcoin Network",

            address:
            "bc1qc70kuwzvaedv70n5ka8fpzex5cy87vpt433e4k",

            qrImage:
            "../assets/images/payments/bitcoin-qr.jpg",

            body:
            `
                <p>
                    Send exactly <strong>$${formattedAmount}</strong>
                    in BTC using the Bitcoin network.
                </p>
            `
        },

        eth: {
            title:
            "Ethereum Payment",

            currency:
            "ETH",

            network:
            "Ethereum Network",

            address:
            "0xA1d2a35c85be0892b3aa3B861FCC0BD8412b54CC",

            qrImage:
            "../assets/images/payments/ethereum-qr.jpg",

            body:
            `
                <p>
                    Send exactly <strong>$${formattedAmount}</strong>
                    in ETH using the Ethereum network.
                </p>
            `
        },

        usdt: {
            title:
            "USDT Payment",

            currency:
            "USDT",

            network:
            "ERC20 Network",

            address:
            "0xA1d2a35c85be0892b3aa3B861FCC0BD8412b54CC",

            qrImage:
            "../assets/images/payments/usdt-erc20-qr.jpg",

            body:
            `
                <p>
                    Send exactly <strong>$${formattedAmount}</strong>
                    in USDT using the ERC20 network only.
                </p>
            `
        }

    };

    const selected =
    methods[method];

    if(!selected) return "";

    if(selected.isComingSoon){

        return `
            <h3>
                ${selected.title}
            </h3>

            ${selected.body}
        `;

    }

    return `
        <div class="crypto-payment-layout">

            <div class="crypto-qr-card">

                <img
                src="${selected.qrImage}"
                alt="${selected.title} QR code"
                class="crypto-qr-image"
                onerror="this.closest('.crypto-qr-card').classList.add('qr-image-missing')">

                <p class="qr-missing-message">
                    QR image could not be loaded. Confirm that the image is in
                    the correct payments folder.
                </p>

                <span>
                    Scan to pay with ${selected.currency}
                </span>

            </div>

            <div class="crypto-payment-information">

                <h3>
                    ${selected.title}
                </h3>

                ${selected.body}

                <div class="crypto-network-row">

                    <span>
                        Network
                    </span>

                    <strong>
                        ${selected.network}
                    </strong>

                </div>

                <label for="selectedPaymentAddress">
                    Receiving wallet address
                </label>

                <div class="payment-address">

                    <input
                    id="selectedPaymentAddress"
                    value="${escapeText(selected.address)}"
                    readonly>

                    <button
                    type="button"
                    id="copyPaymentAddress">

                        Copy Address

                    </button>

                </div>

                <div class="method-warning">

                    Confirm the currency, address, amount, and network before
                    sending. Cryptocurrency transfers may be irreversible.
                    Payment proof submission does not mean payment has already
                    been verified.

                </div>

            </div>

        </div>
    `;

}

function attachCopyButton(){

    const button =
    document.getElementById(
        "copyPaymentAddress"
    );

    const input =
    document.getElementById(
        "selectedPaymentAddress"
    );

    if(!button || !input) return;

    button.addEventListener(
        "click",
        async () => {

            try{

                if(
                    navigator.clipboard &&
                    window.isSecureContext
                ){

                    await navigator.clipboard.writeText(
                        input.value
                    );

                }else{

                    input.select();

                    document.execCommand(
                        "copy"
                    );

                    window.getSelection()?.removeAllRanges();

                }

                button.textContent =
                "Copied";

            }

            catch(error){

                console.error(
                    "Address copy failed:",
                    error
                );

                button.textContent =
                "Copy Failed";

            }

            setTimeout(
                () => {

                    button.textContent =
                    "Copy Address";

                },
                1600
            );

        }
    );

}

function populateHiddenFields(
    request
){

    const itemSummary =
    request.items.map(item=>{

        const quantity =
        Number(item.quantity || 1);

        const lineTotal =
        Number(
            item.line_total ||
            Number(item.price || 0) *
            quantity
        );

        return `${quantity} × ${item.name} — $${lineTotal.toLocaleString()}`;

    }).join("\n");

    document.getElementById(
        "customerNameField"
    ).value =
    request.customer.name || "";

    document.getElementById(
        "customerCountryField"
    ).value =
    request.customer.country || "";

    document.getElementById(
        "animalSummaryField"
    ).value =
    itemSummary;

    document.getElementById(
        "totalAnimalsField"
    ).value =
    String(
        request.totals.total_quantity ||
        0
    );

    document.getElementById(
        "grandTotalField"
    ).value =
    String(
        request.totals.grand_total ||
        0
    );

}

function customerItem(
    label,
    value
){

    return `
        <div class="customer-item">

            <small>
                ${escapeText(label)}
            </small>

            <strong>
                ${escapeText(value || "Not provided")}
            </strong>

        </div>
    `;

}

function totalRow(
    label,
    value
){

    return `
        <div class="total-row">

            <span>
                ${escapeText(label)}
            </span>

            <span>
                $${Number(value || 0).toLocaleString()}
            </span>

        </div>
    `;

}

function escapeText(value){

    return String(value || "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}
