import { useLocation, useNavigate } from 'react-router-dom'
import { GoogleBtn, SocialLogin } from './components.styled'
import { GoogleIcon } from '../assets/svg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';






function OAuth() {
    const location = useLocation();
    const navigate = useNavigate();

    const onGoogleClick =async () => {
        try {
          const auth = getAuth()
          const provider = new GoogleAuthProvider()
          const result = await signInWithPopup(auth, provider)
          const user = result.user

          console.log({user})
          // check for user
          const docRef = doc(db, 'users', user.uid)
          const docSnap = await getDoc(docRef)
          console.log({docSnap})
          // if user dosen't exist, create user
          if(!docSnap.exists()) {
            await setDoc(doc(db, 'users', user.uid), {
              name: user.displayName,
              email: user.email,
              timestamp: serverTimestamp()
            })
          }
          navigate('/');
        } catch (error) {
          console.log("there is a error in authentication!")
        }
    }


  return (
    <SocialLogin>
       <p>Sign {location.pathname === '/SignIn' ? 'In' : 'Up'} with</p>
        <GoogleBtn onClick={onGoogleClick}>
          <img src={GoogleIcon} alt="" style={{width: "40px", height:"40px"}}/> 
        </GoogleBtn>
    </SocialLogin>
  )
}

export default OAuth