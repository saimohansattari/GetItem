import styled from "styled-components";

// Main Navbar
export const StyledNavbar = styled.nav`
  z-index: 1;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px 20px 0px;
  background-color: #2468a2;
`;
export const Search = styled.input`
  width: 25vw;
  height: 40px;
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 10px;
`;
export const SearchBtn = styled.button`
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 14px;
  width: 80px;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-left: 2px;

  &:hover {
    border: 2px solid #173957;
    background-color: #f6f8f9;
  }
`;

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
`;

//Menunav

export const StyledMenuNav = styled.nav`
  z-index: 1;
  margin-top: 100px;
  width: 100vw;
  position: fixed;
  display: flex;
  height: 30px;
  flex-wrap: wrap;
  padding: 10px 0px 10px 0px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid gray;
`;

//Buttons Styled Components

export const StyledBtn_Primary = styled.button`
  cursor: pointer;
  color: black;
  background-color: transparent;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 14px;
  padding: 5px;
  border: none;

  &:hover {
    border-bottom: 2px solid #2468a2;
  }
`;

export const StyledBtn_Secondary = styled.button`
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  cursor: pointer;
  color: red;
  background-color: transparent;
  font-size: 18px;
  padding: 5px;
  border: none;

  &:hover {
    color: black;
    /* border-bottom: 2px solid #3973a5; */
  }
`;

export const StyledBtn1 = styled.button`
  color: black;
  width: 150px;
  padding: 15px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #2468a2;
    border-radius: 5px;
  }
`;

//SignIn
export const StyledSignInForm = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  padding-top: 170px;
  background-color: transparent;
  z-index: 1;
`;

export const StyledForm = styled.form`
  width: 50vw;
  height: 60vh;
  gap: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 15px;
  flex-direction: column;
  padding: 45px 10px 45px 10px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 18px;
`;

export const LoginInput = styled.input`
  width: 45vw;
  height: 45px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const PassWordInput = styled.input`
  width: 45vw;
  height: 45px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const SubmitBtn = styled.button`
  width: 20vw;
  height: 45px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid gray;

  &:hover {
    background-color: #2468a2;
    border: 1px solid black;
  }
`;

export const SocialLogin = styled.div`
  width: fit-content;
  padding: 5px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GoogleBtn = styled.div`
  width: 60px;
  height: 60px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

//Home page Components
export const MainDiv = styled.div`
  background-color: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 135px;
`;

export const SubDiv = styled.div`
  margin-top: 28px;
  display: flex;
  width: 95vw;
  border-radius: 10px;
  background-image: linear-gradient(
    to right top,
    #1c1040,
    #202053,
    #233065,
    #254078,
    #25518a,
    #355d9c,
    #4568ae,
    #5674c0,
    #7d7bd2,
    #a680e0,
    #d084e8,
    #f986eb
  );
  gap: 2px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ImgCard = styled.div`
  height: fit-content;
  background-color: none;
`;
export const TextCard = styled.div`
  background-color: none;
  padding: 25px 40px 25px 40px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
`;

//Text Styled Components
export const TextS45 = styled.h1`
  font-family: "Lucida Handwriting", cursive;
  font-size: 45px;
`;

export const TextS23 = styled.p`
  font-size: 24px;
  text-align: center;
`;

export const TextS24 = styled.p`
  font-family: "Lucida Handwriting", cursive;
  width: 450px;
  font-size: 24px;
  text-align: center;
`;

export const TextS17 = styled.p`
  font-size: 17px;
  color: gray;
`;

export const TextS18 = styled.p`
  font-size: 18px;
`;

//Home page Products styled Components
export const ProductScrollDiv = styled.div`
  width: 85vw;
  height: 350px;
  display: flex;
  align-items: center;
`;

export const Scroll_1 = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 20px;
  white-space: nowrap;
  padding: 20px 0px 20px 0px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

//MenubarPages Style Components

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv1 = styled.div`
  padding-top: 170px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 87vw;
  justify-content: center;
  background-color: none;
  /* background-color: skyblue; */
`;

export const ProductCard = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 36vh;
  width: 200px;
  gap: 1px;
  background-color: white;
  border: 1px solid #27252587;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 10px 20px #0f0f0f89;
  }
`;

export const ProductImg = styled.img`
  background-color: white;
  width: 180px;
  height: 16vh;
`;

export const ProductText = styled.div`
  width: 180px;
  height: 18vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: white;
  border-top: 1px solid gray;
  padding: 5px 8px 5px 8px;
`;
export const ProductName = styled.p`
  font-size: 15px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
`;

export const ProductWeight = styled.p`
  font-size: 14px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-weight: 15px;
  color: gray;
`;

export const ProductPrice = styled.p`
  font-size: 17px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-weight: bold;
  color: #000000dc;
`;
export const ProCost = styled.p`
  font-size: 17px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-weight: bold;
`;

export const OfferText = styled.p`
  font-size: 14px;
  color: green;
`;

// UserDashboard Styled components
export const StyledDashBoard = styled.div`
  margin-top: 40px;
  padding: 30px;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  width: 75vw;
  border: 0.1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserNameText = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: center;
`;

export const LogOutText = styled.div``;

export const SellDiv = styled.div`
  padding: 13px 15px 13px 15px;
  width: 250px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  color: black;

  &:hover {
    box-shadow: 5px 10px 20px #0f0f0f86;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 100px 0px 100px;
`;

//Selling Product page styled component
export const StyledPro_Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;
export const FormLable = styled.p`
  font-size: 14px;
`;

export const StyledInputDiv = styled.div`
  width: 400px;
  background-color: none;
  padding: 15px 0px;
`;

export const StyledInput1 = styled.input`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledSubmitBtn = styled.button`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #272626;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #285983e0;
    color: white;
  }
`;

export const StyledDropdownInput = styled.select`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
