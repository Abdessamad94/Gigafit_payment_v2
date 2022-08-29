import React ,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import filtericon from "../assets/filter_icon.png";
import geoicon from "../assets/geo_icon.png";
import Geocode from "react-geocode";

export default function Search({ searchquery, setSearchquery ,clubCount}) {
  const [address, setAddress] = useState('')
  /* get goelocazation */
  const getGeo = () => {
    
    Geocode.setApiKey(process.env.REACT_APP_Google_API);
    navigator.geolocation.getCurrentPosition(function (position) {
      Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
        (response) => {
          const address = response.results[7].formatted_address;
          setAddress(address)
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  };



  return (
    <div className="search-container">
      <div className="up-Section">
        <span>
          <button className="search_btn" type="submit">
            <FaSearch /> RECHERCHE
          </button>
        </span>
        <span>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(event) => {
              setSearchquery(event.target.value);
            }}
            placeholder='...'
          />
        </span>
      </div>
      <div className="down-Section">
        <span>
          <img className="icon" src={filtericon} alt="filter icon" />
          <small>{`${clubCount}`} CLUBS</small>
        </span>
        <hr />
        <span
          onClick={() => {
            getGeo();
          }}
        >
          <img className="icon geoicon" src={geoicon} alt="filter icon" />
          <small>{address ? address : "Click pour votre position"}  </small>
        </span>
      </div>
    </div>
  );
}
