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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJfaWQiOiI2MjQ2YWU2OGEyNWY4YTU1N2RhOTY1ZmUiLCJsYXN0bmFtZSI6InRlc3QiLCJmaXJzdG5hbWUiOiJ0ZXN0ICIsImdlbmRlciI6Ik1hbGUiLCJkYXRlQmlydGgiOiIyMDE3LTA1LTExIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInRlbCI6IjIwMjIyNTU0NTc4IiwicGFzc3dvcmQiOiIkMmIkMTAkV3gzN0V2V3I1VmxacmUveWRnWC5DTzBLcnUuUEhWd29yaGlnb2IydTR5NnhtVjRqelcyVWEiLCJwcm9maWxlUGljdHVyZSI6IjE2NDg3OTkzMzU1MjkxLmpwZWciLCJjbHViIjoiNjIxOTBjZjNkYzc5YjI5YmY3OGIyN2VhIiwiY3JlYXRlZEF0IjoiMjAyMi0wNC0wMVQwNzo0ODo1Ni4zNjhaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0wMVQwNzo0ODo1Ni4zNjhaIn0sImlhdCI6MTY1MDM2MjMwNn0.0jwSSlW9ALtTtSs4wp-dlmvuJyyt8A2iC1brjSa7LSY`,
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
      <Search searchquery={searchquery} setSearchquery={setSearchquery} />
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
