import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useRouter } from 'next/router'
import firebase from "firebase/app"
import 'firebase/firestore'
import {
  collection,addDoc,query,getDocs
} from "firebase/firestore";
import { db} from "../firebase";

const services = () => {

  


 
const sendData = async () => {
await addDoc(collection(db,"questionnaire"),{
  pain: pain,
  itching: itching,
activity: activity,
jointpain: jointpain,
sideeffects: sideeffects,
therapy: therapy,
hairloss: hairloss,

}).then(() => {
  read();
  setValue("");
  setValue1("");
  setValue2("");
  setValue3("");
  setValue4("");
  setValue5("");
  setValue6(""); 
});
};


//  const sendData = () => {
// try {
//   firebase
//   .firestore()
//   .collection('questionnaire')
//   .doc('my_doc')
//   .set({
//     activity: 10,
//       hairloss: hairloss,
//       itching: itching,
//       jointpain: jointpain,
//       pain: pain,
//       sideeffects: sideeffects,
//       therapy: therapy,

//   })
//   .then(alert('changes have been updated'))
// } catch (error) {
// console.log(error);
//   alert(error)
// }
//  }


  

  const sendToCameraPage = () => {
    router.push("/cloud")
   }
 
   const router = useRouter();


  const [pain, setValue] = useState(0);
  console.log('pain',pain);
  const [itching, setValue1] = useState(0);
  console.log('itching',itching);
  const [activity, setValue2] = useState(0);
  console.log('activity',activity);
  const [jointpain, setValue3] = useState(0);
  console.log('joint pain',jointpain);
  const [sideeffects, setValue4] = useState(0);
  console.log('side effects',sideeffects);
  const [therapy, setValue5] = useState(0);
  console.log('therapy',therapy);
  const [hairloss, setValue6] = useState(0);
  console.log('hair loss',hairloss);
 

  return (
    <Layout>
  <strong className="">Questionnaire</strong>

    

   

<div className=" ">
  <h1>1. Over the last week, how painful has your skin been? </h1>
<h1>Pain</h1>

<input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={pain}
      onChange={(e) => setValue(e.target.value)}
      step="1"
      width="100%"
    />
    {pain}
    <h1>2. Over the last week, how itchy has your skin been? </h1>

  <h1>Itching</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={itching}
      onChange={(e) => setValue1(e.target.value)}
      step="1"
      width="100%"
    />
    {itching}
    <h1></h1>

  <h1>Activity</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={activity}
      onChange={(e) => setValue2(e.target.value)}
      step="1"
      width="100%"
    />
    {activity}
    <h1>4. Have you ever had joint pain in the last week? </h1>

  <h1>Joint pain</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={jointpain}
      onChange={(e) => setValue3(e.target.value)}
      step="1"
      width="100%"
    />
    {jointpain}
    <h1> </h1>

  <h1>Side effects</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={sideeffects}
      onChange={(e) => setValue4(e.target.value)}
      step="1"
      width="100%"
    />
    {sideeffects}
    <h1>6. How often are you taking the therapy?</h1>

  <h1>Adherence to therapy
</h1>

<input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={therapy}
      onChange={(e) => setValue5(e.target.value)}
      step="1"
      width="100%"
    />
    {therapy}
    <h1>7. Have you ever had hair loss in the last week? </h1>

  <h1>Hair loss</h1>

  <input className="w-full h-4 rounded bg-gray-400"
      type="range"
      min="0"
      max="100"
      value={hairloss}
      onChange={(e) => setValue6(e.target.value)}
      step="1"
      width="100%"
    />
    {hairloss}
  

 

</div>

<div>
<button onClick={sendToCameraPage} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Next 
</button>
<button onClick={sendData}  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Send</button>


</div>

    </Layout>
  )
}

export default services
