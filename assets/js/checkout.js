/* ==========================
CART VALIDATION
========================== */
const cart = JSON.parse(
    localStorage.getItem("petsyCart")
) || [];

if(cart.length === 0){

    document.body.innerHTML = `

    <div class="empty-checkout-page">

        <h1>
            No Animals In Cart
        </h1>

        <p>
            You currently have no animals in your cart.
            Please browse available pets and add at least one companion before proceeding to checkout.
        </p>

        <a
        href="../index.html"
        class="primary-btn">

            Browse Pets

        </a>

    </div>

    `;

    throw new Error(
        "Cart is empty"
    );

}

/* ==========================
SUBTOTAL
========================== */

let subtotal = 0;

cart.forEach(item=>{

    subtotal += Number(
        item.price
    );

});

const subtotalBox =
document.getElementById(
    "cartSubtotal"
);

if(subtotalBox){

    subtotalBox.textContent =
    `$${subtotal.toLocaleString()}`;

}

/* ==========================
PAYMENT BOXES
========================== */

const btcBox = document.getElementById("btcBox");
const ethBox = document.getElementById("ethBox");
const usdtBox = document.getElementById("usdtBox");
const giftcardBox = document.getElementById("giftcardBox");
const comingSoonBox = document.getElementById("comingSoonBox");
const proofSection = document.getElementById("proofSection");
const proofInput = document.querySelector('[name="payment_proof"]');

function hideAllPayments(){

    if(btcBox) btcBox.style.display = "none";
    if(ethBox) ethBox.style.display = "none";
    if(usdtBox) usdtBox.style.display = "none";
    if(giftcardBox) giftcardBox.style.display = "none";
    if(comingSoonBox) comingSoonBox.style.display = "none";

    if(proofSection){
        proofSection.style.display = "none";
    }

    if(proofInput){
        proofInput.required = false;
    }

}

function showPaymentDetails(){

    hideAllPayments();

    const payment = document.getElementById("paymentMethod").value;

    if(payment === "btc"){

        btcBox.style.display = "block";
        proofSection.style.display = "block";
        proofInput.required = true;

    }else if(payment === "eth"){

        ethBox.style.display = "block";
        proofSection.style.display = "block";
        proofInput.required = true;

    }else if(payment === "usdt"){

        usdtBox.style.display = "block";
        proofSection.style.display = "block";
        proofInput.required = true;

    }else if(payment === "giftcard"){

        giftcardBox.style.display = "block";
        proofSection.style.display = "block";
        proofInput.required = true;

    }else if(payment === "paypal" || payment === "bank"){

        comingSoonBox.style.display = "block";

    }

}

/* ==========================
COPY ADDRESS
========================== */

function copyAddress(id){

    const text =
    document.getElementById(
        id
    ).value;

    navigator.clipboard.writeText(
        text
    );

    alert(
        "Wallet address copied!"
    );

}

/* ==========================
SHIPPING FEES
========================== */

function calculateTotal(){

    const shipping = 450;

    const insurance = 250;

    const total =

    subtotal +
    shipping +
    insurance;

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
        "$450";

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
SUCCESS MESSAGE
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
            const age =
            Number(
                document.getElementById(
                    "age"
                ).value
            );

            if(age < 18){

                alert(
                    "You must be at least 18 years old to adopt a pet."
                );

                return;
            }

            const selectedContactMethod =
            contactMethod.value;

            if(selectedContactMethod === "email"){

                const validEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(
                    emailContact.value.trim()
                );

                if(!validEmail){

                    document.getElementById(
                        "emailError"
                    ).style.display =
                    "block";

                    emailContact.focus();

                    return;

                }

            }

            else if(selectedContactMethod === "whatsapp"){

                const validWhatsapp =
                /^\+[1-9]\d{7,14}$/
                .test(
                    whatsappContact.value.trim()
                );

                if(!validWhatsapp){

                    document.getElementById(
                        "whatsappError"
                    ).style.display =
                    "block";

                    whatsappContact.focus();

                    return;

                }

            }

            else if(selectedContactMethod === "signal"){

                if(signalContact.value.trim().length < 3){

                    document.getElementById(
                        "signalError"
                    ).style.display =
                    "block";

                    signalContact.focus();

                    return;

                }

            }

            try{

                await fetch(
                    "/.netlify/functions/send-order",
                    {
                        method:"POST",

                        headers:{
                            "Content-Type":"application/json"
                        },

                        body:JSON.stringify({

                            name:
                            document.querySelector(
                                '[name="full_name"]'
                            ).value,

                            phone:
                            document.querySelector(
                                '[name="phone"]'
                            ).value,

                            country:
                            document.querySelector(
                                '[name="country"]'
                            ).value,

                            payment:
                            document.getElementById(
                                "paymentMethod"
                            ).value

                        })

                    }
                );

                const formData =
                new FormData(checkoutForm);

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
                        "petsyCart"
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

            }

        }
    )

};

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

    emailContactBox.classList.remove(
        "active"
    );

    whatsappContactBox.classList.remove(
        "active"
    );

    signalContactBox.classList.remove(
        "active"
    );

    emailContact.required =
    false;

    whatsappContact.required =
    false;

    signalContact.required =
    false;

    emailContact.value =
    "";

    whatsappContact.value =
    "";

    signalContact.value =
    "";

}

function showContactField(){

    hideContactFields();

    const method =
    contactMethod.value;

    if(method === "email"){

        emailContactBox.classList.add(
            "active"
        );

        emailContact.required =
        true;

    }

    else if(method === "whatsapp"){

        whatsappContactBox.classList.add(
            "active"
        );

        whatsappContact.required =
        true;

    }

    else if(method === "signal"){

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


showPaymentDetails();

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

            document.getElementById(
                "whatsappError"
            ).style.display =
            "none";

        }
    );

}
