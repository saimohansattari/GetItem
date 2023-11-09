import { ContentDiv, LogOutText, NameBox,  SellDiv,  StyledBtn1,  StyledBtn_Secondary, StyledDashBoard, StyledDiv1, TextS17, TextS23, UserNameText } from "../../components/components.styled"
import { Link, useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { useState, } from 'react';

function UserDashboard() {
  const navigate = useNavigate()
  const auth = getAuth()
  const[formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const {name, email} = formData

  const onLogout = () => {
    auth.signOut();
    navigate('/')

  }

  const onChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      // [e.target.id] : e.target.value,
    }))

  }


  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <StyledDiv1>
      <StyledDashBoard>
        <NameBox>
          <UserNameText>
            <TextS23>{name}</TextS23>
            <TextS17>{email}</TextS17>
          </UserNameText>
          <LogOutText>
            <StyledBtn_Secondary onClick={onLogout}>SignOut⏩ </StyledBtn_Secondary>
          </LogOutText>
          
        </NameBox>

        <Link to='/SellProductForm' style={{textDecoration:'none'}} >
           <SellDiv>Sell Your Own Product 🌟</SellDiv> 
        </Link>
        
        <ContentDiv>
         <Link to='/Cart'> <StyledBtn1>🛒 Cart</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>🛍️ Orders</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>♡ Wishlist</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>❓ Help</StyledBtn1> </Link>
        </ContentDiv>

      </StyledDashBoard>

      
    </StyledDiv1>
    </div>
  )
}

export default UserDashboard