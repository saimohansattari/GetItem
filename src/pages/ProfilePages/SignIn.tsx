import { StyledSignInForm, LoginInput, StyledForm, PassWordInput, SubmitBtn, StyledBtn_Primary } from '../../components/components.styled';
import { Link } from 'react-router-dom';
import OAuth from '../../components/OAuth';

function SignIn() {
 


  return (
    <div>
        <StyledSignInForm>
            <StyledForm>
              <LoginInput placeholder='Email...' />
              <PassWordInput type='password' placeholder='Password...' />
              <SubmitBtn>Submit</SubmitBtn>
              <hr />
              <Link to='/Signup'><StyledBtn_Primary >SignUp</StyledBtn_Primary></Link> 
                <b>Or</b>
              <OAuth />

              

            </StyledForm>
            
            
        </StyledSignInForm>
    </div>
  )
}

export default SignIn