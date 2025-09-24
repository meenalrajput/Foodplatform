import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            "Enjoy delicious meals delivered right to your doorstep with just a
            few clicks! Whether you're craving comfort food, trying something
            new, or need a quick bite, we've got you covered. Fast, reliable,
            and always fresh – your favorite dishes are just a tap away. Order
            now and savor the convenience of hassle-free food delivery!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 -212-567-6778</li>
            <li>contact @.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copywright">
        Copywright 2024 @ Tomato.com-All Rights Reserved
      </p>
    </div>
  );
};
export default Footer;
