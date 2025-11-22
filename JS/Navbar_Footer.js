export const navbar = () => {
  return `

      




        <section class="header-top">

            <ul>
                <li><a href="#">CozyNest</a></li>
                <li><a href="#">Cozy&kids</a></li>
                <li><a href="#">CN2</a></li>
                <li><a href="#">HUDSON <span></span> GRACE</a></li>
                <a href="#"><img src="../Utilities/logo/indian_logo.png" alt="Indian Logo"></a>
            </ul>

        </section>

        <section class="search-bar">

            <div class="search" tabindex="0">
                <input type="search" class="search-input" >
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="logo">
                <p>CozyNest</p>
            </div>

            <div class="icons-container">

                <div class="sign-in">
                    <p><a href="#">Orders</a> & <a href="../HTML/SignIn_Page.html">Sign In</a></p>
                    <li class="user-name-icon">
                        <p id="user_firstName"></p>
                        <i class="fa-solid fa-user"></i>
                    </li>

                    <div class="sign-in-popUp">
                        <div>
                            <i class="fa-regular fa-user"></i>
                            <a href="#" id="goTo_singIn_page">Sign In / Create Account</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-box-open"></i>
                            <a href="#">Track Orders / Schedule Delivery</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-address-card"></i>
                            <a href="#">Create a Registry</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-credit-card"></i>
                            <a href="#">CozyNest Credit Card</a>
                        </div>
                    </div>
                </div>

                <li class="location">
                    <i class="fa-solid fa-location-dot"></i>

                    <div class="location-popUp">
                        <div>
                            <i class="fa-solid fa-truck-fast"></i>
                            <a href="#">Shipping to 843113</a>
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <a href="#">Select My Store</a>
                        </div>
                    </div>
                </li>

                <li class="heart">
                    <i class="fa-solid fa-heart"></i>

                    <div class="heart-popUp">
                        <h5>Something catch your eye?</h5>
                        <ol>
                            <li><span>Save</span> it to Favorites</li>
                            <li><span>Create</span> a Mood Board</li>
                            <li><span>See</span> it all together</li>
                        </ol>
                        <img src="../Utilities/img/CB_HDR-201707_Mdbrd-dd.png" alt="Sofa img">
                        <p><a href="../HTML/SignIn_Page.html">Sign in</a> to see items you may have added using another computer or device.</p>
                        <a href="../HTML/SignIn_Page.html" ><button type="button">SIGN IN</button></a>
                    </div>
                </li>

                <li class="shopping-cart">
                    <i class="fa-solid fa-cart-shopping"></i>

                    <div class="shopping-popUp">
                        <h5>Are you missing items in your cart?</h5>
                        <p><a href="#">Sign in</a> to see items you may have added using another computer or device.</p>
                        <button type="button">VIEW CART</button>
                    </div>
                </li>

            </div>

        </section>

        <div class="header-bottom">
            <ul>
                <li class="new">
                    <a href="#">NEW!</a>

                    <div class="new-popup">
                        <div class="top-category">
                            <h3>Top New Categories</h3>
                            <ul>
                                <li><a href="#">Fall 2025 New Arrivals</a></li>
                                <li><a href="#">Sofas & Sectionals</a></li>
                                <li><a href="#">Dining Tables</a></li>
                                <li><a href="#">Wine Glasses</a></li>
                                <li><a href="#">Serveware</a></li>
                                <li><a href="#">Coffee & Espresso</a></li>
                                <li><a href="#">Pillos & Throws</a></li>
                                <li><a href="#">Duvet Covers</a></li>
                                <li><a href="#">Rugs</a></li>
                                <li><a href="#">Windows</a></li>
                                <li><a href="#">Home Renovation</a></li>
                            </ul>
                        </div>
                        <div class="trending">
                            <h3>Trending</h3>
                            <ul>
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">The Fall Lookbook</a></li>
                                <li><a href="#">The Fall Color Edit</a></li>
                                <li><a href="#">Home Is Where Your Heart Lives</a></li>
                                <li><a href="#">Olivia Culpo's Home Redesign</a></li>
                                <li><a href="#">The Clean Kitchen</a></li>
                                <li><a href="#">Our Favourite Recipes</a></li>
                                <li><a href="#">CozyKitchen</a></li>
                                <li><a href="#">The Personalization Shop</a></li>
                                <li><a href="#">Sustainable & Quality Design</a></li>
                                <li><a href="#">#CozyStyle</a></li>
                            </ul>
                        </div>
                        <div class="collabs">
                            <h3>Collabs</h3>
                            <ul>
                                <li><a href="#">Daniel Humm</a></li>
                                <li><a href="#">Jake Arnold</a></li>
                                <li><a href="#">Brigette Romanek</a></li>
                                <li><a href="#">Althena Calderone</a></li>
                                <li><a href="#">Gaby Dalkin</a></li>
                                <li><a href="#">Laura Kim</a></li>
                                <li><a href="#">leanne Ford</a></li>
                                <li><a href="#">Becki Owens</a></li>
                                <li><a href="#">Holly Blakey</a></li>
                                <li><a href="#">Emily Henderson</a></li>
                            </ul>
                        </div>
                        <div class="new-img">
                            <figure>
                                <img src="../Utilities/img/NewArrivals.webp" alt="">
                                <figcaption>1600+ New Fall Arrivals</figcaption>
                            </figure>
                        </div>
                    </div>
                </li>

                <li class="wedding-registry">
                    <a href="#">WEDDING REGISTRY</a>

                    <div class="wedding-registry-popup">

                        <div class="wedding">
                            <h3>The Wedding Registry</h3>
                            <ul>
                                <li><a href="#">Get Started</a></li>
                                <li><a href="#">Create a Registry</a></li>
                                <li><a href="#">Find a Registry</a></li>
                                <li><a href="#">Manage My Registry</a></li>
                            </ul>
                        </div>
                        <div class="tips">
                            <h3>Tips & Advice</h3>
                            <ul>
                                <li><a href="#">Most-Loved Gifts</a></li>
                                <li><a href="#">FREE Gifts & Perks</a></li>
                                <li><a href="#">Real Registries</a></li>
                                <li><a href="#">Interactive Registry Checklist</a></li>
                                <li><a href="#">One-Click Registry</a></li>
                                <li><a href="#">Find Your Tabletop Style</a></li>
                                <li><a href="#">Most Forgotten Registry Items</a></li>
                                <li><a href="#">Private Registry Events</a></li>
                                <li><a href="#">FREE Design Services</a></li>
                                <li><a href="#">Wedding Registry Guides</a></li>
                                <li><a href="#">Refer a Friend, Get $100</a></li>
                            </ul>
                        </div>
                        <div class="wedding-top-categories">
                            <h3>Top Categories</h3>
                            <ul>
                                <li><a href="#">Kitchen Appliances & Electrics</a></li>
                                <li><a href="#">Cookware</a></li>
                                <li><a href="#">Dinnerware</a></li>
                                <li><a href="#">Kitchen Tools & Accessories</a></li>
                                <li><a href="#">Flatware</a></li>
                                <li><a href="#">Cultery</a></li>
                                <li><a href="#">Bakeware</a></li>
                                <li><a href="#">Serveware</a></li>
                                <li><a href="#">Drinkware & Bar Tools</a></li>
                                <li><a href="#">Bedding</a></li>
                                <li><a href="#">Bath</a></li>
                                <li><a href="#">Table Lines</a></li>
                                <li><a href="#">Decor</a></li>
                                <li><a href="#">Shop All</a></li>
                            </ul>
                        </div>
                        <div class="wedding-top-brand">
                            <h3>Top Brands</h3>
                            <ul>
                                <li><a href="#">CN2</a></li>
                                <li><a href="#">Le Creuset</a></li>
                                <li><a href="#">Kitchenaid</a></li>
                                <li><a href="#">Breville</a></li>
                                <li><a href="#">All-Clad</a></li>
                                <li><a href="#">Wusthof</a></li>
                                <li><a href="#">Kitchen by Cozy</a></li>
                                <li><a href="#">Dyaon</a></li>
                                <li><a href="#">Caraway</a></li>
                                <li><a href="#">Zwilling</a></li>
                            </ul>
                        </div>
                        <div class="wedding-img">
                            <figure>
                                <img src="../Utilities/img/Registry.jpeg" alt="Registry Img">
                                <figcaption>New! Interactive Registry Checklist</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li>
                    <a href="#">FREE DESIGN SERVICES</a>
                </li>
                <li>
                    <a href="#">TRADE PROGRAM</a>
                </li>
                <li>
                    <a href="#">SHOP BY ROOM</a>
                </li>
                <li>
                    <a href="#">IN-STOCK</a>
                </li>
                <li>
                    <a href="#">BEST SELLERS</a>
                </li>
                <li>
                    <a href="#">THE DOM SHOP</a>
                </li>
                <li>
                    <a href="#">HALLOWEEN</a>
                </li>
            </ul>
        </div>

        <nav class="navbar">
            <ul>
                <li class="furniture">
                    <a href="#">Furniture</a>

                    <div class="furniture-popup">

                        <div class="new-furniture">
                            <h3>New Furniture</h3>
                            <h3>In-Stock Furniture</h3>
                            <h3>Living Room Furniture</h3>
                            <ul>
                                <li><a href="#">Sofa & Sectional Collections</a></li>
                                <li><a href="#">Sofas</a></li>
                                <li><a href="#">Sectional Sofas</a></li>
                                <li><a href="#">Accent Chairs</a></li>
                                <li><a href="#">Sleeper Sofas</a></li>
                                <li><a href="#">Coffee Tables</a></li>
                                <li><a href="#">Console Tables</a></li>
                                <li><a href="#">End & Side Tables</a></li>
                                <li><a href="#">TV Stands & Media Consoles</a></li>
                                <li><a href="#">Chaise Lounges & Daybeds</a></li>
                                <li><a href="#">Ottomans & Benches</a></li>
                                <li><a href="#">Leather Furniture</a></li>
                                <li><a href="#">Game Tables</a></li>
                            </ul>
                        </div>
                        <div class="diningroom-furniture">
                            <h3>Dining Room & Kitchen <br>Furniture</h3>
                            <ul>
                                <li><a href="#">Dining Tables</a></li>
                                <li><a href="#">Dining Chairs</a></li>
                                <li><a href="#">Bar & Counter Stools</a></li>
                                <li><a href="#">Dining Benches & Banquettes</a></li>
                                <li><a href="#">Credenzas & Sideboards</a></li>
                                <li><a href="#">Kitchen Islands</a></li>
                                <li><a href="#">Bar Carts & Bar Cabinets</a></li>
                            </ul>
                            <h3>Storage & Modular <br>Furniture</h3>
                            <ul>
                                <li><a href="#">TV Stands & Media Consoles</a></li>
                                <li><a href="#">Bookcases & Shelves</a></li>
                                <li><a href="#">Storage Cabinets</a></li>
                                <li><a href="#">Floating Shelves</a></li>
                                <li><a href="#">Entertainment Centers</a></li>
                            </ul>
                        </div>

                        <div class="bedroom-furniture">
                            <h3>Bedroom Furniture</h3>
                            <ul>
                                <li><a href="#">Beds & Headboards</a></li>
                                <li><a href="#">Dressers & Chests</a></li>
                                <li><a href="#">Nightstands</a></li>
                                <li><a href="#">Bedroom Benches</a></li>
                                <li><a href="#">Mattresses & Box Springs</a></li>
                                <li><a href="#">Cribe & Bassinets</a></li>
                                <li><a href="#">Kids Beds</a></li>
                            </ul>
                            <h3>Bathroom Furniture</h3>
                            <ul>
                                <li><a href="#">Bathroom Vanities</a></li>
                                <li><a href="#">Bathroom Storge</a></li>
                                <li><a href="#">Bathroom Hardware</a></li>
                                <li><a href="#">Bath Faucets</a></li>
                            </ul>
                            <h3>Home Office Furniture</h3>
                            <ul>
                                <li><a href="#">Desks</a></li>
                                <li><a href="#">Office Chairs</a></li>
                                <li><a href="#">Filling Cabinets & Credenzas</a></li>
                                <li><a href="#">Bookcases & Shelves</a></li>
                                <li><a href="#">Office Accessories</a></li>
                                <li><a href="#">Small Space Home Office</a></li>
                                <li><a href="#">Kids Desks & Desk Chairs</a></li>
                            </ul>
                        </div>
                        <div class="entryway-furniture">
                            <h3>Entryway Furniture</h3>
                            <ul>
                                <li><a href="#">Entryway Tables</a></li>
                                <li><a href="#">Chests & Cabinets</a></li>
                                <li><a href="#">Entryway Benches & <br>Mudroom Storage</a></li>
                                <li><a href="#">Entryway Decor</a></li>
                            </ul>
                            <h3>Buying Guides & Styling <br>Ideas</h3>
                            <ul>
                                <li><a href="#">Bestswllers: Furniture</a></li>
                                <li><a href="#">Get Free Swatches</a></li>
                                <li><a href="#">Design Your Perfect Sectional</a></li>
                                <li><a href="#">How to Choose a Sofa</a></li>
                                <li><a href="#">How to Choose a Coffee <br>Table</a></li>
                                <li><a href="#">How toCare for Leather <br>Furniture</a></li>
                                <li><a href="#">How to Style a Sectional</a></li>
                            </ul>
                            <h3>TVs and Tech Accessories</h3>
                            <h3>Up to 50% Off Select <br>Furniture</h3>
                        </div>

                        <div class="img-furniture">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Furniture.jpeg" alt="Furniture Img"></a>
                                <figcaption>Bestselling Sofas as Fast as 7 Days</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="outdoor">
                    <a href="#">Outdoor</a>

                    <div class="outdoor-popup">

                        <div class="outdoor-furniture">
                            <h3>Outdoor Furniture <br>Collections</h3>
                            <h3>Up to 60% Off Outdoor</h3>
                            <h3>Outdoor Lounge Furniture</h3>
                            <ul>
                                <li><a href="#">Outdoor Sofas</a></li>
                                <li><a href="#">Outdoor Sectionals</a></li>
                                <li><a href="#">Outdoor Lounge & Swivel Chairs</a></li>
                                <li><a href="#">Outdoor Adirondack Chairs</a></li>
                                <li><a href="#">Outdoor Chaise Lounges</a></li>
                                <li><a href="#">Outdoor Coffee Tables</a></li>
                                <li><a href="#">Outdoor Side Tables</a></li>
                                <li><a href="#">Outdoor Ottomans</a></li>
                                <li><a href="#">Outdoor Patio Umbrellas</a></li>
                                <li><a href="#">Patio Furniture Covers</a></li>
                                <li><a href="#">Fire Pits & Tables</a></li>
                            </ul>
                        </div>
                        <div class="outdoor-dining-furniture">
                            <h3>Outdoor Dining & Kitchen <br>Furniture</h3>
                            <ul>
                                <li><a href="#">Outdoor Dining Tables</a></li>
                                <li><a href="#">Outdoor Dining Chairs</a></li>
                                <li><a href="#">Outdoor Dining Benches</a></li>
                                <li><a href="#">Outdoor Counter Stools</a></li>
                                <li><a href="#">Outdoor Kitchen Furniture</a></li>
                                <li><a href="#">Patio Umbrellas</a></li>
                                <li><a href="#">Outdoor Furniture Sets</a></li>
                                <li><a href="#">Patio Furniture Covers</a></li>
                            </ul>
                            <h3>Patio Umbrellas</h3>
                        </div>
                        <div class="outdoor-entertaining">
                            <h3>Outdoor Kitchen & <br>Entertaining</h3>
                            <ul>
                                <li><a href="#">Shop All</a></li>
                                <li><a href="#">Melamine Dinnerware & <br>Entertaining</a></li>
                                <li><a href="#">Barbecue & Grilling</a></li>
                                <li><a href="#">Pizza Tools & Ovens</a></li>
                                <li><a href="#">Beverage Tubs</a></li>
                                <li><a href="#">Picnic Accessories & Coolers</a></li>
                            </ul>
                            <h3>Quick Ship & In-Stock <br>Outdoor Furniture</h3>
                        </div>
                        <div class="outdoor-decor">
                            <h3>Outdoor Decor</h3>
                            <ul>
                                <li><a href="#">All Outdoor Decor</a></li>
                                <li><a href="#">Outdoor Planters</a></li>
                                <li><a href="#">Lanterns & Lighting</a></li>
                                <li><a href="#">Fire Pits & Tables</a></li>
                                <li><a href="#">Pillows</a></li>
                                <li><a href="#">Rugs</a></li>
                                <li><a href="#">Citronella Candles</a></li>
                                <li><a href="#">Outdoor Games</a></li>
                                <li><a href="#">Address Numbers & <br>Mailboxes</a></li>
                            </ul>
                            <h3>Buying Guides & Styling Ideas</h3>
                            <ul>
                                <li><a href="#">Outdoor Patio Decorating <br>Ideas</a></li>
                                <li><a href="#">The Definitive Backyard Fire<br>Pit Guide</a></li>
                                <li><a href="#">Outdoor Furniture Care Guide</a></li>
                            </ul>
                        </div>
                        <div class="outdoor-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Outdoor.jpeg" alt="Outdoor Img"></a>
                                <figcaption>New! Introducing Ipanema</figcaption>
                            </figure>
                            <ul>
                                <li><a href="#">Outdoor Redesign by The Design Desk</a></li>
                                <li><a href="#">Outdoor Furniture Care Guide</a></li>
                                <li><a href="#">FSC-Certified Furniture</a></li>
                                <li><a href="#">Sunbrella Outdoor Furniture</a></li>
                            </ul>
                        </div>

                    </div>
                </li>

                <li class="tabletop">
                    <a href="#">Tabletop & Bar</a>

                    <div class="tabletop-popup">

                        <div class="tabletop-offer">
                            <h3>Upto 60% Off Entertaining</h3>
                            <h3>Dinnerware</h3>
                            <ul>
                                <li><a href="#">Dinnerware Collections</a></li>
                                <li><a href="#">Dinner Plates</a></li>
                                <li><a href="#">Pasta & Cereals Bowls</a></li>
                                <li><a href="#">Salad Plates</a></li>
                                <li><a href="#">Dinnerware Sets & Bundles</a></li>
                                <li><a href="#">Melamine Dinnerware</a></li>
                                <li><a href="#">Appetizer & Dessert Plates</a></li>
                                <li><a href="#">Charger Plates & Served <br>Plates</a></li>
                            </ul>
                            <h3>Outdoor Entertaining</h3>
                        </div>
                        <div class="tabletop-drinkware">
                            <h3>Drinkware</h3>
                            <ul>
                                <li><a href="#">Drinking Glasses</a></li>
                                <li><a href="#">Wine Glasses</a></li>
                                <li><a href="#">Cocktail Glasses</a></li>
                                <li><a href="#">Coffee Mugs & Tea Cups</a></li>
                                <li><a href="#">Champagne Flutes</a></li>
                                <li><a href="#">Acrylic Glasses</a></li>
                                <li><a href="#">Water Bottles</a></li>
                                <li><a href="#">Drinkware Collections</a></li>
                            </ul>
                            <h3>Serveware</h3>
                            <ul>
                                <li><a href="#">Serving Bowls & Baskets</a></li>
                                <li><a href="#">Serving Platters & Trays</a></li>
                                <li><a href="#">Cheese Boards & Knives</a></li>
                                <li><a href="#">Appetizer Serveware</a></li>
                                <li><a href="#">Cake Plates & Stands</a></li>
                                <li><a href="#">Serving Utensils</a></li>
                                <li><a href="#">Serveware Collections</a></li>
                            </ul>
                        </div>
                        <div class="tabletop-bartools">
                            <h3>Bar Tools & Accessories</h3>
                            <ul>
                                <li><a href="#">Wine Tools & Storage</a></li>
                                <li><a href="#">Bar Accessories</a></li>
                                <li><a href="#">Coasters</a></li>
                                <li><a href="#">Decanters, Carafes & Pitchers</a></li>
                                <li><a href="#">Drink Dispensers & Beverage Tubs</a></li>
                                <li><a href="#">Wine & Beer Fridges</a></li>
                                <li><a href="#">Bar Cabinets & Bar Carts</a></li>
                            </ul>
                            <h3>Table Linens</h3>
                            <ul>
                                <li><a href="#">Napkins</a></li>
                                <li><a href="#">Placemats</a></li>
                                <li><a href="#">Table Runners</a></li>
                                <li><a href="#">Tablecloths</a></li>
                                <li><a href="#">Napkin Rings & Place Card <br>Holders</a></li>
                            </ul>
                        </div>
                        <div class="tabletop-flatware">
                            <h3>Flatware</h3>
                            <ul>
                                <li><a href="">Flatware Sets</a></li>
                                <li><a href="">Open Stock Flatware</a></li>
                            </ul>
                            <h3>Buying Guides & Tips</h3>
                            <ul>
                                <li><a href="#">Types of Wine Glasses Guide</a></li>
                                <li><a href="#">Types of Cocktail Glasses <br>Guide</a></li>
                                <li><a href="#">12 Must-Have Essentials for <br>Hosting</a></li>
                            </ul>
                            <h3>Clearance Tabletop & Bar</h3>
                            <h3>New Tabletop & Bar</h3>
                            <h3>Wedding Registry</h3>
                            <h3>Entertaining Best Sellers</h3>
                        </div>
                        <div class="tabletop-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Tabletop.jpeg" alt="Tabletop Img"></a>
                                <figcaption>Bestselling & Top-Rated Dinnerware</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="kitchen">
                    <a href="#">Kitchen</a>

                    <div class="kitchen-popup">

                        <div class="kitchen-offer">
                            <h3>Up to 40% Off Top Kitchen <br>Brands</h3>
                            <h3>New Kitchen</h3>
                            <h3>Kitchen Appliances & Electrics</h3>
                            <ul>
                                <li><a href="#">Coffee, Espresso & Tea</a></li>
                                <li><a href="#">Mixers & Attachments</a></li>
                                <li><a href="#">Toasters</a></li>
                                <li><a href="#">Air Fryers & Toaster Ovens</a></li>
                                <li><a href="#">Blenders & Juicers</a></li>
                                <li><a href="#">Food Processors</a></li>
                                <li><a href="#">Specialty Appliances</a></li>
                                <li><a href="#">Pizza Ovens & Tools</a></li>
                                <li><a href="#">BBQ & Grilling</a></li>
                                <li><a href="#">Indoor Grills & Skillets</a></li>
                                <li><a href="#">Waffle Makers</a></li>
                                <li><a href="#">Slow Cookers & Pressure <br>Cookers</a></li>
                                <li><a href="#">Refrigerators, Wine & Beer <br>Fridges</a></li>
                            </ul>
                        </div>
                        <div class="kitchen-coffee">
                            <h3>Coffee, Espresso, & Tea</h3>
                            <ul>
                                <li><a href="#">Espresso Machines</a></li>
                                <li><a href="#">Coffee Makers</a></li>
                                <li><a href="#">Tea & Tea Kettles</a></li>
                                <li><a href="#">Coffee Grinders</a></li>
                                <li><a href="#">Teapots & Tea Accessories</a></li>
                                <li><a href="#">Coffee Mugs & Teacups</a></li>
                                <li><a href="#">Iced Coffee</a></li>
                                <li><a href="#">Coffee Beans</a></li>
                            </ul>
                            <h3>Cookware</h3>
                            <ul>
                                <li><a href="#">Cookware Sets</a></li>
                                <li><a href="#">Frying Pans & Skillets</a></li>
                                <li><a href="#">Dutch Ovens & Braisers</a></li>
                                <li><a href="#">Stock & Soup Pots</a></li>
                                <li><a href="#">Saucepans & Sauciers</a></li>
                                <li><a href="#">Saute Pans</a></li>
                                <li><a href="#">Specialty Cookware</a></li>
                                <li><a href="#">Roasting Pans</a></li>
                                <li><a href="#">Griddles & Grill Pans</a></li>
                                <li><a href="#">Cookware by Material</a></li>
                            </ul>
                        </div>
                        <div class="kitchen-tools">
                            <h3>Kitchen Tools & <br>Accessories</h3>
                            <ul>
                                <li><a href="#">Utensils & Gadgets</a></li>
                                <li><a href="#">Cutting Boards</a></li>
                                <li><a href="#">Storage & Organization</a></li>
                                <li><a href="#">Mixing Bowls</a></li>
                                <li><a href="#">Salt & Pepper</a></li>
                                <li><a href="#">Cleaning Supplies</a></li>
                                <li><a href="#">Trash Cans</a></li>
                                <li><a href="#">Kitchen Standing Mats</a></li>
                                <li><a href="#">Cookbooks</a></li>
                            </ul>
                            <h3>Cutlery</h3>
                            <ul>
                                <li><a href="#">Knife Sets</a></li>
                                <li><a href="#">Steak Knives</a></li>
                                <li><a href="#">Individual Knives</a></li>
                                <li><a href="#">Knife Storage & Sharpeners</a></li>
                            </ul>
                            <h3>Kitchen Linens</h3>
                            <ul>
                                <li><a href="#">Kitchen Dish</a></li>
                                <li><a href="#">Oven Mitts & Pot Holders</a></li>
                                <li><a href="#">Kitchen Aprons</a></li>
                            </ul>
                        </div>
                        <div class="kitchen-bakeware">
                            <h3>Bakeware</h3>
                            <ul>
                                <li><a href="#">Bakeware Sets</a></li>
                                <li><a href="#">Baking Sheets</a></li>
                                <li><a href="#">Baking Dishes</a></li>
                                <li><a href="#">Baking Tools</a></li>
                                <li><a href="#">Pie, Bread & Cake Pans</a></li>
                            </ul>
                            <h3>Gourmet Food & Candy</h3>
                            <h3>Shop Top Brands</h3>
                            <ul>
                                <li><a href="#">Le Creuset</a></li>
                                <li><a href="#">KitchenAid</a></li>
                                <li><a href="#">Breville</a></li>
                                <li><a href="#">CozyNest</a></li>
                                <li><a href="#">Shop All</a></li>
                            </ul>
                            <h3>Trending for Fall</h3>
                            <ul>
                                <li><a href="#">The Clean Kitchen</a></li>
                                <li><a href="#">Fall Baking</a></li>
                            </ul>
                            <h3>Kitchen Exclusives</h3>
                            <h3>Clearance Kitchen</h3>
                        </div>
                        <div class="kitchen-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/kitchen.webp" alt="Kitchen Img"></a>
                                <figcaption>New! Made in Cookware</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="bedding">
                    <a href="#">Bedding</a>

                    <div class="bedding-popup">

                        <div class="bedding-all">
                            <h3>All Bedding</h3>
                            <h3>New Bedding</h3>
                            <h3>Up to 60% off Bedding & <br>Bath</h3>
                            <h3>Bedding</h3>
                            <ul>
                                <li><a href="#">Duvet Covers</a></li>
                                <li><a href="#">Quilts & Coverlets</a></li>
                                <li><a href="#">Comforters</a></li>
                                <li><a href="#">Sheet Sets</a></li>
                                <li><a href="#">Pillow Shams & Pillowcases</a></li>
                                <li><a href="#">Bed Blankets</a></li>
                                <li><a href="#">Throw Pillows</a></li>
                                <li><a href="#">Bedding Sets</a></li>
                            </ul>
                        </div>
                        <div class="bedding-new">
                            <h3>New! Bedding Essentials</h3>
                            <ul>
                                <li><a href="#">Duvet Inserts</a></li>
                                <li><a href="#">Bed Pillow Inserts</a></li>
                                <li><a href="#">Mattress Pads & Toppers</a></li>
                            </ul>
                            <h3>Shop by Fabric</h3>
                            <ul>
                                <li><a href="#">Organic Cotton : Relalxed & <br>Supersoft</a></li>
                                <li><a href="#">Linen : Airy & Breathable</a></li>
                                <li><a href="#">Hemp : Soft & Lightweight</a></li>
                                <li><a href="#">Jersey : Cozy & Casuals</a></li>
                                <li><a href="#">Percale : Cool & Crisp</a></li>
                                <li><a href="#">Sateen : Silk & Luxurious</a></li>
                            </ul>
                            <h3>Shop Bedding by Color</h3>
                            <h3>Shop Bedding by Collection</h3>
                        </div>
                        <div class="bedding-dorm">
                            <h3>New! Dorm Bedding</h3>
                            <h3>Cleaning & Laundry</h3>
                            <ul>
                                <li><a href="#">Laundry & Hampers</a></li>
                                <li><a href="#">Fans & Air Purifiers</a></li>
                                <li><a href="#">Vaccums</a></li>
                            </ul>
                            <h3>Bedding Guides & Trending <br>Ideas</h3>
                            <ul>
                                <li><a href="#">How to Layer a Bed</a></li>
                                <li><a href="#">How to Put on a Duvet Cover</a></li>
                                <li><a href="#">The Ultimate White Bedding</a></li>
                                <li><a href="#">Bedding Bestsellers</a></li>
                            </ul>
                            <h3>Clearance Bedding</h3>
                            <h3>Baby & Kids Bedding and <br>Bath</h3>
                            <h3>Wedding Registry</h3>
                        </div>
                        <div class="bedding-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Bedding.webp" alt="Bedding Img"></a>
                                <figcaption>New! Fall-Inspired Hues</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="bath">
                    <a href="#">Bath</a>

                    <div class="bath-popup">

                        <div class="bath-all">
                            <h3>All Bath</h3>
                            <h3>New Bath</h3>
                            <h3>Best Sellers</h3>
                            <h3>Up to 60% off Bedding & Bath</h3>
                            <h3>Bath Linens & Towels</h3>
                            <ul>
                                <li><a href="#">Bath Towels</a></li>
                                <li><a href="#">Bath Rugs & Mats</a></li>
                                <li><a href="#">Bath Towel Bundles</a></li>
                                <li><a href="#">Shower Curtains & Rings</a></li>
                                <li><a href="#">Bathrobes & Slippers</a></li>
                            </ul>
                        </div>
                        <div class="bath-accessories">
                            <h3>Bath Accessorieses & Storage</h3>
                            <ul>
                                <li><a href="#">Bath Accessorieses</a></li>
                                <li><a href="#">Bath Storage</a></li>
                                <li><a href="#">Laundry Hampers & <br>Accessorieses</a></li>
                                <li><a href="#">Wastebaskets</a></li>
                                <li><a href="#">Bathroom Cleaning</a></li>
                            </ul>
                            <h3>Bath Hardware</h3>
                            <ul>
                                <li><a href="#">Bath Faucets</a></li>
                                <li><a href="#">Towel Bars & Hooks</a></li>
                                <li><a href="#">Towel Rings</a></li>
                                <li><a href="#">Toilet Paper Holders</a></li>
                                <li><a href="#">Cabinet Pulls</a></li>
                                <li><a href="#">Cabinet Knobs</a></li>
                                <li><a href="#">View All</a></li>
                            </ul>
                        </div>
                        <div class="bath-furniture">
                            <h3>Bath Furniture</h3>
                            <ul>
                                <li><a href="#">Bath Lighting</a></li>
                                <li><a href="#">Bath Mirrors</a></li>
                                <li><a href="#">Bath Vanities</a></li>
                            </ul>
                            <h3>Bath Scents</h3>
                            <ul>
                                <li><a href="#">Scented Candles & Diffusers</a></li>
                                <li><a href="#">Soaps & Lotions</a></li>
                            </ul>
                            <h3>Shop by Brand</h3>
                            <ul>
                                <li><a href="#">Blomus</a></li>
                                <li><a href="#">Brabantia</a></li>
                                <li><a href="#">Kohler</a></li>
                                <li><a href="#">SimpleHuman</a></li>
                                <li><a href="#">Steele</a></li>
                            </ul>
                        </div>
                        <div class="bath-buying">
                            <h3>Buying Guides & Styling Ideas</h3>
                            <ul>
                                <li><a href="#">Emily Henderson's Favorite <br>Bathroom Styles</a></li>
                                <li><a href="#">Modern Bathroom Decor <br>Ideas & Tips</a></li>
                            </ul>
                            <h3>Bath Clearance Sale</h3>
                        </div>
                        <div class="bath-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Bath_Flyout.jpeg" alt="Bath Img"></a>
                                <figcaption>Turkish Cotton, Now in Stripes</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="decor">
                    <a href="#">Decor & Pillows</a>

                    <div class="decor-popup">

                        <div class="decor-all">
                            <h3>All Decor & Pillows</h3>
                            <h3>New Decor</h3>
                            <h3>New Pillows & Throws</h3>
                            <h3>Best Sellers</h3>
                            <h3>Up to 60% off Decor & More</h3>
                            <h3>Seasonal Decor</h3>
                            <ul>
                                <li><a href="#">Halloween</a></li>
                                <li><a href="#">The Fall Color Edit</a></li>
                                <li><a href="#">Cozy Pillows & Throws</a></li>
                            </ul>
                            <h3>Pillows & Throws</h3>
                            <ul>
                                <li><a href="#">Throw Pillows</a></li>
                                <li><a href="#">Throw Blankets</a></li>
                                <li><a href="#">Throw Pillow Arrangements</a></li>
                                <li><a href="#">Outdoor Pillows</a></li>
                                <li><a href="#">Pillow Inserts</a></li>
                            </ul>
                        </div>
                        <div class="decor-wall">
                            <h3>Wall Art & Frames</h3>
                            <ul>
                                <li><a href="#">Shop All</a></li>
                                <li><a href="#">Art Prints</a></li>
                                <li><a href="#">Wall Decor</a></li>
                                <li><a href="#">Picture Frames</a></li>
                                <li><a href="#">Featured Artists Gallery</a></li>
                                <li><a href="#">Photography Prints</a></li>
                            </ul>
                            <h3>Mirrors</h3>
                            <ul>
                                <li><a href="#">View All</a></li>
                                <li><a href="#">Floor Mirrors</a></li>
                                <li><a href="#">Wall Mirrors</a></li>
                            </ul>
                            <h3>Botanicals & Vases</h3>
                            <ul>
                                <li><a href="#">Floral & Botanical <br>Arrangements</a></li>
                                <li><a href="#">Vases</a></li>
                                <li><a href="#">stems & Branches</a></li>
                                <li><a href="#">Abigail Ahern Faux Florals</a></li>
                                <li><a href="#">Faux Potted Plants & Trees</a></li>
                                <li><a href="#">Indoor & Outdoor Planters</a></li>
                                <li><a href="#">Wreaths</a></li>
                                <li><a href="#">Live Plants & Wreaths</a></li>
                            </ul>
                        </div>
                        <div class="decor-candle">
                            <h3>Candles & Home <br>Fragrances</h3>
                            <ul>
                                <li><a href="#">Candle Holders</a></li>
                                <li><a href="#">Scented Candles & Diffusers</a></li>
                                <li><a href="#">Lanterns</a></li>
                                <li><a href="#">Taper & Pillar Candles</a></li>
                            </ul>
                            <h3>Decorative Objects</h3>
                            <ul>
                                <li><a href="#">Decorative Sculptures & <br>Figurines</a></li>
                                <li><a href="#">Centerpiece Bowls & Trays</a></li>
                                <li><a href="#">Picture Frames</a></li>
                                <li><a href="#">Vases</a></li>
                                <li><a href="#">Coffee Table Books</a></li>
                            </ul>
                            <h3>Organization</h3>
                            <ul>
                                <li><a href="#">Baskets & Storage Bins</a></li>
                                <li><a href="#">Floating Shelves</a></li>
                                <li><a href="#">Coat Racks & Wall Hooks</a></li>
                                <li><a href="#">Jewelry Boxes</a></li>
                                <li><a href="#">Office Decor & Organization</a></li>
                                <li><a href="#">Entryway Decor</a></li>
                            </ul>
                        </div>
                        <div class="decor-accessories">
                            <h3>Home Accessories</h3>
                            <ul>
                                <li><a href="#">Fireplaces & Accessories</a></li>
                                <li><a href="#">TVs and Tech Accessories</a></li>
                                <li><a href="#">Luggage & Travel Bags</a></li>
                                <li><a href="#">Pet Accessories</a></li>
                                <li><a href="#">Games</a></li>
                            </ul>
                            <h3>Hardware</h3>
                            <ul>
                                <li><a href="#">View All</a></li>
                                <li><a href="#">Cabinet Pulls</a></li>
                                <li><a href="#">Cabinet Knobs</a></li>
                                <li><a href="#">Window Curtain Hardware</a></li>
                                <li><a href="#">Address Numbers & <br>Mailboxes</a></li>
                            </ul>
                            <h3>Buying Guides & Styling Ideas</h3>
                            <ul>
                                <li><a href="#">How to Style Throw Pillow</a></li>
                                <li><a href="#">How to Style a Sectional</a></li>
                                <li><a href="#">How to Create a Gallery Wall</a></li>
                                <li><a href="#">How to Arrange Florals Like a Pro</a></li>
                                <li><a href="#">Modern Framhouse Decor <br>Ideas</a></li>
                            </ul>
                        </div>
                        <div class="decor-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Halloween_decorflyout.jpeg" alt="Decor Img"></a>
                                <figcaption>New Halloween Arrivals</figcaption>
                            </figure>
                        </div>

                    </div>

                </li>

                <li class="rugs">
                    <a href="#">Rugs</a>

                    <div class="rugs-popup">

                        <div class="rugs-all">
                            <h3>All Rugs</h3>
                            <h3>New Rugs</h3>
                            <h3>Best Sellers</h3>
                            <h3>Up to 70% off Rugs</h3>
                            <h3>Performance Rugs</h3>
                            <h3>Rugs by Type</h3>
                            <ul>
                                <li><a href="#">Area Rugs</a></li>
                                <li><a href="#">Indoor-Outdoor Rugs</a></li>
                                <li><a href="#">Runner Rugs</a></li>
                                <li><a href="#">Door Mats</a></li>
                                <li><a href="#">Baby & Kids Rugs</a></li>
                                <li><a href="#">Rug Pads</a></li>
                            </ul>
                        </div>
                        <div class="rugs-size">
                            <h3>Rugs by Size</h3>
                            <ul>
                                <li><a href="#">6x9 Rugs</a></li>
                                <li><a href="#">8x10 Rugs</a></li>
                                <li><a href="#">9x12 Rugs</a></li>
                                <li><a href="#">10x14 Rugs</a></li>
                                <li><a href="#">12x15 Rugs</a></li>
                                <li><a href="#">Runners</a></li>
                                <li><a href="#">Oversized Rugs</a></li>
                            </ul>
                            <h3>Rugs by Room</h3>
                            <ul>
                                <li><a href="#">Living Room Rugs</a></li>
                                <li><a href="#">Kitchen Rugs</a></li>
                                <li><a href="#">Bedroom Rugs</a></li>
                                <li><a href="#">Home Office Rugs</a></li>
                                <li><a href="#">Dining Room Rugs</a></li>
                                <li><a href="#">Outdoor Rugs</a></li>
                            </ul>
                        </div>
                        <div class="rugs-color">
                            <h3>Rugs by Color</h3>
                            <ul>
                                <li><a href="#">Neutral Rugs</a></li>
                                <li><a href="#">Cream & lovry Rugs</a></li>
                                <li><a href="#">Beige Rugs</a></li>
                                <li><a href="#">Light Blue Rugs</a></li>
                                <li><a href="#">Dark Blue Rugs</a></li>
                                <li><a href="#">Grey Rugs</a></li>
                                <li><a href="#">Black Rugs</a></li>
                                <li><a href="#">Brown Rugs</a></li>
                                <li><a href="#">Green Rugs</a></li>
                                <li><a href="#">Undyed Natural Rugs</a></li>
                            </ul>
                            <h3>Rugs by Material</h3>
                            <ul>
                                <li><a href="#">Premium Wool Rugs</a></li>
                                <li><a href="#">Performance Rugs</a></li>
                                <li><a href="#">Viscose Rugs</a></li>
                                <li><a href="#">Jute & Sisal Rugs</a></li>
                                <li><a href="#">Washable Rugs</a></li>
                            </ul>
                        </div>
                        <div class="rugs-style">
                            <h3>Rugs by Style</h3>
                            <ul>
                                <li><a href="#">Solid Rugs</a></li>
                                <li><a href="#">Patterned Rugs</a></li>
                                <li><a href="#">Traditional Rugs</a></li>
                                <li><a href="#">Morcocan Rugs</a></li>
                                <li><a href="#">Contemporary Rugs</a></li>
                                <li><a href="#">Textured Rugs</a></li>
                            </ul>
                            <h3>Quick Ship & In-Stock Rugs</h3>
                            <h3>Rug Collections</h3>
                            <h3>Vaccums</h3>
                            <h3>Clearance Rugs</h3>
                        </div>
                        <div class="rugs-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Rugs.webp" alt="Rugs Img"></a>
                                <figcaption>300+ New Quality Rugs</figcaption>
                            </figure>
                        </div>

                    </div>

                </li>

                <li class="lighting">
                    <a href="#">Lighting</a>

                    <div class="lighting-popup">

                        <div class="lighting-all">
                            <h3>All Lighting</h3>
                            <h3>New Lighting</h3>
                            <h3>Best Sellers</h3>
                            <h3>Ceiling Lighting</h3>
                            <ul>
                                <li><a href="#">Pendant Lightinh & <br>Chandeliers</a></li>
                                <li><a href="#">Flush Mount Lighting</a></li>
                                <li><a href="#">Ceiling Fans</a></li>
                            </ul>
                        </div>
                        <div class="lighting-table">
                            <h3>Table & Floor Lamps</h3>
                            <ul>
                                <li><a href="#">Table Lapms</a></li>
                                <li><a href="#">Desk Lamps</a></li>
                                <li><a href="#">Floor Lamps</a></li>
                            </ul>
                            <h3>Wall Sconces</h3>
                        </div>
                        <div class="lighting-room">
                            <h3>Lighting by Room</h3>
                            <ul>
                                <li><a href="#">Bedroom Lighting</a></li>
                                <li><a href="#">Dining Room Lighting</a></li>
                                <li><a href="#">Bathroom Lighting</a></li>
                                <li><a href="#">Living Room Lighting</a></li>
                                <li><a href="#">Kitchen Lighting</a></li>
                                <li><a href="#">Entryway Lighting Fixtures</a></li>
                                <li><a href="#">Outdoor Lighting</a></li>
                            </ul>
                            <h3>Baby & Kids Lighting</h3>
                            <h3>Sale Lighting</h3>
                        </div>
                        <div class="lighting-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Lighting.webp" alt="Lighting Img"></a>
                                <figcaption>New & Bestselling Pendants</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="window">
                    <a href="#">Window</a>

                    <div class="window-popup">

                        <div class="window-all">
                            <h3>All Window Curtains</h3>
                            <h3>Blackout Curtains</h3>
                            <h3>Sheer Curtains</h3>
                            <h3>Window Curtain Hardware</h3>
                            <h3>Window Curtains by Fabric</h3>
                            <ul>
                                <li><a href="#">Velvet Curtains</a></li>
                                <li><a href="#">Linen Curtains</a></li>
                                <li><a href="#"></a>Cotton Curtains</li>
                                <li><a href="#">Silk Curtains</a></li>
                            </ul>
                        </div>
                        <div class="window-collection">
                            <h3>Window Curtain Collections</h3>
                            <h3>Window Curtains by Color</h3>
                            <ul>
                                <li><a href="#">White Window Curtains</a></li>
                                <li><a href="#">Grey Window Curtains</a></li>
                                <li><a href="#">Beige Window Curtains</a></li>
                                <li><a href="#">Blue Window Curtains</a></li>
                            </ul>
                            <h3>Buying Guides and Styling <br>Ideas</h3>
                            <ul>
                                <li><a href="#">How to Hang Curtains</a></li>
                                <li><a href="#">How to Choose Curtains</a></li>
                            </ul>
                        </div>
                        <div class="window-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Window.webp" alt="Window Img"></a>
                                <figcaption>New High-Quality Curtains</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="gifts">
                    <a href="#">Gifts</a>

                    <div class="gifts-popup">

                        <div class="gifts-selling">
                            <h3>Bestselling Gifts</h3>
                            <h3>Kitchen Gifts</h3>
                            <h3>Gifts for the Home</h3>
                            <h3>Gifts By Price</h3>
                            <ul>
                                <li><a href="#">Gifts Under $25</a></li>
                                <li><a href="#">Gifts Under $50</a></li>
                                <li><a href="#">Gifts Under $100</a></li>
                                <li><a href="#">Gifts Under $250</a></li>
                            </ul>
                            <h3>Wine & Cocktail Gifts</h3>
                            <h3>Coffee & Tea Gifts</h3>
                            <h3>Personalized Gifts</h3>
                        </div>
                        <div class="gifts-host">
                            <h3>Gifts for the Host</h3>
                            <h3>Wedding Gifts</h3>
                            <h3>Baby & Kids Gifts</h3>
                            <h3>Gift Cards</h3>
                            <h3>Gifts By Recipient</h3>
                            <ul>
                                <li><a href="#">Family Gifts</a></li>
                                <li><a href="#">Gifts for Her</a></li>
                                <li><a href="#">Gifts for Him</a></li>
                                <li><a href="#">Gifts for the Entertainer</a></li>
                                <li><a href="#">Gifts for the Baker</a></li>
                                <li><a href="#">Host and Hostess Gift Ideas</a></li>
                            </ul>
                        </div>
                        <div class="gifts-occasion">
                            <h3>Gifts By Occasion</h3>
                            <ul>
                                <li><a href="#">Housewarming Gifts</a></li>
                                <li><a href="#">Engagement Gifts</a></li>
                                <li><a href="#">Annibersary Gifts</a></li>
                                <li><a href="#">Birthday Gifts</a></li>
                                <li><a href="#">Thank You Gifts</a></li>
                                <li><a href="#">Graduation Gifts</a></li>
                            </ul>
                            <h3>Corporate Gifts</h3>
                        </div>
                        <div class="gifts-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Gifts.webp" alt="Gifts Img"></a>
                                <figcaption>Most-Loved Registry Gifts</figcaption>
                            </figure>
                        </div>

                    </div>
                </li>

                <li class="sale">
                    <a href="#">SALE</a>

                    <div class="sale-popup">

                        <div class="sale-offer">
                            <h3>Steals of the Season: Up to 60% off</h3>
                            <ul>
                                <li><a href="#">Up to 50% off Furniture</a></li>
                                <li><a href="#">Up to 60% off Decorating</a></li>
                                <li><a href="#">Up to 70% off Rugs</a></li>
                                <li><a href="#">Up to 60% off Outdoor <br>Furniture</a></li>
                                <li><a href="#">Up to 40% off Kitchen <br>Brands</a></li>
                                <li><a href="#">Up to 60% off Entertaining</a></li>
                                <li><a href="#">Up to 60% off Clearance</a></li>
                            </ul>
                            <h3>Up to 50% off Select <br>Furniture</h3>
                            <ul>
                                <li><a href="#">Sofas, Sectionals & More</a></li>
                                <li><a href="#">Storage & Home Office</a></li>
                                <li><a href="#">Media Consoles</a></li>
                                <li><a href="#">Accent Tables</a></li>
                                <li><a href="#">Dining Room</a></li>
                                <li><a href="#">Bedroom</a></li>
                            </ul>
                        </div>
                        <div class="sale-outdoor">
                            <h3>Up to 60% off Outdoor <br>Furniture</h3>
                            <ul>
                                <li><a href="#">Outdoor Lounge Furniture</a></li>
                                <li><a href="#">Outdoor Dining Furniture</a></li>
                                <li><a href="#">Outdoor Umbrellas</a></li>
                            </ul>
                            <h3>Up to 40% off Top Kitchen Brands</h3>
                            <ul>
                                <li><a href="#">Bestsellers on Sale</a></li>
                                <li><a href="#">Up to 25% off Select <br>KitchenAid@Electrics</a></li>
                                <li><a href="#">Over 35% Off le Creuset <br>Cookware & Bakeware</a></li>
                                <li><a href="#">Up to $130 off Select Cafe<sup>TM</sup> <br>Kitchen Electrics</a></li>
                                <li><a href="#">Up to 25% off Select <br>Cuisinart Electrics</a></li>
                                <li><a href="#">25% off Select Cuisinart <br>Cookware & Cultery</a></li>
                                <li><a href="#">Up to 45% off Select Staub <br>Cast Iron Cookware</a></li>
                                <li><a href="#">20% Off Shun Sora, Kanso <br>and Kazahana Cultery</a></li>
                            </ul>
                        </div>
                        <div class="sale-entertaining">
                            <h3>Up to 60% off Entertaining</h3>
                            <ul>
                                <li><a href="#">Dinnerware</a></li>
                                <li><a href="#">Serveware</a></li>
                                <li><a href="#">Drinkware</a></li>
                                <li><a href="#">Table Linens</a></li>
                            </ul>
                            <h3>Up to 60% off Decorating</h3>
                            <ul>
                                <li><a href="#">Outdoor Decor</a></li>
                                <li><a href="#">Window Curtains</a></li>
                                <li><a href="#">Pillows & Throws</a></li>
                                <li><a href="#">Bedding & Bath</a></li>
                                <li><a href="#">Wall Decor</a></li>
                                <li><a href="#">Home Accents</a></li>
                            </ul>
                            <h3>Up to 70% off Select Rugs</h3>
                            <h3>Up to 50% off Select Dorm</h3>
                        </div>
                        <div class="sale-clearance">
                            <h3>Up to 60% Off Clearance</h3>
                            <ul>
                                <li><a href="#">Furniture</a></li>
                                <li><a href="#">Outdoor</a></li>
                                <li><a href="#">Rugs</a></li>
                                <li><a href="#">Kitchen</a></li>
                                <li><a href="#">Tabletop</a></li>
                                <li><a href="#">Decor & Pillows</a></li>
                                <li><a href="#">Lighting</a></li>
                                <li><a href="#">Bedding</a></li>
                                <li><a href="#">Bath</a></li>
                                <li><a href="#">Curtains</a></li>
                                <h3>Earn 10% Back in Reward Dollars<sub>*</sub></h3>
                            </ul>
                        </div>
                        <div class="sale-img">
                            <figure>
                                <a href="#"><img src="../Utilities/img/Sale.jpeg" alt="Sale Img"></a>
                                <figcaption>Up to 60% Off : <br>Outdoor Furniture</figcaption>
                            </figure>
                        </div>

                    </div>

                </li>

                <li class="cozy-kids">
                    <a href="#">Cozy&kids</a>
                </li>
            </ul>
        </nav>
    
    `;
};

