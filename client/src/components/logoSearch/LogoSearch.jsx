import React from 'react'
import Logo from '../../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './LogoSearch.scss'
const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={Logo} alt=""/>
        <div className="search">
            <input type="text" placeholder= '#Explore'/>
            <div className="searchIcon">
                <SearchIcon/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch