const wildCats = [

{
    name:"African Lion",
    category:"big-cat",
    price:5000,
    image:"assets/images/wild-cats/african-lion.jpg",
    age:"8 Months",
    location:"South Africa",
    description:"The king of the jungle, known for its strength, courage, and majestic mane."
},

{
    name:"Bengal Tiger",
    category:"big-cat",
    price:6500,
    image:"assets/images/wild-cats/bengal-tiger.jpg",
    age:"10 Months",
    location:"India",
    description:"Powerful striped predator admired for its beauty and strength."
},

{
    name:"White Tiger",
    category:"rare",
    price:12000,
    image:"assets/images/wild-cats/white-tiger.jpg",
    age:"1 Year",
    location:"India",
    description:"Rare and stunning tiger with a unique white coat and blue eyes."
},

{
    name:"Cheetah",
    category:"big-cat",
    price:8500,
    image:"assets/images/wild-cats/cheetah.jpg",
    age:"9 Months",
    location:"Namibia",
    description:"The fastest land animal, capable of incredible bursts of speed."
},

{
    name:"Leopard",
    category:"big-cat",
    price:7500,
    image:"assets/images/wild-cats/leopard.jpg",
    age:"11 Months",
    location:"Kenya",
    description:"Stealthy and powerful predator known for its spotted coat."
},

{
    name:"Snow Leopard",
    category:"rare",
    price:15000,
    image:"assets/images/wild-cats/snow-leopard.jpg",
    age:"1 Year",
    location:"Nepal",
    description:"Rare mountain cat adapted to harsh snowy environments."
},

{
    name:"Jaguar",
    category:"big-cat",
    price:9000,
    image:"assets/images/wild-cats/jaguar.jpg",
    age:"1 Year",
    location:"Brazil",
    description:"The largest cat in the Americas with exceptional bite strength."
},

{
    name:"Black Panther",
    category:"rare",
    price:18000,
    image:"assets/images/wild-cats/black-panther.jpg",
    age:"1 Year",
    location:"Malaysia",
    description:"A melanistic big cat admired for its sleek black coat."
},

{
    name:"Lynx",
    category:"medium-cat",
    price:5200,
    image:"assets/images/wild-cats/lynx.jpg",
    age:"8 Months",
    location:"Canada",
    description:"Medium-sized wild cat recognized by its tufted ears."
},

{
    name:"Caracal",
    category:"medium-cat",
    price:6000,
    image:"assets/images/wild-cats/caracal.jpg",
    age:"7 Months",
    location:"South Africa",
    description:"Elegant wild cat famous for its striking ears and agility."
}

];

const wildCatsGrid =
document.getElementById(
"wildCatsGrid"
);

function renderWildCats(
wildCatsArray
){

 wildCatsGrid.innerHTML = "";

wildCatsArray.forEach(
    wildCat=>{

    wildCatsGrid.innerHTML += `

    <div

    class="pet-card"

    data-category="${wildCat.category}"

    data-name="${wildCat.name.toLowerCase()}">

        <img
        src="../${wildCat.image}"
        alt="${wildCat.name}">

        <div class="pet-content">

            <span class="pet-category">

                Wild Cat

            </span>

            <h3>

                ${wildCat.name}

            </h3>

            <p>

                ${wildCat.description}

            </p>

            <div class="pet-info">

                <span>

                    ${wildCat.age}

                </span>

                <span>

                    ${wildCat.location}

                </span>

            </div>

            <div class="pet-footer">

                <h4>

                    $${wildCat.price}

                </h4>

                <div class="pet-actions">

                    <button

                    class="primary-btn add-cart-btn"

                    data-name="${wildCat.name}"

                    data-price="${wildCat.price}"

                    data-image="../${wildCat.image}">

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    </div>

    `;

});

attachButtons();

animateCards();
 
}

const searchInput =
document.getElementById(
"wildCatSearch"
);

const breedFilter =
document.getElementById(
"wildCatFilter"
);

function filterWildCats(){

 const searchTerm =
searchInput.value
.toLowerCase();

const category =
breedFilter.value;

const filteredWildCats =
wildCats.filter(
    wildCat=>{

    const nameMatch =

    wildCat.name
    .toLowerCase()
    .includes(searchTerm);

    const categoryMatch =

    category === "all" ||

    wildCat.category === category;

    return (

        nameMatch &&
        categoryMatch

    );

});

renderWildCats(
    filteredWildCats
);

document.getElementById(
    "resultsCount"
).textContent =

`${filteredWildCats.length} Species Available`;
 
}

if(searchInput){

 searchInput.addEventListener(
    "input",
    filterWildCats
);
 
}

if(breedFilter){

 breedFilter.addEventListener(
    "change",
    filterWildCats
);
 
}

renderWildCats(
wildCats
);

function attachButtons(){

 document
.querySelectorAll(
    ".add-cart-btn"
)
.forEach(button=>{

    button.onclick = ()=>{

        addToCart({

            name:
            button.dataset.name,

            price:
            button.dataset.price,

            image:
            button.dataset.image

        });

    };

});
 
}

function animateCards(){

 const cards =
document.querySelectorAll(
    ".pet-card"
);

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(
            entry => {

                if(
                    entry.isIntersecting
                ){

                    entry.target
                    .classList.add(
                        "show"
                    );

                }

            }
        );

    },

    {
        threshold:0.15
    }

);

cards.forEach(card=>{

    observer.observe(card);

});
 
}

const sections =
document.querySelectorAll(
".reveal"
);

const revealObserver =
new IntersectionObserver(

 entries=>{

    entries.forEach(
        entry=>{

            if(
                entry.isIntersecting
            ){

                entry.target
                .classList.add(
                    "active"
                );

            }

        }
    );

},

{
    threshold:0.1
}
 
);

sections.forEach(
section=>{

     revealObserver.observe(
        section
    );

}
 
);
