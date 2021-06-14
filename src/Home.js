import React, { useContext, useState } from "react";
import Banner1 from "./images/amazon_banner_2.jpg";
import Banner2 from "./images/amazon_banner_6.jpg";
import Banner3 from "./images/amazon_banner_5.jpg";
import Banner4 from "./images/amazon_banner_7.jpg";

import "./Home.css";
import Product from "./Product";
import { CartContext } from "./CartContext.js";

function Home() {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const [imageIndex, setImageIndex] = useState(0);
  const banner = banners[imageIndex];
  var myvar = setTimeout(changeImage, 3000);
  function changeImage() {
    if (imageIndex + 1 < banners.length) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  return (
    <div className="home">
      <img className="home__image" src={banner} alt="amazon banner" />
      <div className="product__section">
        <div className="home__row">
          <Product
            id="244425"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            image="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
            rating={4}
            price={4700}
          />
          <Product
            id="244426"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
            rating={5}
            price={5000}
          />
          <Product
            id="244430"
            title="Dell XPS 7390 13.3-inch (33.78 cms) UHD Display Thin & Light Laptop "
            image="https://images-eu.ssl-images-amazon.com/images/I/41-Zsy0JmXL._AC_SX184_.jpg"
            rating={2}
            price={164990}
          />
        </div>
        <div className="home__row">
          <Product
            id="244427"
            title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, Long Battery Life"
            image="https://images-na.ssl-images-amazon.com/images/I/41B54aFFMOL.jpg"
            rating={5}
            price={1000}
          />
          <Product
            id="244428"
            title="SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA"
            image="https://images-na.ssl-images-amazon.com/images/I/41rrRUJINhL.jpg"
            rating={4}
            price={700}
          />
          <Product
            id="244429"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg"
            rating={5}
            price={8000}
          />
          <Product
            id="244431"
            title="AKG K361BT Over Ear Foldable Studio Headphones "
            image="https://images-eu.ssl-images-amazon.com/images/I/41yijhuor3S._AC_SX184_.jpg"
            rating={3}
            price={(6, 749)}
          />
        </div>
        <div className="home__row">
          <Product
            id="244432"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            price={598}
          />
          <Product
            id="244433"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
            rating={5}
            price={5899}
          />
          <Product
            id="244434"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric "
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
            price={3500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
