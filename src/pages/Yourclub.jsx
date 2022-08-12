import React from "react";
import Search from "../components/Search";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import clubimg from '../assets/La-Plaine.jpg'

export default function Yourclub() {
  return (
    <div className="clubs-container">
      <div className="title">
        <span>OU</span> SOUHAITEZ-VOUS VOUS ENTRAINER ?
      </div>
      <span className="sub-title">
        RECHERCHE LE CLUB LE PLUS PROCHE DE CHEZ TOI :
      </span>
      <Search />
      <div className="clubs-list">
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
        {/* 2 */}
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
        {/* 3 */}
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
        {/* 4 */}
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
        {/* 5 */}
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
        {/* 6 */}
        <div className="club-card">
          <span className="info-section">
            <div className="img-club">
              <img src={clubimg} alt="" />
            </div>
            <div className="info-club">
              <span className="adress info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec sodales nibh
              </span>
              <span className="phone info">
                <FaPhone /> +33 00 00 00 00 00
              </span>
              {/* <span className=" info"></span> */}
              <div className="social-links info">
                <span>
                  <a href="">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </span>
          <span className="actions">
            <button type="submit">S'INSCRIRE</button>
          </span>
        </div>
      </div>
    </div>
  );
}
