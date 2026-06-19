const reptiles = [

{
    name:"Ball Python",
    category:"snake",
    price:350,
    image:"assets/images/reptiles/ball-python.jpg",
    age:"8 Months",
    location:"USA",
    description:"Popular beginner snake known for its calm temperament."
},

{
    name:"Burmese Python",
    category:"snake",
    price:1200,
    image:"assets/images/reptiles/burmese-python.jpg",
    age:"1 Year",
    location:"Myanmar",
    description:"Large and powerful snake known for its impressive size."
},

{
    name:"California King Snake",
    category:"snake",
    price:300,
    image:"assets/images/reptiles/california-king-snake.jpg",
    age:"8 Months",
    location:"USA",
    description:"Beautiful striped snake popular among reptile enthusiasts."
},

{
    name:"Blue Tongue Skink",
    category:"lizard",
    price:450,
    image:"assets/images/reptiles/blue-tongue-skink.jpg",
    age:"1 Year",
    location:"Australia",
    description:"Friendly lizard famous for its bright blue tongue."
},

{
    name:"Savannah Monitor",
    category:"lizard",
    price:650,
    image:"assets/images/reptiles/savannah-monitor.jpg",
    age:"1 Year",
    location:"Ghana",
    description:"Intelligent monitor lizard with a strong personality."
},

{
    name:"Ackie Monitor",
    category:"lizard",
    price:950,
    image:"assets/images/reptiles/ackie-monitor.jpg",
    age:"10 Months",
    location:"Australia",
    description:"Smaller monitor species known for its activity and intelligence."
},

{
    name:"Map Turtle",
    category:"turtle",
    price:180,
    image:"assets/images/reptiles/map-turtle.jpg",
    age:"1 Year",
    location:"USA",
    description:"Freshwater turtle with unique map-like shell markings."
},

{
    name:"Musk Turtle",
    category:"turtle",
    price:130,
    image:"assets/images/reptiles/musk-turtle.jpg",
    age:"8 Months",
    location:"USA",
    description:"Small aquatic turtle ideal for compact setups."
},

{
    name:"Hermann's Tortoise",
    category:"tortoise",
    price:450,
    image:"assets/images/reptiles/hermanns-tortoise.jpg",
    age:"2 Years",
    location:"Italy",
    description:"Popular pet tortoise known for its manageable size."
},

{
    name:"Leopard Tortoise",
    category:"tortoise",
    price:700,
    image:"assets/images/reptiles/leopard-tortoise.jpg",
    age:"3 Years",
    location:"South Africa",
    description:"Beautiful tortoise with striking spotted shell patterns."
},

{
    name:"Red Footed Tortoise",
    category:"tortoise",
    price:550,
    image:"assets/images/reptiles/red-footed-tortoise.jpg",
    age:"2 Years",
    location:"Brazil",
    description:"Colorful tropical tortoise with distinctive red scales."
},

{
    name:"Leopard Gecko",
    category:"lizard",
    price:180,
    image:"assets/images/reptiles/leopard-gecko.jpg",
    age:"6 Months",
    location:"Canada",
    description:"Friendly and easy-to-care-for reptile."
},

{
    name:"Red Eared Slider",
    category:"turtle",
    price:120,
    image:"assets/images/reptiles/red-eared-slider.jpg",
    age:"1 Year",
    location:"USA",
    description:"One of the most popular pet turtles."
},

{
    name:"Sulcata Tortoise",
    category:"tortoise",
    price:600,
    image:"assets/images/reptiles/sulcata-tortoise.jpg",
    age:"2 Years",
    location:"South Africa",
    description:"Large tortoise species known for longevity."
},

{
    name:"Corn Snake",
    category:"snake",
    price:220,
    image:"assets/images/reptiles/corn-snake.jpg",
    age:"7 Months",
    location:"USA",
    description:"Gentle and colorful snake ideal for beginners."
},

{
    name:"King Snake",
    category:"snake",
    price:280,
    image:"assets/images/reptiles/king-snake.jpg",
    age:"9 Months",
    location:"Mexico",
    description:"Beautiful patterned snake with a calm temperament."
},

{
    name:"Milk Snake",
    category:"snake",
    price:260,
    image:"assets/images/reptiles/milk-snake.jpg",
    age:"8 Months",
    location:"USA",
    description:"Colorful snake often mistaken for coral snakes."
},

{
    name:"Boa Constrictor",
    category:"snake",
    price:650,
    image:"assets/images/reptiles/boa-constrictor.jpg",
    age:"1 Year",
    location:"Brazil",
    description:"Large and impressive snake popular among enthusiasts."
},

{
    name:"Crested Gecko",
    category:"lizard",
    price:180,
    image:"assets/images/reptiles/crested-gecko.jpg",
    age:"6 Months",
    location:"New Caledonia",
    description:"Easy-to-care-for gecko with distinctive eyelashes."
},

{
    name:"Tokay Gecko",
    category:"lizard",
    price:320,
    image:"assets/images/reptiles/tokay-gecko.jpg",
    age:"10 Months",
    location:"Thailand",
    description:"Brightly colored gecko known for its vocal nature."
},

{
    name:"Bearded Dragon",
    category:"lizard",
    price:250,
    image:"assets/images/reptiles/bearded-dragon.jpg",
    age:"8 Months",
    location:"Australia",
    description:"Friendly reptile and one of the most popular pet lizards."
},

{
    name:"Green Iguana",
    category:"lizard",
    price:500,
    image:"assets/images/reptiles/green-iguana.jpg",
    age:"1 Year",
    location:"Costa Rica",
    description:"Large herbivorous lizard with striking appearance."
},

{
    name:"Panther Chameleon",
    category:"lizard",
    price:750,
    image:"assets/images/reptiles/panther-chameleon.jpg",
    age:"9 Months",
    location:"Madagascar",
    description:"Famous for vibrant colors and independent eyes."
},

{
    name:"Painted Turtle",
    category:"turtle",
    price:150,
    image:"assets/images/reptiles/painted-turtle.jpg",
    age:"1 Year",
    location:"Canada",
    description:"Beautiful freshwater turtle with colorful markings."
},

{
    name:"Russian Tortoise",
    category:"tortoise",
    price:280,
    image:"assets/images/reptiles/russian-tortoise.jpg",
    age:"2 Years",
    location:"Kazakhstan",
    description:"Hardy tortoise species suitable for beginners."
},

{
    name:"Aldabra Giant Tortoise",
    category:"tortoise",
    price:3500,
    image:"assets/images/reptiles/aldabra-tortoise.jpg",
    age:"5 Years",
    location:"Seychelles",
    description:"One of the world's largest tortoise species with exceptional longevity."
}

];

