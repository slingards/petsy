document.addEventListener(
"DOMContentLoaded",
() => {

     const modal =
    document.getElementById(
        "quickViewModal"
    );

    if(!modal) return;

    const closeBtn =
    document.querySelector(
        ".modal-close"
    );

    const modalImage =
    modal.querySelector(
        ".modal-image img"
    );

    const modalCategory =
    modal.querySelector(
        ".pet-category"
    );

    const modalName =
    modal.querySelector(
        ".modal-details h2"
    );

    const modalPrice =
    modal.querySelector(
        ".modal-details h3"
    );

    const modalAddBtn =
    document.getElementById(
        "modalAddToCart"
    );

    const modalList =
    modal.querySelectorAll(
        ".modal-details ul li"
    );

    document
    .querySelectorAll(
        ".quick-view-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                modalImage.src =
                button.dataset.image;

                modalCategory.textContent =
                button.dataset.category ||
                "Pet";

                modalName.textContent =
                button.dataset.name;

                modalPrice.textContent =
                "$" +
                button.dataset.price;

                modalAddBtn.dataset.name =
                button.dataset.name;

                modalAddBtn.dataset.price =
                button.dataset.price;

                modalAddBtn.dataset.image =
                button.dataset.image;

                modalList[0].textContent =
                "Age: " +
                (
                    button.dataset.age ||
                    "N/A"
                );

                modalList[1].textContent =
                "Vaccinated: " +
                (
                    button.dataset.vaccinated ||
                    "Yes"
                );

                modalList[2].textContent =
                "Gender: " +
                (
                    button.dataset.gender ||
                    "Unknown"
                );

                modalList[3].textContent =
                "Location: " +
                (
                    button.dataset.location ||
                    "Unknown"
                );

                modal.classList.add(
                    "active"
                );

            }
        );

    });

    if(modalAddBtn){

        modalAddBtn.addEventListener(
            "click",
            () => {

                if(
                    typeof addToCart !==
                    "function"
                ){

                    console.error(
                        "addToCart function not found"
                    );

                    return;

                }

                addToCart({

                    name:
                    modalAddBtn.dataset.name,

                    price:
                    modalAddBtn.dataset.price,

                    image:
                    modalAddBtn.dataset.image

                });

                modal.classList.remove(
                    "active"
                );

            }
        );

    }

    if(closeBtn){

        closeBtn.addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "active"
                );

            }
        );

    }

    modal.addEventListener(
        "click",
        e => {

            if(
                e.target === modal
            ){

                modal.classList.remove(
                    "active"
                );

            }

        }
    );

}
 
);
