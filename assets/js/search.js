document.addEventListener("DOMContentLoaded", () => {

    /*
        Your HTML button currently uses:
        id="searchProfilesBtn"

        Older versions of this script expected:
        id="searchPetsBtn"

        This script supports both names so the search button works.
    */

    const button =
    document.getElementById("searchProfilesBtn") ||
    document.getElementById("searchPetsBtn");

    const searchForm =
    button ? button.closest("form") : null;

    if(button){

        button.addEventListener(
            "click",
            searchPets
        );

    }

    /*
        This also allows the search to work if a user presses Enter
        inside the breed input field.
    */

    if(searchForm){

        searchForm.addEventListener(
            "submit",
            searchPets
        );

    }

});

function normalizeText(value){

    return String(value || "")
    .trim()
    .toLowerCase();

}

function normalizeCountry(value){

    const country =
    normalizeText(value);

    const countryAliases = {

        "usa":"united-states",
        "u.s.a":"united-states",
        "u.s.":"united-states",
        "us":"united-states",
        "united states":"united-states",
        "united-states":"united-states",

        "uk":"united-kingdom",
        "u.k.":"united-kingdom",
        "united kingdom":"united-kingdom",
        "united-kingdom":"united-kingdom",

        "south africa":"south-africa",
        "south-africa":"south-africa"

    };

    return countryAliases[country] || country;

}

function searchPets(e){

    if(e){
        e.preventDefault();
    }

    const typeInput =
    document.getElementById(
        "animalType"
    );

    const breedInput =
    document.getElementById(
        "breedSearch"
    );

    const countryInput =
    document.getElementById(
        "countrySearch"
    );

    const priceInput =
    document.getElementById(
        "priceSearch"
    );

    const featured =
    document.getElementById(
        "featured"
    );

    if(!typeInput || !breedInput || !countryInput || !priceInput){

        console.warn(
            "Search fields are missing. Please check animalType, breedSearch, countrySearch, and priceSearch IDs."
        );

        return;

    }

    const type =
    normalizeText(
        typeInput.value
    );

    const breed =
    normalizeText(
        breedInput.value
    );

    const country =
    normalizeCountry(
        countryInput.value
    );

    const priceRange =
    priceInput.value;

    const cards =
    document.querySelectorAll(
        ".pet-card"
    );

    let resultsFound = 0;

    cards.forEach(card => {

        const cardType =
        normalizeText(
            card.dataset.category
        );

        const cardName =
        normalizeText(
            card.dataset.name
        );

        const cardCountry =
        normalizeCountry(
            card.dataset.country
        );

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

        /* NAME / BREED */

        if(
            breed !== "" &&
            !cardName.includes(breed)
        ){
            show = false;
        }

        /* COUNTRY / LOCATION */

        if(
            country !== "all" &&
            cardCountry !== country
        ){
            show = false;
        }

        /* REVIEW ESTIMATE */

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

    /*
        Scroll behavior:
        - If there are results, scroll to the featured profiles section.
        - If there are no results, scroll to the no-results message.
    */

    const resultBox =
    document.getElementById(
        "searchResultsInfo"
    );

    if(resultsFound > 0 && featured){

        featured.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    }else if(resultBox){

        resultBox.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    }

}

function updateResults(count){

    let resultBox =
    document.getElementById(
        "searchResultsInfo"
    );

    const featured =
    document.getElementById(
        "featured"
    );

    if(!resultBox){

        resultBox =
        document.createElement(
            "div"
        );

        resultBox.id =
        "searchResultsInfo";

        if(featured){

            featured.insertAdjacentElement(
                "beforebegin",
                resultBox
            );

        }

    }

    resultBox.className =
    "search-results-info";

    if(count > 0){

        if(featured){

            featured.style.display =
            "block";

        }

        resultBox.classList.remove(
            "no-results"
        );

        resultBox.classList.add(
            "has-results"
        );

        resultBox.innerHTML =
        `
            <h3>
                ${count} Matching Profile(s) Found
            </h3>

            <p>
                These companion animal profiles are shown for review. Availability, delivery, care needs, and legal requirements may still need to be confirmed by CompanionReviewHub support.
            </p>
        `;

    }else{

        if(featured){

            featured.style.display =
            "none";

        }

        resultBox.classList.remove(
            "has-results"
        );

        resultBox.classList.add(
            "no-results"
        );

        resultBox.innerHTML =
        `
            <h3>
                No matching profiles found.
            </h3>

            <p>
                We could not find an exact match for your current search. The companion animal you are looking for may still appear in one of our full category pages, or availability may need to be confirmed by CompanionReviewHub support.
            </p>

            <p>
                Try another breed, country, category, or review estimate range.
            </p>

            <div class="search-category-buttons">

                <a href="pages/dogs.html">
                    Review Dog Profiles
                </a>

                <a href="pages/cats.html">
                    Review Cat Profiles
                </a>

                <a href="pages/birds.html">
                    Review Bird Profiles
                </a>

                <a href="pages/wild-cats.html">
                    Regulated Exotic Feline Profiles
                </a>

                <a href="pages/reptiles.html">
                    Review Reptile Profiles
                </a>

            </div>
        `;

    }

}