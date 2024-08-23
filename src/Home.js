import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg"
        />

        <div className="home__row">
          <Product
            id="122434"
            title="Atomic Habits"
            price={524}
            image="https://m.media-amazon.com/images/I/81F90H7hnML._SY466_.jpg"
            rating={4}
          />

          <Product
            id="345835"
            title="Longway Super Dlx 750 Watt Juicer Mixer Grinder with 4 Jars for Grinding, Mixing, Juicing with Powerful Motor"
            price={1499}
            image="https://m.media-amazon.com/images/I/71vfrhmJ1SL._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="452178"
            title="Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
            price={5499}
            image="https://m.media-amazon.com/images/I/81lGxS2ZisL._SY450_.jpg"
            rating={4}
          />
          <Product
            id="123954"
            title="Samsung Galaxy Fit3 40mm AMOLED Display with Aluminium Body, Upto 13-Day Battery with Fast Charging, 5ATM & IP68 Rating"
            price={3647}
            image="https://m.media-amazon.com/images/I/61sSwX2mo+L._SX522_.jpg"
            rating={4}
          />
          <Product
            id="345856"
            title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 14'' (35.56cm) HD Thin & Light Laptop (4GB/256GB SSD/Windows 11/MS Office"
            price={29999}
            image="https://m.media-amazon.com/images/I/61s7sJEpsVL._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="358372"
            title="Samsung 108 cm (43 inches) 4K Ultra HD Smart QLED TV QA43Q60DAULXL"
            price={55990}
            image="https://m.media-amazon.com/images/I/81ZGvn9PzPL._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
