/* ==========================
WISHLIST STORAGE
========================== */

let wishlist =
JSON.parse(
    localStorage.getItem(
        "CompanionReviewHubWishlist"
    )
) || [];

/* ==========================
PATH + TEXT HELPERS
========================== */

function normalizeWishlistImagePath(path){

    let cleanPath =
    String(path || "")
    .trim();

    cleanPath =
    cleanPath.replace(
        /^https?:\/\/[^/]+\//,
        ""
    );

    const assetIndex =
    cleanPath.indexOf(
        "assets/images/"
    );

    if(assetIndex !== -1){

        cleanPath =
        cleanPath.substring(
            assetIndex
        );

    }

    cleanPath =
    cleanPath
    .replace(/^\.\.\//g, "")
    .replace(/^\.\//g, "")
    .replace(/^\//g, "");

    return cleanPath;

}

function getWishlistImageSrc(path){

    const cleanPath =
    normalizeWishlistImagePath(path);

    if(!cleanPath) return "";

    const isInsidePagesFolder =
    window.location.pathname.includes(
        "/pages/"
    );

    return isInsidePagesFolder
    ? "../" + cleanPath
    : cleanPath;

}

function escapeWishlistText(value){

    return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

/* ==========================
SAVE WISHLIST
========================== */

function saveWishlist(){

    wishlist =
    wishlist.map(item=>({

        name:
        item.name,

        price:
        item.price,

        image:
        normalizeWishlistImagePath(
            item.image
        )

    }));

    localStorage.setItem(
        "CompanionReviewHubWishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();

}

/* ==========================
UPDATE WISHLIST COUNT
========================== */

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

/* ==========================
SMOOTH WISHLIST MESSAGE
========================== */

let wishlistMessageTimer = null;

function showWishlistMessage(message){

    let messageBox =
    document.querySelector(
        ".wishlist-action-message"
    );

    if(!messageBox){

        messageBox =
        document.createElement(
            "div"
        );

        messageBox.className =
        "wishlist-action-message";

        messageBox.setAttribute(
            "role",
            "status"
        );

        messageBox.setAttribute(
            "aria-live",
            "polite"
        );

        document.body.appendChild(
            messageBox
        );

    }

    messageBox.innerHTML =
    `
        <div class="wishlist-action-icon">
            ❤
        </div>

        <div class="wishlist-action-text">
            <strong>
                ${escapeWishlistText(message.title)}
            </strong>

            <span>
                ${escapeWishlistText(message.text)}
            </span>
        </div>
    `;

    messageBox.classList.add(
        "show"
    );

    if(wishlistMessageTimer){

        clearTimeout(
            wishlistMessageTimer
        );

    }

    wishlistMessageTimer =
    setTimeout(()=>{

        messageBox.classList.remove(
            "show"
        );

        setTimeout(()=>{

            if(messageBox && !messageBox.classList.contains("show")){

                messageBox.remove();

            }

        },350);

    },2800);

}

/* ==========================
STYLE INJECTION
========================== */

function injectWishlistInterfaceStyles(){

    if(
        document.getElementById(
            "wishlistInterfaceStyleFix"
        )
    ) return;

    const style =
    document.createElement(
        "style"
    );

    style.id =
    "wishlistInterfaceStyleFix";

    style.textContent =
    `
        .wishlist-action-message{
            position:fixed;
            top:92px;
            left:50%;
            transform:translate(-50%, -22px);
            z-index:999999;
            width:calc(100% - 32px);
            max-width:520px;
            display:flex;
            align-items:center;
            gap:14px;
            padding:16px 18px;
            border-radius:18px;
            background:#ffffff;
            color:#111827;
            border:1px solid #fecaca;
            box-shadow:0 20px 50px rgba(15,23,42,.18);
            opacity:0;
            visibility:hidden;
            pointer-events:none;
            transition:opacity .35s ease, transform .35s ease, visibility .35s ease;
        }

        .wishlist-action-message.show{
            opacity:1;
            visibility:visible;
            transform:translate(-50%, 0);
        }

        .wishlist-action-icon{
            display:flex;
            align-items:center;
            justify-content:center;
            flex:0 0 38px;
            width:38px;
            height:38px;
            border-radius:50%;
            background:#dc2626;
            color:#ffffff;
            font-size:1rem;
            font-weight:900;
        }

        .wishlist-action-text{
            display:flex;
            flex-direction:column;
            gap:4px;
            line-height:1.35;
        }

        .wishlist-action-text strong{
            color:#111827;
            font-size:.98rem;
        }

        .wishlist-action-text span{
            color:#4b5563;
            font-size:.9rem;
        }

        .wishlist-add-btn,
        button.wishlist-add-btn{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:8px;
            min-height:44px;
            padding:11px 18px;
            border-radius:999px;
            border:1px solid #fecaca;
            background:#fff1f2;
            color:#be123c !important;
            font-weight:800;
            cursor:pointer;
            text-decoration:none;
            transition:transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
        }

        .wishlist-add-btn:hover,
        button.wishlist-add-btn:hover{
            background:#ffe4e6;
            border-color:#fb7185;
            transform:translateY(-2px);
            box-shadow:0 12px 28px rgba(190,18,60,.14);
        }

        .wishlist-page{
            min-height:65vh;
            padding:70px 0;
            background:#f8fafc;
        }

        .wishlist-page .page-title{
            text-align:center;
            max-width:760px;
            margin:0 auto 35px;
        }

        .wishlist-page .page-title h1{
            color:#111827;
            margin-bottom:12px;
        }

        .wishlist-page .page-title p{
            color:#4b5563;
            line-height:1.8;
        }

        #wishlistContainer{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
            gap:24px;
        }

        .wishlist-card{
            background:#ffffff;
            border:1px solid #e5e7eb;
            border-radius:24px;
            overflow:hidden;
            box-shadow:0 12px 35px rgba(15,23,42,.08);
            display:flex;
            flex-direction:column;
            transition:transform .25s ease, box-shadow .25s ease;
        }

        .wishlist-card:hover{
            transform:translateY(-5px);
            box-shadow:0 18px 45px rgba(15,23,42,.12);
        }

        .wishlist-card img{
            width:100%;
            height:230px;
            object-fit:cover;
            display:block;
            background:#e5e7eb;
        }

        .wishlist-card h3{
            color:#111827;
            font-size:1.15rem;
            margin:18px 18px 8px;
        }

        .wishlist-card h4{
            color:#d97706;
            font-size:.98rem;
            margin:0 18px 10px;
        }

        .wishlist-card p{
            color:#4b5563;
            line-height:1.7;
            margin:0 18px 18px;
            font-size:.93rem;
        }

        .wishlist-card .remove-btn,
        .remove-btn{
            margin:0 18px 20px;
            min-height:42px;
            border:0;
            border-radius:999px;
            background:#fee2e2;
            color:#991b1b;
            font-weight:800;
            cursor:pointer;
            transition:.25s ease;
        }

        .wishlist-card .remove-btn:hover,
        .remove-btn:hover{
            background:#dc2626;
            color:#ffffff;
            transform:translateY(-2px);
        }

        .empty-wishlist{
            display:none;
            padding:70px 0;
            background:#f8fafc;
        }

        .empty-wishlist .empty-cart-box{
            max-width:620px;
            margin:0 auto;
            text-align:center;
            padding:40px 28px;
            background:#ffffff;
            border-radius:24px;
            box-shadow:0 12px 35px rgba(15,23,42,.08);
            border:1px solid #e5e7eb;
        }

        .empty-wishlist h2{
            color:#111827;
            margin-bottom:12px;
        }

        .empty-wishlist p{
            color:#4b5563;
            line-height:1.7;
            margin-bottom:22px;
        }

        .dark-mode .wishlist-action-message{
            background:#0f172a;
            color:#f8fafc;
            border-color:#7f1d1d;
            box-shadow:0 20px 50px rgba(0,0,0,.45);
        }

        .dark-mode .wishlist-action-text strong{
            color:#f8fafc;
        }

        .dark-mode .wishlist-action-text span{
            color:#cbd5e1;
        }

        .dark-mode .wishlist-add-btn,
        .dark-mode button.wishlist-add-btn{
            background:#1e293b;
            color:#fecdd3 !important;
            border-color:#be123c;
            box-shadow:none;
        }

        .dark-mode .wishlist-add-btn:hover,
        .dark-mode button.wishlist-add-btn:hover{
            background:#be123c;
            color:#ffffff !important;
            border-color:#fb7185;
        }

        .dark-mode .wishlist-page,
        .dark-mode .empty-wishlist{
            background:#020617;
        }

        .dark-mode .wishlist-page .page-title h1,
        .dark-mode .empty-wishlist h2{
            color:#f8fafc;
        }

        .dark-mode .wishlist-page .page-title p,
        .dark-mode .empty-wishlist p{
            color:#cbd5e1;
        }

        .dark-mode .wishlist-card,
        .dark-mode .empty-wishlist .empty-cart-box{
            background:#0f172a;
            border-color:#334155;
            box-shadow:0 12px 35px rgba(0,0,0,.35);
        }

        .dark-mode .wishlist-card h3{
            color:#f8fafc;
        }

        .dark-mode .wishlist-card h4{
            color:#fbbf24;
        }

        .dark-mode .wishlist-card p{
            color:#cbd5e1;
        }

        .dark-mode .wishlist-card .remove-btn,
        .dark-mode .remove-btn{
            background:#1e293b;
            color:#fecaca;
            border:1px solid #7f1d1d;
        }

        .dark-mode .wishlist-card .remove-btn:hover,
        .dark-mode .remove-btn:hover{
            background:#dc2626;
            color:#ffffff;
            border-color:#dc2626;
        }

        @media(max-width:700px){

            .wishlist-action-message{
                top:82px;
                width:calc(100% - 28px);
                padding:14px 15px;
                border-radius:16px;
            }

            .wishlist-action-icon{
                flex-basis:34px;
                width:34px;
                height:34px;
            }

            .wishlist-action-text strong{
                font-size:.92rem;
            }

            .wishlist-action-text span{
                font-size:.82rem;
            }

            .wishlist-add-btn,
            button.wishlist-add-btn{
                width:100%;
            }

            .wishlist-page{
                padding:50px 0;
            }

            #wishlistContainer{
                grid-template-columns:1fr;
            }

        }
    `;

    document.head.appendChild(
        style
    );

}

/* ==========================
ADD PROFILE TO WISHLIST
========================== */

function addToWishlist(item){

    const cleanItem = {

        name:
        item.name,

        price:
        item.price,

        image:
        normalizeWishlistImagePath(
            item.image
        )

    };

    const exists =
    wishlist.some(
        pet =>
        String(pet.name).toLowerCase() ===
        String(cleanItem.name).toLowerCase()
    );

    if(exists){

        showWishlistMessage({
            title:"Profile already saved.",
            text:"You can view it anytime in your saved profiles section."
        });

        return;

    }

    wishlist.push(
        cleanItem
    );

    saveWishlist();

    showWishlistMessage({
        title:"Profile saved for later review.",
        text:"You can view it anytime in your saved profiles section."
    });

}

/* ==========================
ATTACH BUTTONS
========================== */

function attachWishlistButtons(){

    document.addEventListener(
        "click",
        event=>{

            const button =
            event.target.closest(
                ".wishlist-add-btn"
            );

            if(!button) return;

            event.preventDefault();

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

}

/* ==========================
LOAD WISHLIST PAGE
========================== */

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

    container.innerHTML = "";

    if(wishlist.length === 0){

        if(emptyState){

            emptyState.style.display =
            "block";

        }

        return;

    }

    if(emptyState){

        emptyState.style.display =
        "none";

    }

    wishlist.forEach(
        (item,index)=>{

            const imageSrc =
            getWishlistImageSrc(
                item.image
            );

            container.innerHTML +=
            `
                <div class="wishlist-card">

                    <img
                    src="${imageSrc}"
                    alt="${escapeWishlistText(item.name)} profile image">

                    <h3>
                        ${escapeWishlistText(item.name)}
                    </h3>

                    <h4>
                        Review estimate: $${Number(item.price || 0).toLocaleString()}
                    </h4>

                    <p>
                        Saved for later review. Availability, care needs, delivery, and documentation may still need confirmation.
                    </p>

                    <button
                    type="button"
                    onclick="removeWishlist(${index})"
                    class="remove-btn">
                        Remove Saved Profile
                    </button>

                </div>
            `;

        }
    );

}

function removeWishlist(index){

    wishlist.splice(
        index,
        1
    );

    saveWishlist();

    loadWishlistPage();

}

/* ==========================
INITIALIZE
========================== */

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        injectWishlistInterfaceStyles();
        saveWishlist();
        updateWishlistCount();
        attachWishlistButtons();
        loadWishlistPage();

    }
);

window.addToWishlist = addToWishlist;
window.removeWishlist = removeWishlist;
window.loadWishlistPage = loadWishlistPage;