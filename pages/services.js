import React from 'react'
import Layout from './Layout'

const services = () => {
  return (
    <Layout>
  <strong className="">Dermatologic Assessment</strong>
  <br/>
    <br/>

    <br/>
    <br/>

<div className=" ">
<h1>Etching</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"  />

  <h1>Drk skin</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  <h1>Thickened skin</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"  />

  <h1>Bleeding where the involved skin is scratched</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  <h1>Stress level</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  <h1>Reaction</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  <h1>Hair loss</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  <h1>Etching</h1>

  <input className="w-full h-4 rounded bg-gray-400" type="range"   />

  {/* <h1>Etching</h1>
  <input className="w-full h-4 rounded bg-gray-400" type="range" min="1" max="100" value="50" class="slider"  /> */}

</div>
<br/>
<div>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next
</button>
</div>
    </Layout>
  )
}

