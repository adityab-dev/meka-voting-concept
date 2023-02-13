import "./Features.css";

import { FcLock } from "react-icons/fc";
import { SiEthereum } from "react-icons/si";
import { TbDeviceLaptop } from "react-icons/tb";
import { BiFingerprint } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdOutlineTimer3 } from "react-icons/md";

function Features() {
  return (
    <div className="features-container">
      <div className="features-heading-container">
        <div className="features-heading">
          <div>Features</div>
        </div>
      </div>

      <div className="features-list-center">
        <div className="features-list">
          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <FcLock />
            </div>
            <p>Secured by 256 bit encryption</p>
          </div>

          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <SiEthereum />
            </div>
            <p>Backed by ethereum based technology</p>
          </div>

          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <TbDeviceLaptop />
            </div>
            <p>Verifiable transactions</p>
          </div>

          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <BiFingerprint />
            </div>
            <p>Easy to use</p>
          </div>

          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <BsFillCollectionFill />
            </div>
            <p>Cheaper than ballot voting system</p>
          </div>

          <div className="features-list-feature">
            <div className="features-list-feature-icon">
              <MdOutlineTimer3 />
            </div>
            <p>Faster voting process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
