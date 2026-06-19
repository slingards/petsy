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

const paymentMethod =
document.getElementById(
    "paymentMethod"
);

const btcBox =
document.getElementById(
    "btcBox"
);

const ethBox =
document.getElementById(
    "ethBox"
);

const usdtBox =
document.getElementById(
    "usdtBox"
);

const giftcardBox =
document.getElementById(
    "giftcardBox"
);

function hidePayments(){

    if(btcBox)
        btcBox.classList.remove(
            "active"
        );

    if(ethBox)
        ethBox.classList.remove(
            "active"
        );

    if(usdtBox)
        usdtBox.classList.remove(
            "active"
        );

    if(giftcardBox)
        giftcardBox.classList.remove(
            "active"
);

}

function hideAllPayments(){

    document.getElementById(
        "btcBox"
    ).style.display = "none";

    document.getElementById(
        "ethBox"
    ).style.display = "none";

    document.getElementById(
        "usdtBox"
    ).style.display = "none";

    document.getElementById(
        "giftcardBox"
    ).style.display = "none";

    const proof =
    document.getElementById(
        "proofSection"
    );

    if(proof){

        proof.style.display =
        "none";

    }

}

function showPaymentDetails(){

    hideAllPayments();

    const payment =
    document.getElementById(
        "paymentMethod"
    ).value;

    if(payment === "btc"){

        document.getElementById(
            "btcBox"
        ).style.display = "block";

        document.getElementById(
            "proofSection"
        ).style.display = "block";

    }

    else if(payment === "eth"){

        document.getElementById(
            "ethBox"
        ).style.display = "block";

        document.getElementById(
            "proofSection"
        ).style.display = "block";

    }

    else if(payment === "usdt"){

        document.getElementById(
            "usdtBox"
        ).style.display = "block";

        document.getElementById(
            "proofSection"
        ).style.display = "block";

    }

    else if(payment === "giftcard"){

        document.getElementById(
            "giftcardBox"
        ).style.display = "block";

        document.getElementById(
            "proofSection"
        ).style.display = "block";

    }

}

if(paymentMethod){

    paymentMethod.addEventListener(
        "change",
        showPaymentDetails
    );

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

            localStorage.removeItem(
                "petsyCart"
            );

            window.location.href =
            "order-completion.html";

        }

        catch(error){

            console.error(
                error
            );

        }

    }
)

}



if(checkoutForm){

    checkoutForm.addEventListener(
        "submit",
        function(event){

            const age =
            Number(
                document.getElementById(
                    "age"
                ).value
            );

            if(age < 18){

                event.preventDefault();

                alert(
                    "You must be at least 18 years old to adopt a pet."
                );

            }

        }
    );

}
showPaymentDetails();

const phoneInput =
document.getElementById(
    "phone"
);

phoneInput.addEventListener(
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

    }
);


phoneInput.addEventListener(
    "input",
    function(){

        document.getElementById(
            "phoneError"
        ).style.display = "none";

        this.style.border = "";

    }
);



checkoutForm.addEventListener(
    "submit",
    function(event){

        const phone =
        phoneInput.value.trim();

        const validPhone =
        /^\+[1-9]\d{7,14}$/
        .test(phone);

        if(!validPhone){

            event.preventDefault();

            const phoneField =
            document.getElementById(
                "phone"
            );

            const phoneError =
            document.getElementById(
                "phoneError"
            );

            phoneError.textContent =

            "Please enter a valid phone number with country code. Example: +15551234567";

            phoneError.style.display =
            "block";

            phoneField.style.border =
            "2px solid #dc2626";

            phoneField.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

            phoneField.focus();

            return;

        }

    }
);

