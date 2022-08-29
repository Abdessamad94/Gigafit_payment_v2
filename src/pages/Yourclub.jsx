import React ,{useEffect , useState} from "react";
import Search from "../components/Search";
import { FaFacebook, FaInstagram, FaPhone , FaGlobe } from "react-icons/fa";
// import clubimg from "../assets/La-Plaine.jpg";
import { easings } from "react-animation";
import axios from "axios";

export default function Yourclub() {
  const [searchquery, setSearchquery] = useState("");
  const [clubs, setClubs] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  /* get the clubs from our api just for testing */
  useEffect(() => {
    const getclubs = async () => {
      const res = await axios.get(`${process.env.React_APP_HEROKO_API}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_Jwt_Token}`,
        },
      });
      setClubs(res.data);
      setIsloaded(true);
    };
    if (isloaded) return;

    getclubs();
  }, []);

  const style = {
    animation: `slide-in ${easings.easeOutExpo} 2000ms forwards`,
  };

  return (
    <div className="clubs-container">
      <div className="title">
        <span>OU</span> SOUHAITEZ-VOUS VOUS ENTRAINER ?
      </div>
      <span className="sub-title">
        RECHERCHE LE CLUB LE PLUS PROCHE DE CHEZ TOI :
      </span>
      <Search searchquery={searchquery} setSearchquery={setSearchquery} clubCount={clubs.length}/>
      <div className="clubs-list">
        {clubs
          .filter((club) => club.name.toLowerCase().includes(searchquery))
          .map((e) => (
            <div key={e._id} className="club-card" style={style} >
              <span className="info-section">
                <div className="img-club">
                  <img src={`${process.env.React_APP_IMG_API}/images/clubs/${e.picture}`} alt="" />
                </div>
                <div className="info-club">
                <span className="name info">
                  {e.name}
                </span>
                  <span className="adress info">
                    {e.adresse}
                  </span>
                  <span className="phone info">
                    <a href={`tel:${e.tel}`} target="_blank"><FaPhone /> {e.tel}</a>
                  </span>
                  <div className="social-links info">
                    <span>
                      <a href={e.facebook} target='_blank'>
                        <FaFacebook />
                      </a>
                    </span>
                    <span>
                      <a href={e.instagram} target='_blank'>
                        <FaInstagram />
                      </a>
                    </span>
                    <span>
                      <a href={e.siteWeb} target='_blank'>
                        <FaGlobe />
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
          ))}
      </div>
    </div>
  );
}
