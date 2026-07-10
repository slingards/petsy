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
REQUEST ADDED MESSAGE
========================== */

let requestMessageTimer = null;

function showRequestAddedMessage(productName){

    const existingMessage =
    document.getElementById(
        "requestAddedMessage"
    );

    if(existingMessage){

        existingMessage.remove();

    }

    if(requestMessageTimer){

        clearTimeout(
            requestMessageTimer
        );

    }

    const message =
    document.createElement(
        "div"
    );

    message.id =
    "requestAddedMessage";

    message.className =
    "request-added-message";

    message.setAttribute(
        "role",
        "status"
    );

    message.setAttribute(
        "aria-live",
        "polite"
    );

    message.innerHTML =
    `
    <div class="request-added-message-icon">
        ✓
    </div>

    <div class="request-added-message-text">
        <strong>
            Profile added for review.
        </strong>

        <span>
            You can view it anytime in the request list section.
        </span>
    </div>
    `;

    document.body.appendChild(
        message
    );

    requestAnimationFrame(()=>{

        message.classList.add(
            "show"
        );

    });

    requestMessageTimer =
    setTimeout(()=>{

        message.classList.remove(
            "show"
        );

        setTimeout(()=>{

            if(message.parentNode){

                message.remove();

            }

        },350);

    },3200);

}

function addRequestMessageStyles(){

    if(
        document.getElementById(
            "requestAddedMessageStyles"
        )
    ){

        return;

    }

    const style =
    document.createElement(
        "style"
    );

    style.id =
    "requestAddedMessageStyles";

    style.textContent =
    `
    .request-added-message{
        position:fixed;
        top:96px;
        left:50%;
        z-index:999999;
        transform:translate(-50%, -25px);
        opacity:0;
        pointer-events:none;
        display:flex;
        align-items:center;
        gap:14px;
        width:calc(100% - 32px);
        max-width:520px;
        padding:16px 18px;
        border-radius:18px;
        background:#ffffff;
        color:#111827;
        border:1px solid #bbf7d0;
        box-shadow:0 20px 55px rgba(15,23,42,.22);
        transition:opacity .35s ease, transform .35s ease;
    }

    .request-added-message.show{
        opacity:1;
        transform:translate(-50%, 0);
    }

    .request-added-message-icon{
        display:flex;
        align-items:center;
        justify-content:center;
        flex:0 0 38px;
        width:38px;
        height:38px;
        border-radius:50%;
        background:#16a34a;
        color:#ffffff;
        font-size:1.05rem;
        font-weight:900;
    }

    .request-added-message-text{
        display:flex;
        flex-direction:column;
        gap:4px;
        line-height:1.35;
    }

    .request-added-message-text strong{
        font-size:.98rem;
        color:#111827;
    }

    .request-added-message-text span{
        font-size:.9rem;
        color:#4b5563;
    }

    .dark-mode .request-added-message{
        background:#0f172a;
        color:#f8fafc;
        border-color:#166534;
        box-shadow:0 20px 50px rgba(0,0,0,.45);
    }

    .dark-mode .request-added-message-text strong{
        color:#f8fafc;
    }

    .dark-mode .request-added-message-text span{
        color:#cbd5e1;
    }

    @media(max-width:600px){

        .request-added-message{
            top:86px;
            padding:14px 15px;
            border-radius:16px;
        }

        .request-added-message-icon{
            flex-basis:34px;
            width:34px;
            height:34px;
        }

        .request-added-message-text strong{
            font-size:.92rem;
        }

        .request-added-message-text span{
            font-size:.82rem;
        }

    }
    `;

    document.head.appendChild(
        style
    );

}

addRequestMessageStyles();

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

    showRequestAddedMessage(
        product.name
    );

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
Works for existing and JS-generated cards
========================== */

document.addEventListener(
    "click",
    event=>{

        const button =
        event.target.closest(
            ".add-cart-btn, .start-request-btn, [data-request-button='true']"
        );

        if(!button) return;

        event.preventDefault();

        const card =
        button.closest(
            ".pet-card, .animal-card, .profile-card, .product-card"
        );

        const cardImage =
        card
        ?
        card.querySelector("img")
        :
        null;

        addToCart({

            name:
            button.dataset.name ||
            card?.dataset?.name ||
            button.getAttribute("aria-label") ||
            "Selected Profile",

            price:
            button.dataset.price ||
            card?.dataset?.price ||
            0,

            image:
            button.dataset.image ||
            cardImage?.getAttribute("src") ||
            ""

        });

    }
);

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


/* ==========================
GLOBAL ACCESS
========================== */

window.showRequestAddedMessage =
showRequestAddedMessage;

window.addToCart =
addToCart;