export const footer = () => {
  return `

        <section class="footer-up">
            <div>
                <h1>Save 10% off full-price items*</h1>
                <p>Get alerts about new items, sales and more.</p>
            </div>
            <button type="button">CLAIM OFFER</button>
        </section>

        <section class="footer-bottom">
            <div class="bottom-part1">
                <div class="order">
                    <div>
                        <i class="fa-solid fa-cube"></i>
                        <p>Orders</p>
                    </div>
                    <p>Find out when your purchase will arrive or schedule a delivery.</p>
                    <div>
                        <a href="#">Track Order</a>
                        <a href="#">Schedule Delivery</a>
                    </div>
                </div>
                <div class="contact">
                    <div>
                        <i class="fa-solid fa-message"></i>
                        <p>Contact Us & Store Locator</p>
                    </div>
                    <p>Question? Text us: <a href="#">+91 XXXXXXXXXX</a></p>
                    <div>
                        <a href="#">Chat With Us</a>
                        <a href="#">leave Feedback</a>
                        <a href="#">Find a Store</a>
                    </div>
                </div>
                <div class="credit-card">
                    <div>
                        <i class="fa-solid fa-credit-card"></i>
                        <p>CozyNest Credit Card</p>
                    </div>
                    <p>Earn Reward Dollars every time you shop* (excluding special financing purchases), plus get access
                        to special offers and events.</p>
                    <div>
                        <a href="#">Apply Now</a>
                        <a href="#">Manage Your Account</a>
                    </div>
                </div>
                <div class="iOS-app">
                    <div>
                        <i class="fa-solid fa-mobile-screen"></i>
                        <p>Our iOS App</p>
                    </div>
                    <div>
                        <div>
                            <p>Scan to shop exclusive first looks, get personalized alerts and manage your registry
                                faster and easier than ever before.</p>
                            <a href="#"><img src="../Utilities/logo/apple-app-store.jpg" alt="Apple App Store logo"></a>
                        </div>
                        <img src="../Utilities/logo/appQRCode.webp" alt="App QR Code">
                    </div>
                </div>
            </div>

            <div class="bottom-part2">

                <div class="help">
                    <p>Help</p>
                    <ul>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Shipping Information</a></li>
                        <li><a href="#">Product Recalls</a></li>
                        <li><a href="#">Email & Text Preferences</a></li>
                        <li><a href="#">Sign Up for Texts</a></li>
                    </ul>
                </div>

                <div class="resources">
                    <p>Resources</p>
                    <ul>
                        <li><a href="#">Free Design Services</a></li>
                        <li><a href="#">Wedding Registry</a></li>
                        <li><a href="#">Baby Registry</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Trade Program</a></li>
                        <li><a href="#">Contract Grade Furniture</a></li>
                    </ul>
                </div>

                <div class="our-company">
                    <p>Our Company</p>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Responsible Design</a></li>
                        <li><a href="#">Accessibility Statement</a></li>
                    </ul>
                </div>

                <div class="show-us">
                    <p>Show us your look with:</p>
                    <a href="#">#CrateStyle</a>
                    <a href="#">#CrateKidsStyle</a>
                    <div>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/about?lang=en"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://in.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>

                    </div>
                    <p>Our Brands</p>
                    <div>
                        <ul>
                            <li><a href="#">CozyNest</a></li>
                            <li><a href="#">Cozy&kids</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">CN2</a></li>
                            <li><a href="#">HUDSON <span></span> GRACE</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="bottom-part3">
                <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Site Index</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                    <li><a href="#">CA Supply Chains Act</a></li>
                    <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
                    <li><a href="#">*Credit Card Terms</a></li>
                </ul>
                <p>©2025 All rights reserved. If you are using a screen reader and are having problems using this
                    website, please call +91 926298XXXX for assistance.</p>
            </div>

        </section>

    `;
};

