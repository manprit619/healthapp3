import React from 'react'
import Layout from "./Layout"
import { useRouter } from 'next/router'


const disease = () => {
  const sendToServices = () => {
    router.push("/services")
   }
 
   const router = useRouter();


  return (
    <Layout>
        
   
       <strong>Dermatitis</strong> 
<br/>
<p className='text-sm'> Dermatitis is a general term that describes a common skin irritation. It has many causes and forms and usually involves itchy, dry skin or a rash. Or it might cause the skin to blister, ooze, crust or flake off. Three common types of this condition are atopic dermatitis (eczema), seborrheic dermatitis and contact dermatitis.

Dermatitis isn't contagious, but it can make you feel uncomfortable and self-conscious. Moisturizing regularly helps control the symptoms. Treatment may also include medicated ointments, creams and shampoos className='text-sm'
  
  </p>

<br/>

<strong>Symptoms</strong>
<p className='text-sm'>Each type of dermatitis tends to occur on a different part of your body. Signs and symptoms may include:

Itchiness (pruritus)
Dry skin
Rash on swollen skin that varies in color depending on your skin color
Blisters, perhaps with oozing and crusting
Flaking skin (dandruff)
Thickened skin
Bumps in hair follicles</p>
<br/>

<strong>When to see a doctor</strong>
<br/>  <p className='text-sm'>

See your doctor if:

<li>You're so uncomfortable that you're losing sleep or are distracted from your daily routines</li>
<li>Your skin becomes painful</li>
<li>You suspect that your skin is infected</li>
<li>You've tried self-care steps but your signs and symptoms persist</li>
</p>

<div className="object-fill h-90 w-40">

  <img src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/03/Psoriasis_1300_slide-1.jpg?w=1155" alt=""/>

</div>
    
    <div>

  
   
    
    </div>
    
    <div>
      <br/>
<button  onClick={sendToServices} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next 
</button>
</div></Layout>
  )
}

export default disease