/* ==========================
GRID
========================== */

const reptilesGrid =
document.getElementById(
    "reptilesGrid"
);

/* ==========================
RENDER REPTILES
========================== */

function renderReptiles(
    reptilesArray
){

    reptilesGrid.innerHTML = "";

    reptilesArray.forEach(
        reptile=>{

        reptilesGrid.innerHTML += `

        <div

        class="pet-card"

        data-category="${reptile.category}"

        data-name="${reptile.name.toLowerCase()}">

            <img
            src="../${reptile.image}"
            alt="${reptile.name}">

            <div class="pet-content">

                <span class="pet-category">

                    Reptile

                </span>

                <h3>

                    ${reptile.name}

                </h3>

                <p>

                    ${reptile.description}

                </p>

                <div class="pet-info">

                    <span>

                        ${reptile.age}

                    </span>

                    <span>

                        ${reptile.location}

                    </span>

                </div>

                <div class="pet-footer">

                    <h4>

                        $${reptile.price}

                    </h4>

                    <div class="pet-actions">

                        <button

                        class="primary-btn add-cart-btn"

                        data-name="${reptile.name}"

                        data-price="${reptile.price}"

                        data-image="../${reptile.image}">

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

/* ==========================
SEARCH
========================== */

const searchInput =
document.getElementById(
    "reptileSearch"
);

const reptileFilter =
document.getElementById(
    "reptileFilter"
);

function filterReptiles(){

    const searchTerm =
    searchInput.value
    .toLowerCase();

    const category =
    reptileFilter.value;

    const filteredReptiles =
    reptiles.filter(
        reptile=>{

        const nameMatch =

        reptile.name
        .toLowerCase()
        .includes(searchTerm);

        const categoryMatch =

        category === "all" ||

        reptile.category === category;

        return (

            nameMatch &&
            categoryMatch

        );

    });

    renderReptiles(
        filteredReptiles
    );

    document.getElementById(
        "resultsCount"
    ).textContent =

    `${filteredReptiles.length} Species Available`;

}

/* ==========================
EVENTS
========================== */

if(searchInput){

    searchInput.addEventListener(
        "input",
        filterReptiles
    );

}

if(reptileFilter){

    reptileFilter.addEventListener(
        "change",
        filterReptiles
    );

}

/* ==========================
INITIAL LOAD
========================== */

renderReptiles(
    reptiles
);

/* ==========================
ADD TO CART
========================== */

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

/* ==========================
CARD ANIMATION
========================== */

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

/* ==========================
SECTION REVEAL
========================== */

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