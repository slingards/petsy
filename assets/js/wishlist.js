let wishlist =

JSON.parse(

localStorage.getItem(
"petsyWishlist"
)

) || [];

function saveWishlist(){

 localStorage.setItem(

    "petsyWishlist",

    JSON.stringify(wishlist)

);

updateWishlistCount();
 
}

function updateWishlistCount(){

 const count =

document.getElementById(
    "wishlist-count"
);

if(count){

    count.textContent =
    wishlist.length;

}
 
}

function addToWishlist(item){

 const exists =

wishlist.some(

    pet =>

    pet.name === item.name

);

if(exists) return;

wishlist.push(item);

saveWishlist();
 
}

document
.querySelectorAll(
".wishlist-add-btn"
)

.forEach(button=>{

 button.addEventListener(

    "click",

    ()=>{

        addToWishlist({

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

function loadWishlistPage(){

 const container =

document.getElementById(
    "wishlistContainer"
);

if(!container) return;

const emptyState =

document.querySelector(
    ".empty-wishlist"
);

if(wishlist.length === 0){

    emptyState.style.display =
    "block";

    return;

}

emptyState.style.display =
"none";

wishlist.forEach(

    (item,index)=>{

        container.innerHTML +=

        `

        <div class="wishlist-card">

            <img
            src="../${item.image}">

            <h3>

            ${item.name}

            </h3>

            <h4>

            $${item.price}

            </h4>

            <button

            onclick="removeWishlist(${index})"

            class="remove-btn">

                Remove

            </button>

        </div>

        `;

    }

);
 
}

function removeWishlist(index){

 wishlist.splice(index,1);

saveWishlist();

location.reload();
 
}

updateWishlistCount();

loadWishlistPage();
