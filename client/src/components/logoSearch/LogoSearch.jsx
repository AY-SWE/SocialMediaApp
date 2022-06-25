import React from 'react'
import Logo from '../../img/cameraLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import './LogoSearch.scss'
import { Link } from 'react-router-dom';

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <div className="logoImg">
            <Link to="../home">
              <img src={Logo} alt=""/>
              </Link>
        </div>
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