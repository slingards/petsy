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
                priceRange === "500-1500" &&
                (cardPrice < 500 || cardPrice > 1500)
            ){
                show = false;
            }

            if(
                priceRange === "1500-3000" &&
                (cardPrice < 1500 || cardPrice > 3000)
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

    const featured =
    document.getElementById(
        "featured"
    );

    if(featured){

        featured.scrollIntoView({

            behavior: "smooth",

            block: "start"

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

        resultBox.style.textAlign =
        "center";

        resultBox.style.margin =
        "25px 0";

        resultBox.style.padding =
        "15px";

        resultBox.style.borderRadius =
        "12px";

        resultBox.style.fontWeight =
        "600";

        resultBox.style.fontSize =
        "18px";

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

    if(count > 0){

        resultBox.style.background =
        "#e8fff0";

        resultBox.style.color =
        "#0f7b3f";

        resultBox.innerHTML =

        `Showing ${count} result(s)`;

    }else{

        resultBox.style.background =
        "#fff1f1";

        resultBox.style.color =
        "#cc0000";

        resultBox.innerHTML =

        `No animals found matching your search.<br>
        Try another breed, country, category, or price range.`;

    }

}