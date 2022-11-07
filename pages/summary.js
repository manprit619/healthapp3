import React, { useEffect, useState } from 'react'
import Layout from './Layout'
//import images from '@data/images'
import Image from 'next/image'
import { db} from "../firebase";
import {
  collection,addDoc,query,deleteDoc,orderBy,getDocs,doc
} from "firebase/firestore";
import postcss from 'postcss';
import auth from "../firebase"
import { useAuthState} from "react-firebase-hooks/auth"




const summary = ( {images, nextCursor} ) => {
  const [ email, setEmail] = useState("")
  // console.log(email,"email")
  

  const [user, loading] = useAuthState(auth)
  const userName = user?.email
  const userEmail = user?.displayName


console.log('images', images)
console.log('nextCursor', nextCursor)

const [questionnaire, setQuestionnaire] = useState([])

const read = async () => {
const q = query(collection(db,"questionnaire"));

const querySnapshot = await getDocs(q);
const datalist = querySnapshot.docs.map((doc) => {
return doc;
})
console.log(datalist)
setQuestionnaire(datalist);
};
   
useEffect(() => {

read()
 
}, [db])


  return (
    <Layout>
      <p className="text-[#ef2d07]">Summary report:</p>
      <h1 > 
      Patient Name: {userEmail}<br/>
      Email id: {userName}</h1>
      <div>
      <ul className>
          {images.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div >
                    <Image width={200} height={200} src={image.image} alt="" />
                  </div>
                  <h3 >
          
                    {/* { image.title } */}
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>
{/* https://358264285632138:2R0_Pe2UeUPdH12lgfZ4y_hyBk4@api.cloudinary.com/v1_1/drj1izokp/resources/image */}
  
        </div>
  
        <p className="text-[#ef2d07]">Questionnaire details:</p>
        
 
      <div class="box-border  p-1 border-4" >
      {/* <h3>activity = 10</h3>
<h3>hairloss = 20</h3>
<h3>itching = 12</h3>
<h3>jointpain = 30</h3>
<h3>pain = 34</h3>
<h3>sideeffects = 50</h3>
<h3>therapy = 80</h3> */}

{ questionnaire.map((questionnaire) => {
  return (
    <h1>Activity {questionnaire.data().activity}</h1>

  )
  
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Hair loss {questionnaire.data().hairloss}</h1>
  )
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Itching {questionnaire.data().itching}</h1>
  )
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Joint pain {questionnaire.data().jointpain}</h1>

  )
  
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Pain {questionnaire.data().pain}</h1>
  )
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Side effects {questionnaire.data().sideeffects}</h1>
  )
}
)}
{ questionnaire.map((questionnaire) => {
  return (
    <h1>Therapy {questionnaire.data().therapy}</h1>
  )
}
)}



      </div>

<button type ="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Send</button>
    </Layout>
  )
}

export async function getStaticProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/?max_results=2`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r => r.json());
 
  
  console.log('results',results);
  const {resources, next_cursor: nextCursor} = results;
  const images = resources.map(resource => {
    const {width, height} = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    }
  })
    return {
      props: {
        images,
        nextCursor
      }
    }
  }

export default summary;

  
