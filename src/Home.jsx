import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="hero__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/31st/LP/EBBA_LP_3105_BAN_DESKTOP1.jpg"
          alt="picture"
        />
        <div className="home__row">
          <Product
            title="
               Click to open expanded view
               Redmi Note 10 (Shadow Black, 4GB RAM, 64GB Storage) - Amoled Dot Display | 48MP Sony Sensor IMX582 | Snapdragon 678 Processor"
            price={(12, 499.0)}
            image="https://m.media-amazon.com/images/I/41TEQ0dgYkS.jpg"
            rating={4}
          />

          <Product
            title="
            Bose QuietComfort Noise Cancelling Earbuds - True Wireless Earphones, Triple Black. The World's Most Effective Noise Cancelling Earbudsr"
            price={(26, 900.0)}
            image="https://m.media-amazon.com/images/I/611qu2aEn1L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="
            ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GeForce GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/1TB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE169TS"
            price={(84, 990.0)}
            image="https://m.media-amazon.com/images/I/81i1XE-J04L._AC_SX180_SY120_QL70_.jpg"
            rating={4}
          />
          <Product
            title="
            Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
            price={(21, 990.0)}
            image="https://m.media-amazon.com/images/I/413g0vWU0QL.jpg"
            rating={4}
          />
          <Product
            title="
            Fossil Gen 5 Julianna Stainless Steel Touchscreen Women's Smartwatch with Speaker, Heart Rate, GPS, Music storage and Smartphone Notifications - FTW6036, (44mm, Black)"
            price={(22, 995)}
            image="https://m.media-amazon.com/images/I/81JeJjt18nL._AC_UL320_.jpg"
            rating={5}
          />
          {/* Product  */}
          {/* Product  */}
        </div>
        <div className="home__row">
          {/* Product  */}

          <Product
            title="
            Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={(74, 999.0)}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
