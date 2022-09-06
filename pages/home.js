import React from 'react'
import Image from 'next/image'
import picture from '../public/picture.webp'
import Layout from './Layout'


function home() {
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
    <p>
      <br/>
    Find the closest Urgent Care to you.
    View health related articles and content and much more. </p>
    <br/>
    <br/>
    
    
    <div>
      <h1>Home remedies for dermatitis</h1>
      <strong><a href="https://www.medicalnewstoday.com/articles/323493#home-remedies"> Click here</a></strong>
    
      <h1>Home remedies for psorasis</h1>
      <strong><a href="https://www.healthline.com/health/psoriasis/moderate-to-severe/8-home-remedies-for-psoriasis-do-they-work#1.-Salt-baths"> Click here</a></strong>
      
    
    
    </div></div>
    </Layout>
  )
}

export default home
