const birds = [

{
    name:"Blue Macaw",
    category:"parrot",
    price:2100,
    image:"assets/images/birds/blue-macaw.jpg",
    age:"1 Year",
    location:"Brazil",
    description:"Intelligent and colorful companion bird."
},

{
    name:"African Grey Parrot",
    category:"parrot",
    price:2800,
    image:"assets/images/birds/african-grey.jpg",
    age:"2 Years",
    location:"Congo",
    description:"Highly intelligent bird known for speech abilities."
},

{
    name:"Cockatiel",
    category:"small",
    price:350,
    image:"assets/images/birds/cockatiel.jpg",
    age:"8 Months",
    location:"Australia",
    description:"Friendly and affectionate family bird."
},

{
    name:"Budgerigar",
    category:"small",
    price:120,
    image:"assets/images/birds/budgerigar.jpg",
    age:"6 Months",
    location:"Australia",
    description:"Popular pet bird with playful personality."
},

{
    name:"Sun Conure",
    category:"parrot",
    price:900,
    image:"assets/images/birds/sun-conure.jpg",
    age:"10 Months",
    location:"South America",
    description:"Bright and energetic bird with vibrant colors."
},

{
    name:"Lovebird",
    category:"small",
    price:180,
    image:"assets/images/birds/lovebird.jpg",
    age:"5 Months",
    location:"Africa",
    description:"Small affectionate bird that enjoys companionship."
},

{
    name:"Canary",
    category:"songbird",
    price:150,
    image:"assets/images/birds/canary.jpg",
    age:"7 Months",
    location:"Spain",
    description:"Beautiful singing bird with bright plumage."
},

{
    name:"Finch",
    category:"songbird",
    price:90,
    image:"assets/images/birds/finch.jpg",
    age:"5 Months",
    location:"Australia",
    description:"Small active bird ideal for aviaries."
},

{
    name:"Eclectus Parrot",
    category:"parrot",
    price:2500,
    image:"assets/images/birds/eclectus-parrot.jpg",
    age:"1 Year",
    location:"Indonesia",
    description:"Known for striking colors and calm personality."
},

{
    name:"Cockatoo",
    category:"parrot",
    price:3200,
    image:"assets/images/birds/cockatoo.jpg",
    age:"2 Years",
    location:"Australia",
    description:"Large affectionate bird with impressive crest."
},

{
    name:"Amazon Parrot",
    category:"parrot",
    price:1800,
    image:"assets/images/birds/amazon-parrot.jpg",
    age:"1 Year",
    location:"Mexico",
    description:"Social bird famous for mimicking sounds."
},

{
    name:"Indian Ringneck",
    category:"parrot",
    price:750,
    image:"assets/images/birds/indian-ringneck.jpg",
    age:"9 Months",
    location:"India",
    description:"Beautiful talking bird with elegant appearance."
},

{
    name:"Rosella",
    category:"parrot",
    price:650,
    image:"assets/images/birds/rosella.jpg",
    age:"8 Months",
    location:"Australia",
    description:"Colorful bird known for its vibrant feathers."
},

{
    name:"Lorikeet",
    category:"parrot",
    price:850,
    image:"assets/images/birds/lorikeet.jpg",
    age:"10 Months",
    location:"Australia",
    description:"Active nectar-feeding bird with brilliant colors."
},

{
    name:"Scarlet Macaw",
    category:"parrot",
    price:3500,
    image:"assets/images/birds/scarlet-macaw.jpg",
    age:"2 Years",
    location:"Costa Rica",
    description:"Magnificent large parrot with vivid red plumage."
},

{
    name:"Hyacinth Macaw",
    category:"parrot",
    price:12000,
    image:"assets/images/birds/hyacinth-macaw.jpg",
    age:"3 Years",
    location:"Brazil",
    description:"Largest flying parrot species with striking blue feathers."
},

{
    name:"Toucan",
    category:"exotic",
    price:4500,
    image:"assets/images/birds/toucan.jpg",
    age:"1 Year",
    location:"South America",
    description:"Exotic bird famous for its colorful oversized bill."
},

{
    name:"Owl",
    category:"exotic",
    price:3800,
    image:"assets/images/birds/owl.jpg",
    age:"2 Years",
    location:"Canada",
    description:"Majestic nocturnal bird with exceptional vision."
},

{
    name:"Peacock",
    category:"exotic",
    price:2200,
    image:"assets/images/birds/peacock.jpg",
    age:"2 Years",
    location:"India",
    description:"Elegant bird renowned for its spectacular tail display."
},

{
    name:"White Dove",
    category:"songbird",
    price:120,
    image:"assets/images/birds/white-dove.jpg",
    age:"6 Months",
    location:"USA",
    description:"Peaceful and graceful companion bird."
}

];

const birdsGrid =
document.getElementById(
    "birdsGrid"
);

function renderBirds(birdsArray){

    if(!birdsGrid) return;

    birdsGrid.innerHTML = "";

    birdsArray.forEach(bird=>{

        birdsGrid.innerHTML += `

        <div
        class="pet-card"
        data-category="${bird.category}"
        data-name="${bird.name.toLowerCase()}">

            <img
            src="../${bird.image}"
            alt="${bird.name}">

            <div class="pet-content">

                <span class="pet-category">

                    Bird

                </span>

                <h3>

                    ${bird.name}

                </h3>

                <p>

                    ${bird.description}

                </p>

                <div class="pet-info">

                    <span>

                        ${bird.age}

                    </span>

                    <span>

                        ${bird.location}

                    </span>

                </div>

                <div class="pet-footer">

                    <h4>

                        $${bird.price}

                    </h4>

                    <div class="pet-actions">

                        <button
                        class="primary-btn add-cart-btn"
                        data-name="${bird.name}"
                        data-price="${bird.price}"
                        data-image="../${bird.image}">

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
    "birdSearch"
);

const breedFilter =
document.getElementById(
    "birdFilter"
);

function filterBirds(){

    const searchTerm =
    searchInput ?
    searchInput.value.toLowerCase()
    : "";

    const category =
    breedFilter ?
    breedFilter.value
    : "all";

    const filteredBirds =
    birds.filter(bird=>{

        const nameMatch =

        bird.name
        .toLowerCase()
        .includes(searchTerm);

        const categoryMatch =

        category === "all" ||

        bird.category === category;

        return (

            nameMatch &&
            categoryMatch

        );

    });

    renderBirds(
        filteredBirds
    );

    const results =
    document.getElementById(
        "resultsCount"
    );

    if(results){

        results.textContent =

        `${filteredBirds.length} Birds Available`;

    }

}

if(searchInput){

    searchInput.addEventListener(
        "input",
        filterBirds
    );

}

if(breedFilter){

    breedFilter.addEventListener(
        "change",
        filterBirds
    );

}

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

renderBirds(birds);


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

        (entries)=>{

            entries.forEach(
                entry=>{

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold:0.2
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
