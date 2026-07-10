/* ==========================
CART VALIDATION
========================== */

const cart =
JSON.parse(
    localStorage.getItem(
        "CompanionReviewHubCart"
    )
) || [];

if(cart.length === 0){

    document.body.innerHTML = `

    <div class="empty-checkout-page">

        <h1>
            No Pet Requests Selected
        </h1>

        <p>
            You currently have no companion animal profiles selected for review.
            Please browse CompanionReviewHub profiles and start at least one request before continuing.
        </p>

        <a
        href="../index.html"
        class="primary-btn">

            Browse Profiles

        </a>

    </div>

    `;

    throw new Error(
        "No pet request selected"
    );

}

/* ==========================
REQUEST SUMMARY
========================== */

let subtotal = 0;

cart.forEach(item=>{

    subtotal += Number(
        item.price
    ) *
    (item.quantity || 1);

});

const subtotalBox =
document.getElementById(
    "cartSubtotal"
);

if(subtotalBox){

    subtotalBox.textContent =
    "$" +
    subtotal.toLocaleString();

}

/* ==========================
PAYMENT STATUS
========================== */

const paymentMethod =
document.getElementById(
    "paymentMethod"
);

if(paymentMethod){

    paymentMethod.value =
    "Pending review";

}

/*
    Payments are intentionally not collected on this page.
    CompanionReviewHub support reviews the request first, then contacts the user
    through the selected contact method before any final payment arrangement.
*/

function showPaymentDetails(){

    if(paymentMethod){

        paymentMethod.value =
        "Pending review";

    }

}

/* ==========================
ESTIMATED REVIEW TOTAL
========================== */

function calculateTotal(){

    const deliveryReviewEstimate = 450;

    const careTravelReviewEstimate = 250;

    const total =
    subtotal +
    deliveryReviewEstimate +
    careTravelReviewEstimate;

    const shippingBox =
    document.getElementById(
        "shippingFee"
    );

    const totalBox =
    document.getElementById(
        "grandTotal"
    );

    if(shippingBox){

        shippingBox.textContent =
        "$" +
        deliveryReviewEstimate.toLocaleString();

    }

    if(totalBox){

        totalBox.textContent =
        "$" +
        total.toLocaleString();

    }

}

const countrySelect =
document.getElementById(
    "countrySelect"
);

if(countrySelect){

    countrySelect.addEventListener(
        "change",
        calculateTotal
    );

}

/* ==========================
INITIAL TOTAL
========================== */

calculateTotal();

/* ==========================
ORDER COUNT
========================== */

const orderCount =
document.getElementById(
    "orderCount"
);

if(orderCount){

    orderCount.textContent =
    cart.length;

}

/* ==========================
CONTACT METHOD FIELD
========================== */

const contactMethod =
document.getElementById(
    "contactMethod"
);

const emailContactBox =
document.getElementById(
    "emailContactBox"
);

const whatsappContactBox =
document.getElementById(
    "whatsappContactBox"
);

const signalContactBox =
document.getElementById(
    "signalContactBox"
);

const emailContact =
document.getElementById(
    "emailContact"
);

const whatsappContact =
document.getElementById(
    "whatsappContact"
);

const signalContact =
document.getElementById(
    "signalContact"
);

function hideContactFields(){

    if(emailContactBox){
        emailContactBox.classList.remove(
            "active"
        );
    }

    if(whatsappContactBox){
        whatsappContactBox.classList.remove(
            "active"
        );
    }

    if(signalContactBox){
        signalContactBox.classList.remove(
            "active"
        );
    }

    if(emailContact){

        emailContact.required =
        false;

        emailContact.value =
        "";

    }

    if(whatsappContact){

        whatsappContact.required =
        false;

        whatsappContact.value =
        "";

    }

    if(signalContact){

        signalContact.required =
        false;

        signalContact.value =
        "";

    }

}

function showContactField(){

    hideContactFields();

    if(!contactMethod) return;

    const method =
    contactMethod.value;

    if(method === "email" && emailContactBox && emailContact){

        emailContactBox.classList.add(
            "active"
        );

        emailContact.required =
        true;

    }

    else if(method === "whatsapp" && whatsappContactBox && whatsappContact){

        whatsappContactBox.classList.add(
            "active"
        );

        whatsappContact.required =
        true;

    }

    else if(method === "signal" && signalContactBox && signalContact){

        signalContactBox.classList.add(
            "active"
        );

        signalContact.required =
        true;

    }

}

if(contactMethod){

    contactMethod.addEventListener(
        "change",
        showContactField
    );

}

/* ==========================
WHATSAPP FORMAT HELPER
========================== */

if(whatsappContact){

    whatsappContact.addEventListener(
        "input",
        function(){

            let value =
            this.value;

            if(
                value.length === 1 &&
                value !== "+"
            ){

                value =
                "+" +
                value.replace(
                    /\D/g,
                    ""
                );

            }

            value =
            value.replace(
                /[^\d+]/g,
                ""
            );

            if(
                value.indexOf("+") > 0
            ){

                value =
                "+" +
                value.replace(
                    /\+/g,
                    ""
                );

            }

            this.value =
            value;

            const whatsappError =
            document.getElementById(
                "whatsappError"
            );

            if(whatsappError){

                whatsappError.style.display =
                "none";

            }

        }
    );

}

