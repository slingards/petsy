/* ==========================
REQUEST STORAGE
========================== */

let cart =
JSON.parse(
    localStorage.getItem(
        "CompanionReviewHubCart"
    )
) || [];

/* ==========================
SAVE REQUEST LIST
========================== */

function saveCart(){

    localStorage.setItem(
        "CompanionReviewHubCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}

/* ==========================
UPDATE REQUEST COUNT
========================== */

function updateCartCount(){

    const countElement =
    document.getElementById(
        "cart-count"
    );

    if(!countElement) return;

    const totalItems =
    cart.reduce(

        (total,item)=>

        total +
        (item.quantity || 1),

        0

    );

    countElement.textContent =
    totalItems;

}

/* ==========================
ADD PROFILE TO REQUEST LIST
========================== */

function addToCart(product){

    const existing =
    cart.find(
        item =>
        item.name === product.name
    );

    if(existing){

        existing.quantity =
        (existing.quantity || 1)
        + 1;

    }else{

        cart.push({

            name:
            product.name,

            price:
            Number(product.price),

            image:
            product.image.startsWith("../")
            ?
            product.image
            :
            "../" + product.image,

            quantity:
            1

        });

    }

    saveCart();

    updateCartSidebar();

    animateCartCount();

}

/* ==========================
REMOVE FROM REQUEST SIDEBAR
========================== */

function removeFromCart(index){

    cart.splice(
        index,
        1
    );

    saveCart();

    updateCartSidebar();

}

/* ==========================
REQUEST ESTIMATE TOTAL
========================== */

function calculateTotal(){

    return cart.reduce(

        (total,item)=>

        total +

        (
            Number(item.price) *
            (item.quantity || 1)
        ),

        0

    );

}

/* ==========================
IMAGE PATH HELPER
========================== */

function fixImagePath(path){

    if(!path) return "";

    const isHomePage =

    window.location.pathname
    .includes("index.html")

    ||

    window.location.pathname === "/"

    ||

    window.location.pathname.endsWith("/CompanionReviewHub/");

    if(isHomePage){

        return path.replace(
            "../",
            ""
        );

    }

    return path;

}

/* ==========================
UPDATE REQUEST SIDEBAR
========================== */

function updateCartSidebar(){

    const cartItems =
    document.querySelector(
        ".cart-items"
    );

    const totalElement =
    document.getElementById(
        "cartTotal"
    );

    if(!cartItems) return;

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML =
        `
        <div class="cart-empty-message">

            <p>
                No profiles selected yet.
            </p>

            <p>
                Browse CompanionReviewHub profiles and start a request when you find a companion animal you would like CompanionReviewHub support to review.
            </p>

        </div>
        `;

        if(totalElement){

            totalElement.textContent =
            "$0.00";

        }

        return;

    }

    cart.forEach((item,index)=>{

        cartItems.innerHTML +=

        `
        <div class="cart-product-item">

            <img
            src="${fixImagePath(item.image)}"
            alt="${item.name}">

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    Selected:
                    ${item.quantity || 1}
                </p>

                <p>
                    Review estimate:
                    $${Number(item.price).toLocaleString()}
                </p>

            </div>

            <button
            type="button"
            aria-label="Remove ${item.name} from request list"
            onclick="removeFromCart(${index})">

                ✕

            </button>

        </div>
        `;

    });

    if(totalElement){

        totalElement.textContent =

        "$" +

        calculateTotal()
        .toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

}

/* ==========================
SIDEBAR TOGGLE
========================== */

const openCartButton =
document.getElementById(
    "openCart"
);

const closeCartButton =
document.getElementById(
    "closeCart"
);

const cartSidebar =
document.getElementById(
    "cartSidebar"
);

const cartOverlay =
document.querySelector(
    ".cart-overlay"
);

if(openCartButton && cartSidebar && cartOverlay){

    openCartButton.addEventListener(

        "click",

        ()=>{

            cartSidebar.classList.add(
                "active"
            );

            cartOverlay.classList.add(
                "active"
            );

        }

    );

}

if(closeCartButton && cartSidebar && cartOverlay){

    closeCartButton.addEventListener(

        "click",

        ()=>{

            cartSidebar.classList.remove(
                "active"
            );

            cartOverlay.classList.remove(
                "active"
            );

        }

    );

}

if(cartOverlay && cartSidebar){

    cartOverlay.addEventListener(

        "click",

        ()=>{

            cartSidebar.classList.remove(
                "active"
            );

            cartOverlay.classList.remove(
                "active"
            );

        }

    );

}

/* ==========================
PROFILE REQUEST BUTTONS
========================== */

document
.querySelectorAll(
    ".add-cart-btn"
)
.forEach(button=>{

    button.addEventListener(

        "click",

        ()=>{

            addToCart({

                name:
                button.dataset.name,

                price:
                button.dataset.price,

                image:
                button.dataset.image

            });

        }

    );

});

/* ==========================
COUNT ANIMATION
========================== */

function animateCartCount(){

    const cartCount =
    document.getElementById(
        "cart-count"
    );

    if(!cartCount) return;

    cartCount.classList.add(
        "cart-bounce"
    );

    setTimeout(()=>{

        cartCount.classList.remove(
            "cart-bounce"
        );

    },500);

}

/* ==========================
REQUEST REVIEW PAGE
========================== */

function loadCartPage(){

    const container =
    document.getElementById(
        "cartItemsContainer"
    );

    if(!container) return;

    const emptyCart =
    document.querySelector(
        ".empty-cart"
    );

    const cartPage =
    document.querySelector(
        ".cart-page"
    );

    if(cart.length === 0){

        if(cartPage){

            cartPage.style.display =
            "none";

        }

        if(emptyCart){

            emptyCart.style.display =
            "block";

        }

        return;

    }

    if(cartPage){

        cartPage.style.display =
        "block";

    }

    if(emptyCart){

        emptyCart.style.display =
        "none";

    }

    let subtotal = 0;

    container.innerHTML = "";

    cart.forEach((item,index)=>{

        const quantity =
        item.quantity || 1;

        subtotal +=

        Number(item.price)
        * quantity;

        container.innerHTML +=

        `
        <div class="cart-item">

            <div class="cart-product">

                <img
                src="${item.image}"
                alt="${item.name}">

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p class="request-status-text">
                        Selected for CompanionReviewHub review
                    </p>

                </div>

            </div>

            <div>

                ${quantity}

            </div>

            <div class="price">

                Review estimate:
                $
                ${(Number(item.price) * quantity).toLocaleString(
                    undefined,
                    {
                        minimumFractionDigits:2,
                        maximumFractionDigits:2
                    }
                )}

            </div>

            <div>

                <button
                type="button"
                class="remove-btn"
                onclick="removeCartItem(${index})">

                    Remove

                </button>

            </div>

        </div>
        `;

    });

    const deliveryReviewEstimate =
    252;

    const careSupportEstimate =
    150;

    const tax =
    0;

    const total =
    subtotal +
    deliveryReviewEstimate +
    careSupportEstimate +
    tax;

    const shippingPrice =
    document.getElementById(
        "shippingPrice"
    );

    const insurancePrice =
    document.getElementById(
        "insurancePrice"
    );

    const subtotalPrice =
    document.getElementById(
        "subtotalPrice"
    );

    const taxPrice =
    document.getElementById(
        "taxPrice"
    );

    const grandTotal =
    document.getElementById(
        "grandTotal"
    );

    if(shippingPrice){

        shippingPrice.textContent =
        "$" +
        deliveryReviewEstimate.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

    if(insurancePrice){

        insurancePrice.textContent =
        "$" +
        careSupportEstimate.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

    if(subtotalPrice){

        subtotalPrice.textContent =
        "$" +
        subtotal.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

    if(taxPrice){

        taxPrice.textContent =
        "$" +
        tax.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

    if(grandTotal){

        grandTotal.textContent =
        "$" +
        total.toLocaleString(
            undefined,
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );

    }

    addRequestReviewNotice();

}

/* ==========================
REQUEST NOTICE ON CART PAGE
========================== */

function addRequestReviewNotice(){

    const cartPage =
    document.querySelector(
        ".cart-page"
    );

    if(!cartPage) return;

    if(
        document.getElementById(
            "requestReviewNotice"
        )
    ){

        return;

    }

    const notice =
    document.createElement(
        "div"
    );

    notice.id =
    "requestReviewNotice";

    notice.className =
    "request-review-notice";

    notice.innerHTML =
    `
    <h3>
        Request Review Notice
    </h3>

    <p>
        This page only shows the companion animal profiles you selected for review. Submitting a request does not automatically confirm availability, ownership, delivery, or approval.
    </p>

    <p>
        Please do not send payment at this stage. CompanionReviewHub support will review your request and contact you through your selected contact method before any final arrangement is made.
    </p>
    `;

    cartPage.prepend(
        notice
    );

}

/* ==========================
REMOVE FROM REQUEST PAGE
========================== */

function removeCartItem(index){

    cart.splice(
        index,
        1
    );

    saveCart();

    loadCartPage();

}

/* ==========================
INITIAL LOAD
========================== */

updateCartCount();

updateCartSidebar();

loadCartPage();

/* ==========================
CHECKOUT BUTTON
========================== */

const checkoutBtn =
document.querySelector(
    ".checkout-btn"
);

if(checkoutBtn){

    checkoutBtn.addEventListener(
        "click",
        function(event){

            const savedCart =
            JSON.parse(
                localStorage.getItem(
                    "CompanionReviewHubCart"
                )
            ) || [];

            if(savedCart.length === 0){

                event.preventDefault();

                alert(
                    "No pet request selected yet. Please choose at least one companion animal profile before continuing to request review."
                );

                return;

            }

        }
    );

}
