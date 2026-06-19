const menuBtn =
document.querySelector(
    ".menu-btn"
);

const mobileMenu =
document.querySelector(
    ".mobile-menu"
);

menuBtn.addEventListener(
    "click",
    ()=>{

        mobileMenu.classList.toggle(
            "active"
        );

    }
);

document.addEventListener(
    "click",
    (e)=>{

        if(
            !mobileMenu.contains(e.target)
            &&
            !menuBtn.contains(e.target)
        ){

            mobileMenu.classList.remove(
                "active"
            );

        }

    }
);