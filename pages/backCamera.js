import React, {useRef, useEffect, useState} from 'react'
import Layout from "./Layout"
import Webcam from "react-webcam";
import { useRouter } from 'next/router'
import Summary from "./summary.js"




const cameraWidth = 720;
const cameraHeight = 720;
const aspectRatio = cameraWidth / cameraHeight;

const videoConstraints = {
  width: {
    min: cameraWidth
  },
  height: {
    min: cameraHeight
  },
  aspectRatio
};

const backCamera = ( ) =>{

  const sendToSummary = () => {
    router.push("/summary")
   }
 
   const router = useRouter();

    const [cldData, setCldData] = useState();
    const webcamRef = useRef();


    const [image, setImage] = useState();
    const [imageSrc, setImageSrc] = useState();

    function handleCaptureScreenshot() {
        const image = webcamRef.current.getScreenshot();
        setImageSrc(image);
      }
      
      function handleOnReset() {
        setImageSrc(undefined)
      }


      useEffect(() => {
        if ( !imageSrc ) return;
      
        (async function run() {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify({
              image: imageSrc
            })
          }).then(r => r.json());
          console.log('response', response);
        })();
      }, [imageSrc]);



return (
<Layout>
  Plague Picture
{imageSrc &&<img src={imageSrc} />}
{!imageSrc &&   <Webcam ref={webcamRef} videoConstraints={videoConstraints}/>}
<br/>
<div classname="">
<button       class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
onClick={handleCaptureScreenshot}>
Capture photo
</button>
{" "}{" "}
<button       class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
onClick={handleOnReset} color="red">
Reset
</button>
{" "}
<button  onClick={sendToSummary} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Next 
</button>
</div>
</Layout>
)
}

export default backCamera

// const videoConstraints = {
//   width: 540,
//   height: 720,
//   facingMode: "user",
// };

// const backCamera = () => {
// const router = useRouter();

// const sendTobackCameraPage = () => {
//   router.push("/cloud")
//  }
//   const webcamRef = useRef(null);
//   const [url, setUrl] = React.useState(null);
 
//   const capturePhoto = React.useCallback(async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setUrl(imageSrc);
//   }, [webcamRef]);
 
//   const onUserMedia = (e) => {
//     console.log(e);
//   };
  


//   return (
//     <Layout >
//       <strong>Plague photo
// </strong>

// <Webcam
//         ref={webcamRef}
//         audio={false}
//         screenshotFormat="image/png"
//         videoConstraints={videoConstraints}
//         onUserMedia={onUserMedia}
//         mirrored={true}
//       />
//       <div className="flex space-x-4 space-y-4">

//       <button onClick={capturePhoto} class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">Capture</button> 
//       <button onClick={() => setUrl(null)} 
//       class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
//       >Refresh</button>
// <button  onClick={sendTobackCameraPage} 
//       class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
//       >Next </button>
//       </div>
     
//       {url && (
//         <div>
//           <img src={url} alt="Screenshot" 
          
//           />
                

//         </div>


//       )}

     




//     </Layout>
//   )
// }

// export default backCamera

