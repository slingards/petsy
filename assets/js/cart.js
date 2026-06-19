/* ==========================
CART STORAGE
========================== */

let cart =
JSON.parse(
localStorage.getItem(
"petsyCart"
)
) || [];

/* ==========================
SAVE CART
========================== */

function saveCart(){

localStorage.setItem(

    "petsyCart",

    JSON.stringify(cart)

);

updateCartCount();

}

/* ==========================
UPDATE CART COUNT
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
ADD TO CART
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

        quantity:1

    });

}

saveCart();

updateCartSidebar();

animateCartCount();

}

/* ==========================
REMOVE FROM SIDEBAR
========================== */

function removeFromCart(index){

cart.splice(index,1);

saveCart();

updateCartSidebar();

}

/* ==========================
TOTAL
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
UPDATE SIDEBAR
========================== */

function fixImagePath(path){

    const isHomePage =

    window.location.pathname
    .includes("index.html")

    ||

    window.location.pathname === "/"

    ||

    window.location.pathname.endsWith("/petsy/");

    if(isHomePage){

        return path.replace(
            "../",
            ""
        );

    }

    return path;

}

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
            Qty:
            ${item.quantity || 1}
            </p>

            <p>
            $${item.price}
            </p>

        </div>

        <button
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
    .toFixed(2);

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

if(openCartButton){

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

if(closeCartButton){

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

if(cartOverlay){

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
BUTTONS
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
ANIMATION
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
CART PAGE
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

    if(cartPage)
    cartPage.style.display =
    "none";

    if(emptyCart)
    emptyCart.style.display =
    "block";

    return;

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

            </div>

        </div>

        <div>

            ${quantity}

        </div>

        <div class="price">

            $
            ${(item.price * quantity).toFixed(2)}

        </div>

        <div>

            <button

            class="remove-btn"

            onclick="removeCartItem(${index})">

                Remove

            </button>

        </div>

    </div>
    `;

});

const shipping = 450;

const insurance = 250;

document.getElementById(
    "shippingPrice"
).textContent =
"$" +
shipping.toFixed(2);

document.getElementById(
    "insurancePrice"
).textContent =
"$" +
insurance.toFixed(2);

const tax = 0;

const total =
subtotal +
shipping +
insurance +
tax;

document.getElementById(
    "subtotalPrice"
).textContent =
"$" +
subtotal.toFixed(2);

document.getElementById(
    "taxPrice"
).textContent =
"$" +
tax.toFixed(2);

document.getElementById(
    "grandTotal"
).textContent =
"$" +
total.toFixed(2);

}

function removeCartItem(index){

cart.splice(index,1);

saveCart();

loadCartPage();

}

updateCartCount();
updateCartSidebar();
loadCartPage();

const checkoutBtn =
document.querySelector(
    ".checkout-btn"
);

if(checkoutBtn){

    checkoutBtn.addEventListener(
        "click",
        function(event){

            const cart =
            JSON.parse(
                localStorage.getItem(
                    "petsyCart"
                )
            ) || [];

            if(cart.length === 0){

                event.preventDefault();

                alert(
                    "Your cart is empty. Please add an animal before proceeding to checkout."
                );

            }

        }
    );

}