import { StyledBtn_Primary, StyledMenuNav } from '../../components/components.styled';
import { Link } from 'react-router-dom';


function MenuNav() {
  return (
    <>
    <StyledMenuNav>
        <Link to='/' >
          <StyledBtn_Primary>All </StyledBtn_Primary>
        </Link> 

        <Link to='/Grocery' >
          <StyledBtn_Primary>Grocery </StyledBtn_Primary>
        </Link> 

        <Link to='/Mobiles'>
          <StyledBtn_Primary> Mobiles </StyledBtn_Primary>
        </Link>

        <Link to='/JentsWear'>
          <StyledBtn_Primary> Mens Wear </StyledBtn_Primary>
        </Link>

        <Link to='/GirlsWear'>
          <StyledBtn_Primary>   Girls Wear  </StyledBtn_Primary>
        </Link>

        <Link to='/KidsWear'>
          <StyledBtn_Primary>  Kids Wear </StyledBtn_Primary>
        </Link>

        <Link to='/Electronics'>
          <StyledBtn_Primary>  Electronics  </StyledBtn_Primary>
        </Link> 

        <Link to='/BeautyToys'>
          <StyledBtn_Primary>  Beauty & Toys </StyledBtn_Primary>
        </Link>
    </StyledMenuNav>
    
        
    </>
  )
}

export default MenuNav