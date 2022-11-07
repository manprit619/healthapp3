import React from 'react'
import Image from 'next/image'
import picture from '../public/picture.png'
import Layout from './Layout'
import { useRouter } from 'next/router'


const  home = () => {

  const sendToDisease = () => {
    router.push("/disease")
   }
 
   const router = useRouter();
  return (
    
    <Layout>
      
    <div><h1>Welcome to my app</h1>
<br/>
   <Image 
    src={picture}
    alt="Picture of the author"
    
    /> 
    <br/>
    <strong>Features include:</strong>
    <p className='text-sm'>
      <br/>
    Find the closest Urgent Care to you.
    View health related articles and content and much more. </p>
    <br/>
    <br/>
    
    
    <div>
      <h1 className='text-sm'>Home remedies for dermatitis</h1>
      <strong><a href="https://www.medicalnewstoday.com/articles/323493#home-remedies"> Click here</a></strong>
    
      <h1 className='text-sm'>Home remedies for psorasis</h1>
      <strong><a href="https://www.healthline.com/health/psoriasis/moderate-to-severe/8-home-remedies-for-psoriasis-do-they-work#1.-Salt-baths"> Click here</a></strong>
      
    
    
    </div></div>
    <div>
<button  onClick={sendToDisease} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next 
</button>
</div>
    </Layout>
    
  )
}

export default home
