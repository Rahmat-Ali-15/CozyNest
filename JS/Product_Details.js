import { placeholder } from "../JS/Navbar_Footer.js";
placeholder();

const fetchApi = async() => {
    let api = "https://api-server-zecj.onrender.com/Modern-Furniture";
    try {
        let res = await fetch(api);
        let data = await res.json();
        renderThumbnail
        console.log("🚀 ~ data:", data.Furniture.main_product.lounge[0].thumbnail_img);
    } catch (error) {
        console.log(error)
    }
}
fetchApi()

const renderThumbnail = () => {
    let thumbnailContainer = document.querySelector(".left-thumbnail-container");

    
}