/* ==========================
FORM SUBMISSION
========================== */

const checkoutForm =
document.querySelector(
    ".checkout-form"
);

if(checkoutForm){

    checkoutForm.addEventListener(
        "submit",
        async function(event){

            event.preventDefault();

            const ageInput =
            document.getElementById(
                "age"
            );

            const age =
            ageInput ?
            Number(ageInput.value)
            : 0;

            if(age < 18){

                alert(
                    "You must be at least 18 years old to submit a pet request."
                );

                if(ageInput){
                    ageInput.focus();
                }

                return;

            }

            if(!contactMethod || !contactMethod.value){

                alert(
                    "Please choose your preferred contact method."
                );

                return;

            }

            const selectedContactMethod =
            contactMethod.value;

            const emailError =
            document.getElementById(
                "emailError"
            );

            const whatsappError =
            document.getElementById(
                "whatsappError"
            );

            const signalError =
            document.getElementById(
                "signalError"
            );

            if(emailError){
                emailError.style.display = "none";
            }

            if(whatsappError){
                whatsappError.style.display = "none";
            }

            if(signalError){
                signalError.style.display = "none";
            }

            if(selectedContactMethod === "email"){

                const validEmail =
                emailContact &&
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(
                    emailContact.value.trim()
                );

                if(!validEmail){

                    if(emailError){
                        emailError.style.display =
                        "block";
                    }

                    if(emailContact){
                        emailContact.focus();
                    }

                    return;

                }

            }

            else if(selectedContactMethod === "whatsapp"){

                const validWhatsapp =
                whatsappContact &&
                /^\+[1-9]\d{7,14}$/
                .test(
                    whatsappContact.value.trim()
                );

                if(!validWhatsapp){

                    if(whatsappError){
                        whatsappError.style.display =
                        "block";
                    }

                    if(whatsappContact){
                        whatsappContact.focus();
                    }

                    return;

                }

            }

            else if(selectedContactMethod === "signal"){

                const validSignal =
                signalContact &&
                signalContact.value.trim().length >= 3;

                if(!validSignal){

                    if(signalError){
                        signalError.style.display =
                        "block";
                    }

                    if(signalContact){
                        signalContact.focus();
                    }

                    return;

                }

            }

            try{

                let contactValue = "";

                if(contactMethod.value === "email" && emailContact){

                    contactValue =
                    emailContact.value.trim();

                }else if(contactMethod.value === "whatsapp" && whatsappContact){

                    contactValue =
                    whatsappContact.value.trim();

                }else if(contactMethod.value === "signal" && signalContact){

                    contactValue =
                    signalContact.value.trim();

                }

                if(paymentMethod){

                    paymentMethod.value =
                    "Pending review";

                }

                const fullNameInput =
                document.querySelector(
                    '[name="full_name"]'
                );

                const countryInput =
                document.querySelector(
                    '[name="country"]'
                );

                const addressInput =
                document.querySelector(
                    '[name="address"]'
                );

                const requestItems =
                cart.map(item=>{

                    return {
                        name:item.name,
                        price:Number(item.price),
                        quantity:item.quantity || 1
                    };

                });

                await fetch(
                    "/.netlify/functions/send-order",
                    {
                        method:"POST",

                        headers:{
                            "Content-Type":"application/json"
                        },

                        body:JSON.stringify({

                            name:
                            fullNameInput ?
                            fullNameInput.value
                            : "",

                            contact_method:
                            contactMethod.value,

                            contact:
                            contactValue,

                            phone:
                            contactValue,

                            country:
                            countryInput ?
                            countryInput.value
                            : "",

                            address:
                            addressInput ?
                            addressInput.value
                            : "",

                            payment:
                            "Pending review",

                            request_status:
                            "Request received for review",

                            subtotal:
                            subtotal,

                            review_total:
                            subtotal + 450 + 250,

                            items:
                            requestItems

                        })

                    }
                );

                const formData =
                new FormData(checkoutForm);

                formData.set(
                    "payment_method",
                    "Pending review"
                );

                formData.set(
                    "request_status",
                    "Request received for review"
                );

                formData.set(
                    "cart_items",
                    JSON.stringify(
                        requestItems
                    )
                );

                const netlifyResponse =
                await fetch(
                    "/",
                    {
                        method:"POST",
                        body:formData
                    }
                );

                if(netlifyResponse.ok){

                    localStorage.removeItem(
                        "CompanionReviewHubCart"
                    );

                    window.location.href =
                    "order-completion.html";

                }else{

                    alert(
                        "Submission failed. Please try again."
                    );

                }

            }

            catch(error){

                console.error(
                    error
                );

                alert(
                    "Something went wrong while submitting your request. Please check your internet connection and try again."
                );

            }

        }
    );

}

showPaymentDetails();
