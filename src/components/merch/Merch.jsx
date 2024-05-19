import Item from "./Item";
import BoldHoodie from "../../assets/XE-Hoodie-D1-Color-OP2-Source-File.jpg";
import WiseHoodie from "../../assets/XE-Hoodie-D1-Source-File.jpg";
import BoldJersey from "../../assets/XE-Jersey-D1-Color-OP2-Source-File.jpg";
import WiseJersey from "../../assets/XE-Jersey-D1-Source-File.jpg";
import BoldSweats from "../../assets/XE-Pants-D1-Color-OP2-Source-File.jpg";
import WiseSweats from "../../assets/XE-Pants-D1-Source-File.jpg";

import "./merch.css";

const Merch = () => {
  return (
    <section className="section merch" aria-label="team apparel">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Next Level Apparel
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          <span className="span">Official</span> Uniforms
        </h2>

        <p className="section-text" data-aos="fade-up">
          We offer merch that allows you to proudly showcase your dedication the
          X-Element brand. Show your support with our range of high-quality
          apparel, designed for both comfort & style.
          <br />
          <br />
          To purchase an item, visit our Team Discord and leave a message in the
          "Buy Merch" channel.
        </p>

        <ol className="merch-list">
          <Item
            src1={BoldHoodie}
            alt1="X Element Black Hoodie with Pink Accent Color"
            title1="Bold Hoodie"
            price="$66.00"
            src2={WiseHoodie}
            alt2="X Element Black Hoodie with Purple Accent Color"
            title2="Wise Hoodie"
          ></Item>

          <Item
            src1={BoldJersey}
            alt1="X Element Black Jersey with Pink Accent Color"
            title1="Bold Jersey"
            price="$56.00"
            src2={WiseJersey}
            alt2="X Element Black Jersey with Purple Accent Color"
            title2="Wise Jersey"
          ></Item>

          <Item
            src1={BoldSweats}
            alt1="X Element Black Sweats with Pink Accent Color"
            title1="Bold Sweats"
            price="$60.00"
            src2={WiseSweats}
            alt2="X Element Black Sweats with Purple Accent Color"
            title2="Wise Sweats"
          ></Item>
        </ol>
      </div>
    </section>
  );
};

export default Merch;
