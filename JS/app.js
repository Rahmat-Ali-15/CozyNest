// let currentIndex = 3;
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

function renderArrivalImg(arrivals){
    let arrivals_imgs = document.querySelector(".arrivals-imgs");

    arrivals.forEach(val=>{
        let div = document.createElement("div");
        div.classList.add("arrival-items")

        let img = document.createElement("img");
        img.src = val.img;
        img.alt = val.caption;
        
        let caption = document.createElement("h3");
        caption.innerText = val.caption;

        let price = document.createElement("p");
        price.innerText = val.price;

        div.append(img,caption,price);
        arrivals_imgs.append(div)
    })
}
renderArrivalImg(arrivals);