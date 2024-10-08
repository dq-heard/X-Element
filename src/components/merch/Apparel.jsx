import Item from "./Item";
import BoldUniform from "../../assets/XE-Apparel-Design-Pack-Color-OP2-JPEG.webp";
import WiseUniform from "../../assets/XE-Apparel-Design-JPEG-2.webp";
import PoloShirt from "../../assets/Polo_Shirt_03.webp";

import "./merch.css";

const Apparel = () => {
  return (
    <section className="section apparel" aria-label="more team apparel">
      <div className="container">
        <p className="section-subtitle">Having Trouble Choosing?</p>

        <h2 className="h2 section-title">
          <span className="span">Upgrade</span> Your Wardrobe
        </h2>

        <p className="section-text">
          Get all three (the Hoodie, Jersey, and Sweats altogether) in one
          package.
        </p>

        <ol className="merch-list">
          <Item
            src1={BoldUniform}
            alt1="X Element Full Black Uniform with Pink Accent Color"
            title1="Bold Uniform"
            price="$182.00"
            src2={WiseUniform}
            alt2="X Element Full Black Uniform with Purple Accent Color"
            title2="Wise Uniform"
          ></Item>

          <Item
            src1={PoloShirt}
            alt1="X Element Black Polo Shirt"
            title1="Staff Polo"
            price="$56.00"
            isSingle={true}
          ></Item>
        </ol>
      </div>
    </section>
  );
};

export default Apparel;
