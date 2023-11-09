import { StyledNavbar, Search, SearchBtn,  UserIcon } from '../../components/components.styled';
import {Logo, usericon}  from '../../assets/pngs/index'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
       <StyledNavbar>
          <div >
           <Link to='/'> <img src={Logo} alt="GetItem_Logo" style={{width: "50px"}}/></Link>
          </div>

          <div style={{display: "flex", flexWrap: "wrap"}}>
              <Search placeholder='Iphone 13Pro...' />
              <SearchBtn>Search</SearchBtn>
          </div>

          <div>
            
           <Link to='/UserDashboard'><UserIcon src={usericon} /></Link>
          </div>
          
          
       </StyledNavbar>

    </>
    
  )
}

export default Navbar