import "../styles/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="top_bar">
        <div className="column_footer">
          <h4>
            <a href="./kontakt">Kontakt</a>
          </h4>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>kontakt@zebrane.org</span>
          </div>
        </div>
        <div className="column_footer">
          <h4>Dane fundacji</h4>
          <div>
            <p>NIP: 8943169099</p>
            <p>KRS: 0000905551</p>
            <p>REGON: 389198101</p>
          </div>
        </div>
        <div className="column_footer" id="logo_footer">
          <NavLink to="/" activeClassName="active">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
          </NavLink>
          <div className="social">
            <a href="https://www.facebook.com/FundacjaZebrane">
              <i class="fa-brands fa-facebook" />
            </a>
            <a href="https://www.instagram.com/fundacjazebrane/">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom_bar"></div>
    </footer>
  );
}

export default Footer;
