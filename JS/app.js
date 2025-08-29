let arrivals = [
    {
        img: "../Utilities/img/arrival_img_1.webp",
        caption: "New Accent Chairs",
        price: "Starting at $899"
    },
    {
        img: "../Utilities/img/arrival_img_2.webp",
        caption: "New Pillows",
        price: "Starting at $49.95"
    },
    {
        img: "../Utilities/img/arrival_img_3.webp",
        caption: "New Lighting",
        price: "Starting at $79.95"
    },
    {

        img: "../Utilities/img/arrival_img_4.webp",
        caption: "New End Tables",
        price: "Starting at $299"
    },
    {

        img: "../Utilities/img/arrival_img_5.webp",
        caption: "New Botanicals",
        price: "Starting at $16.95"
    },
    {

        img: "../Utilities/img/arrival_img_6.jpeg",
        caption: "New Dinnerware",
        price: "Starting at $8.95"
    },
    {

        img: "../Utilities/img/arrival_img_7.webp",
        caption: "New Rugs",
        price: "Starting at $799"
    },
    {

        img: "../Utilities/img/arrival_img_8.webp",
        caption: "New Decor",
        price: "Starting at $7.95"
    }

];

function renderArrivalImg(arrivals) {
    let arrivals_imgs = document.querySelector(".arrivals-imgs-container");

    arrivals.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("arrival-items")

        let img = document.createElement("img");
        img.src = val.img;
        img.alt = val.caption;

        let caption = document.createElement("h3");
        caption.innerText = val.caption;

        let price = document.createElement("p");
        price.innerText = val.price;

        div.append(img, caption, price);
        arrivals_imgs.append(div)
    })
}
renderArrivalImg(arrivals);


// video play start

let videoBtn = document.querySelector(".video-play>div");
let video = document.querySelector(".video"); 
let playIcon = document.querySelector(".fa-play");
let pauseIcon = document.querySelector(".fa-pause");
isVideoOpen = true;

videoBtn.addEventListener("click", ()=>{
    if(!isVideoOpen){
        video.play();
        playIcon.style.display = "none"
        pauseIcon.style.display = "inline-block"
        document.querySelector(".video-play").style.border = "2px dotted white";
        isVideoOpen = true;
    }
    else{
        video.pause();
        playIcon.style.display = "inline-block"
        pauseIcon.style.display = "none"
        document.querySelector(".video-play").style.border = "2px dotted white";
        isVideoOpen = false;
    }
})

// when clicking anywhere else, remove border
document.addEventListener("click", (e) => {
    if (!document.querySelector(".video-play").contains(e.target)) {
        document.querySelector(".video-play").style.border = "none";
    }
});


// Hero Card 

let heroCard = [
    {
        img: "../Utilities/img/HeroCarousel_Sofas_img_1.jpeg",
        caption: "Sofas",
    },
    {
        img: "../Utilities/img/HeroCarousel_CoffeeTables_img_2.webp",
        caption: "Coffee Tables",
    },
    {
        img: "../Utilities/img/HeroCarousel_Lighting_img_3.webp",
        caption: "Lighting",
    },
    {

        img: "../Utilities/img/HeroCarousel_AccentChairs_img_4.webp",
        caption: "Accent Chairs",
    },
    {

        img: "../Utilities/img/HeroCarousel_Pillows_img_5.webp",
        caption: "Pillows",
    },
    {

        img: "../Utilities/img/HeroCarousel_Rugs_img_6.jpeg",
        caption: "Rugs",
    },
    {

        img: "../Utilities/img/HeroCarousel_Candles_img_7.webp",
        caption: "Candles",
    },
    {

        img: "../Utilities/img/HeroCarousel_Botanicals_8.webp",
        caption: "Botanicals",
    },
    {

        img: "../Utilities/img/Baby_CBCC_Caro_1Cribs_img_9.webp",
        caption: "Cribes & Bassinates",
    },
    {

        img: "../Utilities/img/Baby_CBCC_Caro_2Dressers_img_10.webp",
        caption: "Dressers",
    },
    {

        img: "../Utilities/img/Baby_CBCC_Caro_3Seating_img_11.webp",
        caption: "Nursery Rocking Chairs & Gliders",
    },
    {

        img: "../Utilities/img/Kids_CBCC_Caro_6Bookcases_img_12.webp",
        caption: "Bookcases",
    },
    {

        img: "../Utilities/img/Baby_CBCC_Caro_5Bedding_img_13.webp",
        caption: "Bedding",
    },
    {

        img: "../Utilities/img/Baby_CBCC_Caro_6Rugs_img_14.webp",
        caption: "Rugs",
    },
    {

        img: "../Utilities/img/Kids_CBCC_Caro_9Lighting_img_15.webp",
        caption: "Lighting",
    }
    
];

const renderHeroCard = (heroCard) => {
    let HeroCardContainer = document.querySelector(".hero-card-content");

    heroCard.forEach(val => {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("heroCard-items");

        let div = document.createElement("div");

        let heroImg = document.createElement("img");
        heroImg.src = val.img;
        heroImg.alt = val.caption;

        let heroCap = document.createElement("p");
        heroCap.innerText = val.caption;

        let arrow = document.createElement("span");
        arrow.classList.add("small-arrow");

        let heroCapArrow = document.createElement("div");

        heroCapArrow.append(heroCap,arrow);
        div.append(heroImg,heroCapArrow);
        mainDiv.append(div);
        HeroCardContainer.append(mainDiv);
    })

}

renderHeroCard(heroCard)