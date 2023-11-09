import { FormLable,  StyledDiv1, StyledDropdownInput, StyledInput1, StyledSubmitBtn, StyledPro_Form, StyledInputDiv,  } from "../../components/components.styled"
import { useEffect, useRef, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import {v4 as uuidv4} from 'uuid'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";





function SellProductForm() {


  const [formData, setFormData] = useState({
    name: '',
    images: {},
    grocery: '',
    mobiles: '',
    menswear:'',
    girlswear:'',
    kidswear:'',
    electronics:'',
    others:'',
    weight: '',
    price: '',
    offer: '',
    userRef:''
  })

  const {
    name,
    grocery,
    mobiles,
    menswear,
    girlswear,
    kidswear,
    electronics,
    others,
    weight,
    price,
    offer,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)


  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid })
        } else {
          navigate('/Signin')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    //store images in firebase
    const storeImage = async (image : any) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${auth.currentUser?.uid}-${image.name}-${uuidv4()}`

        const storageRef = ref(storage, 'images/' + fileName)

        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('upalode is ' + progress + '% Done')
            switch (snapshot.state) {
              case 'paused' : 
                console.log ('uploade is paused')
                break
              case "running" :
                console.log('upload is Running') 
                break
              default : 
                break           
            }
          },
          (error) => {
            reject(error)
          },
          () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadRUL) => {
              resolve(downloadRUL)
            })
          }
        )
      })
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      console.log("images not uploaded")
      return
    })

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, 'listings'), formDataCopy)
    console.log('Listing saved in database')
    navigate(`/category/${formDataCopy}/${docRef.id}`)
 
  }







  const onMutate = (e: any)=> {
    // let boolean = null
    
    //files
    if (e.target.files) {
      // setFormData((prevState) => {
      //   ...prevState,
      //   images: e.target.files,
      // })
    } 

    if (!e.target.files) {
      // setFormData((prevState) => {
      //   ...prevState,
      //   [e.target.id]: boolean ?? e.target.value,
      // })
    }
  }

  





  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <StyledDiv1>
        
          <StyledPro_Form  onSubmit={onSubmit}>
            <StyledInputDiv>
              <FormLable>Product Name : </FormLable>
              <StyledInput1 placeholder="Enter Product Name" id="name" value={name} onChange={onMutate}/> 
            </StyledInputDiv>



            <StyledInputDiv>
                <FormLable>Product Type :</FormLable>
                <StyledDropdownInput>
                  <option value={grocery}>Grocery</option>
                  <option value={mobiles}>Mobiles</option>
                  <option value={menswear}>Menswear</option>
                  <option value={girlswear}>Girlswear</option>
                  <option value={kidswear}>Kidswear</option>
                  <option value={electronics}>Electronics</option>
                  <option value={others}>Beaut & Others</option>
                </StyledDropdownInput>
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Select Images :</FormLable>
              <input type="file" id="images" multiple onChange={onMutate} max='5' accept=".jpg,.png,.jpeg" />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Weight or somthing about Product !</FormLable>
              <StyledInput1 placeholder="Weight Or ..." id="weight" value={weight} onChange={onMutate} />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Price</FormLable>
              <StyledInput1 placeholder="200.." id="price" value={price} onChange={onMutate} />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Discount or Offer</FormLable>
              <StyledInput1 placeholder="Enter Disscount or Offer" id="offer" value={offer} onChange={onMutate} />
            </StyledInputDiv>

            <StyledSubmitBtn >SUBMIT</StyledSubmitBtn>
            

          </StyledPro_Form>

        

      </StyledDiv1>
    </div>
  )
}

export default SellProductForm