export const offerBanner = () => {
  return `

        <div class="msg-wrap">
                <a href="#">New! 1600+ Fall Arrivals <span class="arrow"></span></a>
            </div>
            <div class="line"></div>
            <div class="msg-wrap">
                <a href="#">Up to 60% off Steals of the Season <br> Going, Going... Almost Gone! <span
                        class="arrow"></span></a>
            </div>
            <div class="line"></div>
            <div class="msg-wrap">
                <a href="#">Up to 40% off Top Kitchen Brands <br>Le Creuset, Cuisinart & More! <span
                        class="arrow"></span></a>
            </div>
            <div class="line"></div>
            <div class="msg-wrap">
                <a href="#">Up to 60% off Outdoor <span class="arrow"></span></a>
        </div>
    
    `;
};

export const navFooterStyle = () => {
  return `

        :root {
          --primary-text: #343434;
          --secondry-text: #494744;
          --bg: #ffffff;
          --border: #d2d2d2;
        }

        body {
          position: relative;
          width: 100%;
          max-height: 100vh;
          background-color: var(--bg);
        }
        body a {
          text-decoration: none;
        }
        body li {
          list-style-type: none;
        }

        header {
          width: 100%;
          max-height: 300px;
        }

        /* Header top start */
        .header-top {
          width: 100%;
          border-bottom: 1px solid var(--border);
        }
        .header-top ul {
          width: 530px;
          padding: 5px 5px 10px 5px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .header-top ul > li {
          position: relative;
        }
        .header-top ul > li > a {
          color: var(--secondry-text);
          font-size: 14px;
        }
        .header-top > ul li:first-child > a {
          color: var(--primary-text);
          font-weight: 700;
          font-size: 17px;
        }
        .header-top > ul > li:nth-child(2) > a {
          font-weight: 650;
          color: #696969;
        }
        .header-top > ul > li:nth-child(3) > a {
          padding: 0px 3px;
          font-weight: 500;
          color: #6c6c6c;
          border: 2px solid #909090;
        }
        .header-top > ul > li:nth-child(4) > a {
          font-weight: 500;
          color: #6c6c6c;
          font-size: 14px;
        }
        .header-top > ul > li:nth-child(4) > a > span {
          height: 7px;
          margin-right: 3px;
          border: 1px solid rgb(199, 173, 173);
        }
        .header-top > ul:last-child > a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .header-top > ul:last-child > a > img {
          width: 22px;
        }
        .header-top > ul > li::before {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 4px;
          background-color: black;
          transition: all 0.6s ease;
        }
        .header-top > ul > li:hover::before {
          width: 100%;
        }
        /* Header top end */

        /* Search bar start */
        .search-bar {
          width: 100%;
          height: 100px;
          padding: 0 35px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
        }
        .search {
          width: 380px;
          display: flex;
          align-items: center;
          border: 2px solid var(--border);
        }
        .search:focus-within {
          border: 2px solid #636363;
        }
        .search > input {
          width: 87%;
          padding: 10px;
          width: 330px;
          font-size: 16px;
          border: none;
        }
        .search > input:focus {
          outline: none;
        }
        .search i {
          width: 13%;
          padding: 12px;
          cursor: pointer;
        }
        .search .fa-magnifying-glass {
          font-size: 22px;
          opacity: 0.5;
        }
        .logo {
          text-align: center;
        }
        .logo > p {
          color: var(--primary-text);
          font-size: 48px;
          font-weight: 500;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
        .icons-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .sign-in {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
        .user-name-icon{
          display: flex;
          gap: 10px;
        }
        .fa-user,
        .fa-location-dot,
        .fa-heart,
        .fa-cart-shopping {
          font-size: 20px;
          color: #000001;
          cursor: pointer;
        }
        .sign-in > p {
          font-size: 14px;
        }
        .sign-in > p > a {
          color: var(--secondry-text);
          cursor: pointer;
        }
        .sign-in > p > a:hover {
          text-decoration: underline;
        }
        .icons-container > li {
          position: relative;
          cursor: pointer;
        }
        .sign-in > li {
          position: relative;
        }
        .icons-container > li::after,
        .sign-in > li::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          height: 4px;
          width: 0%;
          height: 4px;
          background-color: black;
          transform: translateX(-50%);
          transition: all 0.6s ease;
        }
        .icons-container > li:hover::after,
        .sign-in > li:hover::after {
          width: 95%;
        }
        .sign-in,
        .location,
        .heart,
        .shopping-cart {
          position: relative;
        }
        .sign-in-popUp,
        .location-popUp,
        .heart-popUp,
        .shopping-popUp {
          position: absolute;
          top: 35px;
          width: 350px;
          display: flex;
          flex-direction: column;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background-color: white;
          opacity: 0;
          z-index: -1;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }
        .sign-in:hover .sign-in-popUp,
        .location:hover .location-popUp,
        .heart:hover .heart-popUp,
        .shopping-cart:hover .shopping-popUp {
          opacity: 1;
          z-index: 999;
          visibility: visible;
          transform: translateY(0);
        }
        .sign-in-popUp {
          left: 55px;
          padding: 30px 25px;
          gap: 10px;
        }
        .sign-in-popUp > div {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .sign-in-popUp > div > a,
        .location-popUp > div > a {
          font-size: 14px;
          color: var(--secondry-text);
        }
        .sign-in-popUp > div > a:hover,
        .location-popUp > div > a:hover {
          text-decoration: underline;
        }
        .location-popUp {
          right: -190px;
          padding: 30px 25px;
          gap: 10px;
        }
        .location-popUp > div {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .location-popUp>div>i{
          width: 20px;
        }
        .heart-popUp {
          top: 35px;
          right: -110px;
          padding: 30px 30px;
          gap: 20px;
        }
        .heart-popUp > h5 {
          font-weight: 550;
          font-size: 14px;
        }
        .heart-popUp > ol {
          padding-left: 30px;
        }
        .heart-popUp > ol > li {
          list-style-type: decimal;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .heart-popUp > ol > li::marker {
          font-weight: bold;
        }
        .heart-popUp > ol > li > span {
          font-weight: bold;
        }
        .heart-popUp > img {
          width: 200px;
        }
        .heart-popUp > p,
        .shopping-popUp > p {
          font-size: 13px;
        }
        .heart-popUp > p > a,
        .shopping-popUp > p > a {
          color: var(--primary-text);
          text-decoration: underline;
        }
        .heart-popUp > a > button,
        .shopping-popUp > button {
          width: 100%;
          padding: 10px;
          font-weight: 500;
          border: none;
          background-color: black;
          color: white;
          cursor: pointer;
        }
        .shopping-popUp {
          top: 35px;
          right: -30px;
          padding: 20px 25px;
          gap: 20px;
        }
        /* Search bar end */

        /* Header bottom start */

        .header-bottom {
          padding: 15px 60px;
        }
        .header-bottom > ul {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 10px;
          font-size: 14px;
        }
        .header-bottom > ul > li > a {
          position: relative;
          color: var(--secondry-text);
          opacity: 0.9;
        }
        .header-bottom > ul > li > a::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          height: 2px;
          width: 0%;
          transform: translateX(-50%);
          background-color: black;
          transition: all 0.6s ease;
        }
        .header-bottom > ul > li > a:hover::after {
          width: 100%;
        }

        /* header bottom popups start */

        .header-bottom > ul {
          width: 100%;
          position: relative;
        }
        .new-popup,
        .wedding-registry-popup {
          position: absolute;
          top: 40px;
          width: 100%;
          right: 10px;
          padding: 35px 40px 20px 40px;
          display: flex;
          background-color: var(--bg);
          opacity: 0;
          z-index: -1;
          visibility: hidden;
          overflow: hidden;
          transform: translateY(10px);
          transition: all 0.4s ease;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .new-popup {
          justify-content: center;
          gap: 60px;
        }
        .wedding-registry-popup {
          gap: 40px;
        }
        .new:hover .new-popup,
        .new-popup:hover,
        .wedding-registry:hover .wedding-registry-popup,
        .wedding-registry-popup:hover {
          opacity: 1;
          z-index: 999;
          visibility: visible;
          transform: translateY(0);
        }
        .top-category > h3,
        .trending > h3,
        .collabs > h3,
        .wedding > h3,
        .tips > h3,
        .wedding-top-categories > h3,
        .wedding-top-brand > h3 {
          font-weight: 550;
          margin-bottom: 20px;
          text-decoration: underline;
        }
        .top-category > ul > li,
        .trending > ul > li,
        .collabs > ul > li,
        .wedding > ul > li,
        .tips > ul > li,
        .wedding-top-categories > ul > li,
        .wedding-top-brand > ul > li {
          margin-bottom: 7px;
        }
        .top-category > ul > li > a,
        .trending > ul > li > a,
        .collabs > ul > li > a,
        .wedding > ul > li > a,
        .tips > ul > li > a,
        .wedding-top-categories > ul > li > a,
        .wedding-top-brand > ul > li > a {
          color: var(--secondry-text);
        }
        .top-category > ul > li > a:hover,
        .trending > ul > li > a:hover,
        .collabs > ul > li > a:hover,
        .wedding > ul > li > a:hover,
        .tips > ul > li > a:hover,
        .wedding-top-categories > ul > li > a:hover,
        .wedding-top-brand > ul > li > a:hover{
          text-decoration: underline;
        }
        .new-img > figure > figcaption,
        .wedding-img > figure > figcaption {
          font-weight: 550;
          margin-top: 10px;
        }
        .wedding-img > figure > img {
          width: 380px;
        }

        /* header bottom popups end */

        /* Header bottom end */

        /* navbar start */

        .navbar {
          padding: 10px;
          background-color: black;
        }
        .navbar > ul {
          width: 100%;
          position: relative;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .navbar > ul > li > a {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          color: white;
        }
        .navbar > ul > li > a::after {
          content: "";
          position: absolute;
          bottom: -11px;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          background-color: var(--bg);
          width: 0%;
          transition: all 0.6s ease;
        }
        .navbar > ul > li > a:hover:after {
          width: 100%;
        }
        /* navbar popup start */
        .navbar > ul {
          width: 100%;
          position: relative;
        }
        .furniture-popup,
        .outdoor-popup,
        .tabletop-popup,
        .kitchen-popup,
        .bedding-popup,
        .bath-popup,
        .window-popup,
        .lighting-popup,
        .gifts-popup,
        .decor-popup,
        .rugs-popup,
        .sale-popup {
          max-height: 600px;
          width: 97%;
          position: absolute;
          top: 34px;
          right: 15px;
          padding: 50px 35px 20px 35px;
          display: flex;
          justify-content: center;
          gap: 100px;
          background-color: var(--bg);
          overflow-y: auto;
          opacity: 0;
          z-index: -1;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.4s ease;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .outdoor-popup {
          gap: 0px !important;
          justify-content: space-between;
        }
        .tabletop-popup,
        .furniture-popup {
          gap: 65px;
        }
        .bedding-popup {
          justify-content: center;
        }

        .furniture:hover .furniture-popup,
        .furniture-popup:hover,
        .outdoor:hover .outdoor-popup,
        .outdoor-popup:hover,
        .tabletop:hover .tabletop-popup,
        .tabletop-popup:hover,
        .kitchen:hover .kitchen-popup,
        .kitchen-popup:hover,
        .bedding:hover .bedding-popup,
        .bedding-popup:hover,
        .bath:hover .bath-popup,
        .bath-popup:hover,
        .window:hover .window-popup,
        .window-popup:hover,
        .lighting:hover .lighting-popup,
        .lighting-popup:hover,
        .gifts:hover .gifts-popup,
        .gifts-popup:hover,
        .decor:hover .decor-popup,
        .decor-popup:hover,
        .rugs:hover .rugs-popup,
        .rugs-popup:hover,
        .sale:hover .sale-popup,
        .sale-popup:hover {
          opacity: 1;
          z-index: 999;
          visibility: visible;
          transform: translateY(0);
        }

        .furniture-popup h3,
        .outdoor-popup h3,
        .tabletop-popup h3,
        .kitchen-popup h3,
        .bedding-popup h3,
        .bath-popup h3,
        .window-popup h3,
        .lighting-popup h3,
        .gifts-popup h3,
        .decor-popup h3,
        .rugs-popup h3,
        .sale-popup h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .furniture-popup h3:hover,
        .outdoor-popup h3:hover,
        .tabletop-popup h3:hover,
        .kitchen-popup h3:hover,
        .bedding-popup h3:hover,
        .bath-popup h3:hover,
        .window-popup h3:hover,
        .lighting-popup h3:hover,
        .gifts-popup h3:hover,
        .decor-popup h3:hover,
        .rugs-popup h3:hover,
        .sale-popup h3:hover {
          text-decoration: underline;
        }

        .furniture-popup ul li,
        .outdoor-popup ul li,
        .tabletop-popup ul li,
        .kitchen-popup ul li,
        .bedding-popup ul li,
        .bath-popup ul li,
        .window-popup ul li,
        .lighting-popup ul li,
        .gifts-popup ul li,
        .decor-popup ul li,
        .rugs-popup ul li,
        .sale-popup ul li {
          margin-bottom: 7px;
        }

        .furniture-popup ul li a,
        .outdoor-popup ul li a,
        .tabletop-popup ul li a,
        .kitchen-popup ul li a,
        .bedding-popup ul li a,
        .bath-popup ul li a,
        .window-popup ul li a,
        .lighting-popup ul li a,
        .gifts-popup ul li a,
        .decor-popup ul li a,
        .rugs-popup ul li a,
        .sale-popup ul li a {
          color: var(--secondry-text);
          font-size: 14px;
        }

        .furniture-popup ul li a:hover,
        .outdoor-popup ul li a:hover,
        .tabletop-popup ul li a:hover,
        .kitchen-popup ul li a:hover,
        .bedding-popup ul li a:hover,
        .bath-popup ul li a:hover,
        .window-popup ul li a:hover,
        .lighting-popup ul li a:hover,
        .gifts-popup ul li a:hover,
        .decor-popup ul li a:hover,
        .rugs-popup ul li a:hover,
        .sale-popup ul li a:hover {
          text-decoration: underline;
        }
        .img-furniture > figure > a > img,
        .outdoor-img > figure > a > img,
        .tabletop-img > figure > a > img,
        .kitchen-img > figure > a > img,
        .bedding-img > figure > a > img,
        .bath-img > figure > a > img,
        .window-img > figure > a > img,
        .lighting-img > figure > a > img,
        .gifts-img > figure > a > img,
        .decor-img > figure > a > img,
        .rugs-img > figure > a > img,
        .sale-img > figure > a > img {
          height: 350px;
          width: 260px;
        }
        .img-furniture > figure > figcaption,
        .outdoor-img > figure > figcaption,
        .tabletop-img > figure > figcaption,
        .kitchen-img > figure > figcaption,
        .bedding-img > figure > figcaption,
        .bath-img > figure > figcaption,
        .window-img > figure > figcaption,
        .lighting-img > figure > figcaption,
        .gifts-img > figure > figcaption,
        .decor-img > figure > figcaption,
        .rugs-img > figure > figcaption,
        .sale-img > figure > figcaption {
          font-size: 14px;
          font-weight: 550;
          margin-top: 10px;
          cursor: pointer;
        }
        .outdoor-img > figure > figcaption {
          margin-bottom: 15px;
        }
        .img-furniture > figure > figcaption:hover {
          text-decoration: underline;
        }
        /* navbar popup end */
        /* navbar end */



        /* banner start */
        .banner {
          width: 100%;
          padding: 6px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #694642;
        }
        .msg-wrap > a {
          color: #ffffff;
          text-align: center;
          font-size: 15px;
          font-weight: 550;
        }
        .line {
          height: 25px;
          width: 2px;
          background-color: #fff;
        }
        .arrow,
        .small-arrow {
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 5px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 7px solid #ffffff;
        }
        .small-arrow {
          border-left: 7px solid black;
        }
        /* banner end */



        /* footer start */

        /* footer up section start */
        footer{
          height: 780px;
          width: 100%;
        }
        .footer-up{
          width: 100%;
          height: 15%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          color: white;
          background-color: black;
        }
        .footer-up>div{
          line-height: 1.1;
        }
        .footer-up>div>h1{
          font-size: 24px;
          font-weight: 550;
        }
        .footer-up>div>p{
          font-size: 13px;
        }
        .footer-up>button{
          padding: 10px 25px;
          font-size: 17px;
          font-weight: 500;
          border: none;
          cursor: pointer;
        }
        /* footer up section end */

        /* footer bottom section start */
        .footer-bottom{
          height: 85%;
          width: 100%;
          padding: 30px 50px;
          background-color: #f7f7f7;
        }
        .bottom-part1{
          width: 100%;
          padding-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid rgb(166, 161, 161);
          gap: 20px;
        }
        .order>div:nth-child(1),
        .contact>div:nth-child(1),
        .credit-card>div:nth-child(1),
        .iOS-app>div:nth-child(1){
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .fa-cube,
        .fa-message,
        .sign-in-popUp>div>.fa-credit-card,
        .fa-mobile-screen{
          font-size: 36px;
        }
        .sign-in-popUp>div>.fa-credit-card{
          font-size: 16px;
        }
        .order>p,
        .contact>p,
        .credit-card>p,
        .iOS-app>div:nth-child(2)>div>p{
          font-size: 14px;
          color: #8a8f93;
        }
        .order>div:nth-child(3),
        .contact>div:nth-child(3),
        .credit-card>div:nth-child(3){
          margin-top: 20px;
          display: flex;
          gap: 20px;
        }
        .order>div:nth-child(3)>a,
        .contact>div:nth-child(3)>a,
        .credit-card>div:nth-child(3)>a{
          color: #444546;
          font-size: 13px;
          text-decoration: underline;
        }
        .iOS-app>div:nth-child(2){
          display: flex;
          gap: 15px;
        }
        .iOS-app>div:nth-child(2)>div>a>img{
          width: 140px;
        }
        .iOS-app>div:nth-child(2)>img{
          width: 90px;
          height: 90px;
        }

        .bottom-part2{
          width: 100%;
          padding: 20px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid rgb(166, 161, 161);
        }
        .help>p,
        .resources>p,
        .our-company>p,
        .show-us>p{
          font-size: 15px;
          font-weight: 550;
          margin-bottom: 10px;
        }
        .help>ul>li,
        .resources>ul>li,
        .our-company>ul>li{
          margin-bottom: 8px;

        }
        .help>ul>li>a,
        .resources>ul>li>a,
        .our-company>ul>li>a{
          color: #636465;
          font-size: 13px;
        }
        .help>ul>li>a:hover,
        .resources>ul>li>a:hover,
        .our-company>ul>li>a:hover{
          text-decoration: underline;
        }
        .show-us>a{
          color: #636465;
          text-decoration: underline;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .show-us>div:nth-child(4){
          margin-top: 15px;
          margin-bottom: 15px;
          width: 190px;
          display: flex;
          justify-content: space-between;
        }
        .show-us>div:nth-child(4)>a>i{
          font-size: 20px;
          color: #242420;
        }
        .show-us>div:nth-child(6){
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .show-us>div:nth-child(6)>ul:nth-child(1),
        .show-us>div:nth-child(6)>ul:nth-child(2){
          display: flex;
          gap: 20px;
        }
        .show-us>div:nth-child(6)>ul:nth-child(1)>li>a{
          font-size: 26px;
          font-weight: 550;
          color: #242420;
        }
        .show-us>div:nth-child(6)>ul:nth-child(2)>li:nth-child(1)>a{
          padding: 0px 5px;
          color: #242420;
          font-size: 21px;
          font-weight: 550;
          border: 3px solid black;
        }
        .show-us>div:nth-child(6)>ul:nth-child(2)>li:nth-child(2)>a{
          color: #242420;
          font-size: 19px;
          font-weight: 450;
        }
        .show-us>div:nth-child(6)>ul:nth-child(2)>li:nth-child(2)>a>span{
          margin-right: 5px;
          border: 1px solid black;
        }
        .bottom-part3{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bottom-part3>ul{
          display: flex;
          gap: 25px;
        }
        .bottom-part3>ul>li>a{
          font-size: 12px;
          color: #444546;
          text-decoration: underline;
        }
        .bottom-part3>p{
          font-size: 12px;
          color: #444546;
        }
        /* footer bottom section end */

        /* footer end */

    `;
};
