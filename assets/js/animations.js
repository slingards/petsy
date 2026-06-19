/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){

 revealElements.forEach(element=>{

    const windowHeight =
    window.innerHeight;

    const elementTop =
    element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(
        elementTop <
        windowHeight - revealPoint
    ){

        element.classList.add("active");

    }

});
 
}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

function startCounter(){

 counters.forEach(counter=>{

    const target =
    parseInt(
        counter.innerText
        .replace("+","")
        .replace("%","")
        .replace(",","")
    );

    let current = 0;

    const increment =
    Math.ceil(target / 100);

    const updateCounter = ()=>{

        if(current < target){

            current += increment;

            counter.innerText =
            current;

            requestAnimationFrame(
                updateCounter
            );

        }else{

            counter.innerText =
            counter.dataset.suffix
            ?
            target +
            counter.dataset.suffix
            :
            target;
        }

    };

    updateCounter();

});
 
}

let counterStarted = false;

window.addEventListener("scroll",()=>{

 const statsSection =
document.querySelector(
    ".stats-section"
);

if(
    statsSection &&
    !counterStarted
){

    const top =
    statsSection
    .getBoundingClientRect()
    .top;

    if(top < window.innerHeight){

        counterStarted = true;

        startCounter();
    }

}
 
});

/* ==========================
BACK TO TOP BUTTON
========================== */

const backToTop =
document.querySelector(
".back-to-top"
);

window.addEventListener(
"scroll",
()=>{

     if(window.scrollY > 500){

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    }else{

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

}
 
);

/* ==========================
HEADER SHADOW
========================== */

const header =
document.querySelector(".header");

window.addEventListener(
"scroll",
()=>{

     if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow =
        "none";

    }

}
 
);

/* ==========================
SMOOTH SECTION FADE
========================== */

const sections =
document.querySelectorAll("section");

const sectionObserver =
new IntersectionObserver(

(entries)=>{

 entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add(
            "fade-up"
        );

    }

});
 
},

{
threshold:0.1
}

);

sections.forEach(section=>{

 sectionObserver.observe(section);
 
});

/* ==========================
FLOATING ELEMENTS
========================== */

const floatingElements =
document.querySelectorAll(
".floating"
);

floatingElements.forEach(element=>{

 element.style.animation =
"floating 4s ease-in-out infinite";
 
});

/* ==========================
IMAGE HOVER SCALE
========================== */

const images =
document.querySelectorAll(
".gallery-item img"
);

images.forEach(image=>{

 image.addEventListener(
    "mouseenter",
    ()=>{

        image.style.transform =
        "scale(1.08)";

    }
);

image.addEventListener(
    "mouseleave",
    ()=>{

        image.style.transform =
        "scale(1)";

    }
);
 
});

/* ==========================
BUTTON RIPPLE EFFECT
========================== */

const buttons =
document.querySelectorAll(
".primary-btn"
);

buttons.forEach(button=>{

 button.addEventListener(
    "click",
    function(e){

        const circle =
        document.createElement("span");

        const diameter =
        Math.max(
            button.clientWidth,
            button.clientHeight
        );

        circle.style.width =
        diameter + "px";

        circle.style.height =
        diameter + "px";

        circle.style.position =
        "absolute";

        circle.style.borderRadius =
        "50%";

        circle.style.background =
        "rgba(255,255,255,.4)";

        circle.style.left =
        e.offsetX -
        diameter / 2 +
        "px";

        circle.style.top =
        e.offsetY -
        diameter / 2 +
        "px";

        circle.style.pointerEvents =
        "none";

        circle.style.transform =
        "scale(0)";

        circle.style.transition =
        ".6s";

        button.appendChild(circle);

        requestAnimationFrame(()=>{

            circle.style.transform =
            "scale(4)";

            circle.style.opacity =
            "0";
        });

        setTimeout(()=>{

            circle.remove();

        },600);

    }

);
 
});
