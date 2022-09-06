import React, { useState } from 'react'
import Layout from './Layout'
import { useRouter } from 'next/router'


const services = () => {

  const sendToCameraPage = () => {
    router.push("/camera")
   }
 
   const router = useRouter();


  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);


  return (
    <Layout>
  <strong className="">Questionnaire</strong>
  <br/>
    <br/>

    <br/>
    <br/>

<div className=" ">
<h1>Pain</h1>

<input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      step="1"
      width="100%"
    />
    {value}
    
  <h1>Itching</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value1}
      onChange={(e) => setValue1(e.target.value)}
      step="1"
      width="100%"
    />
    {value1}

  <h1>Activity</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value2}
      onChange={(e) => setValue2(e.target.value)}
      step="1"
      width="100%"
    />
    {value2}

  <h1>Joint pain</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value3}
      onChange={(e) => setValue3(e.target.value)}
      step="1"
      width="100%"
    />
    {value3}

  <h1>Side effects</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value4}
      onChange={(e) => setValue4(e.target.value)}
      step="1"
      width="100%"
    />
    {value4}

  <h1>Adherence to therapy
</h1>

<input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value5}
      onChange={(e) => setValue5(e.target.value)}
      step="1"
      width="100%"
    />
    {value5}

  <h1>Hair loss</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={value6}
      onChange={(e) => setValue6(e.target.value)}
      step="1"
      width="100%"
    />
    {value6}
  

 

</div>
<br/>
<div>
<button onClick={sendToCameraPage} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next 
</button>
</div>
    </Layout>
  )
}

export default services
