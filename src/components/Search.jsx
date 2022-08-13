import React from "react";
import { FaSearch } from "react-icons/fa";
import filtericon from "../assets/filter_icon.png";
import geoicon from "../assets/geo_icon.png";

export default function Search({searchquery,setSearchquery}) {

    /* get goelocazation */
    const getGeo = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
            console.log(position);
          });
    }
  return (
    <div className="search-container">
      <div className="up-Section">
        <span>
          <button className="search_btn" type="submit">
            <FaSearch /> RECHERCHE
          </button>
        </span>
        <span>
          <input type="text" name="search" id="search" onChange={(event) => { setSearchquery(event.target.value) }} />
        </span>
      </div>
      <div className="down-Section">
        <span>
          <img className="icon" src={filtericon} alt="filter icon" />
          <small>58 CLUB PRES DE "PARIS"</small>
        </span>
        <hr />
        <span onClick={() => {getGeo()}}>
          <img className="icon geoicon" src={geoicon} alt="filter icon" />
          <small>58 CLUB PRES DE "PARIS"</small>
        </span>
      </div>
    </div>
  );
}
