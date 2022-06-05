import React from 'react'
import Logo from '../../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={Logo} alt=""/>
        <div className="search">
            <input type="text" placeholder= '#Explore'/>
            <div className="s-icon">
                <SearchIcon/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch