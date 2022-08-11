import React from 'react'
import { FaSearch } from 'react-icons/fa'
import filtericon from '../assets/filter_icon.png'
import geoicon from '../assets/geo_icon.png'

export default function Search() {
  return (
    <div className='search-container'>
        <div className='up-Section'>
            <span><button className='search_btn' type="submit"><FaSearch/> RECHERCHE</button></span>
            <span><input type="text" name="search" id="search" placeholder='Search'/></span>
        </div>
        <div className='down-Section'>
            <span><img className='icon' src={filtericon} alt="filter icon" /><small>58 CLUB PRES DE "PARIS"</small></span>
            <hr/>
            <span><img className='icon' src={geoicon} alt="filter icon" /><small>58 CLUB PRES DE "PARIS"</small></span>
        </div>
    </div>
  )
}
