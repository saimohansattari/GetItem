import { StyledSignInForm, LoginInput, StyledForm, PassWordInput, SubmitBtn } from '../../components/components.styled';
import OAuth from '../../components/OAuth';
import { useState } from 'react';

interface UserData {
  name: string;
  email: string;
  password: string;
}



function Signup() {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[submit, setSubmit] = useState<UserData[]>([]);
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const newData: UserData = {
          name: name,
          email: email,
          password: password,
      }  


      setSubmit([...submit,newData])

      
  }

    //form submition 
    
  


  return (
    <div>
      <StyledSignInForm>
            <StyledForm onSubmit={onSubmit}>
              <LoginInput placeholder='Name...' onChange={(e)=> setName(e.target.value)} />
              <LoginInput placeholder='Email...' onChange={(e)=> setEmail(e.target.value)}/>
              <PassWordInput type='password' placeholder='Password...' onChange={(e)=> setPassword(e.target.value)}/>
              <PassWordInput type='password' placeholder='Confirm Pass...' />
              <SubmitBtn>Submit</SubmitBtn>
              <hr />
              
              <OAuth />

              

            </StyledForm>
            
            
        </StyledSignInForm>
    </div>
  )
}

export default Signup