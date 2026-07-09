document.addEventListener("DOMContentLoaded", () => {

    const button =
    document.getElementById(
        "searchPetsBtn"
    );

    if(!button) return;

    button.addEventListener(
        "click",
        searchPets
    );

});

function searchPets(e){

    if(e){
        e.preventDefault();
    }

    const type =
    document.getElementById(
        "animalType"
    ).value.toLowerCase();

    const breed =
    document.getElementById(
        "breedSearch"
    ).value.trim().toLowerCase();

    const country =
    document.getElementById(
        "countrySearch"
    ).value.toLowerCase();

    const priceRange =
    document.getElementById(
        "priceSearch"
    ).value;

    const cards =
    document.querySelectorAll(
        ".pet-card"
    );

    let resultsFound = 0;

    cards.forEach(card => {

        const cardType =
        card.dataset.category || "";

        const cardName =
        card.dataset.name || "";

        const cardCountry =
        card.dataset.country || "";

        const cardPrice =
        Number(
            card.dataset.price || 0
        );

        let show = true;

        /* CATEGORY */

        if(
            type !== "all" &&
            cardType !== type
        ){
            show = false;
        }

        /* BREED */

        if(
            breed !== "" &&
            !cardName.includes(breed)
        ){
            show = false;
        }

        /* COUNTRY */

        if(
            country !== "all" &&
            cardCountry !== country
        ){
            show = false;
        }

        /* PRICE */

        if(priceRange !== "all"){

            if(
                priceRange === "0-500" &&
                (cardPrice < 0 || cardPrice > 500)
            ){
                show = false;
            }

            if(
                priceRange === "500-1800" &&
                (cardPrice < 500 || cardPrice > 1800)
            ){
                show = false;
            }

            if(
                priceRange === "1800-3000" &&
                (cardPrice < 1800 || cardPrice > 3000)
            ){
                show = false;
            }

            if(
                priceRange === "3000+" &&
                cardPrice < 3000
            ){
                show = false;
            }

        }

        if(show){

            card.style.display =
            "block";

            resultsFound++;

        }else{

            card.style.display =
            "none";

        }

    });

    updateResults(resultsFound);

    const resultBox =
    document.getElementById(
        "searchResultsInfo"
    );

    if(resultBox){

        resultBox.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}

function updateResults(count){

    let resultBox =
    document.getElementById(
        "searchResultsInfo"
    );

    if(!resultBox){

        resultBox =
        document.createElement(
            "div"
        );

        resultBox.id =
        "searchResultsInfo";

        const featured =
        document.getElementById(
            "featured"
        );

        if(featured){

            featured.insertAdjacentElement(
                "beforebegin",
                resultBox
            );

        }

    }

    const featured =
    document.getElementById(
        "featured"
    );

    resultBox.className =
    "search-results-info";

    if(count > 0){

        if(featured){
            featured.style.display = "block";
        }

        resultBox.classList.remove(
            "no-results"
        );

        resultBox.classList.add(
            "has-results"
        );

        resultBox.innerHTML =
        `
            Showing ${count} result(s)
        `;

    }else{

        if(featured){
            featured.style.display = "none";
        }

        resultBox.classList.remove(
            "has-results"
        );

        resultBox.classList.add(
            "no-results"
        );

        resultBox.innerHTML =
        `
            <h3>No animals found matching your search.</h3>

            <p>
                This pet may still be available in one of our full category pages.
                Try another breed, country, category, or price range.
            </p>

            <div class="search-category-buttons">

                <a href="pages/dogs.html">
                    Search Dogs
                </a>

                <a href="pages/cats.html">
                    Search Cats
                </a>

                <a href="pages/birds.html">
                    Search Birds
                </a>

                <a href="pages/wild-cats.html">
                    Search Wild Cats
                </a>

                <a href="pages/reptiles.html">
                    Search Reptiles
                </a>

            </div>
        `;

    }

}