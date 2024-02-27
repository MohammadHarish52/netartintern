import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <span>
          <IoCall />
        </span>
        <p>Toll Free 1800 200 1234</p>
      </div>
      <div className="icons">
        <span>
          <FaFacebook />
        </span>
        <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
      </div>
      <div className="icons">
        <span>
          <FaGlobe />
        </span>
        <a href="www.crigroups.com">www.crigroups.com</a>
      </div>
    </div>
  );
};

export default Footer;
