import React, {useRef, useEffect, useState} from 'react'
import Layout from "./Layout"
import Webcam from "react-webcam";
import { useRouter } from 'next/router'


const videoConstraints = {
  width: 540,
  height: 720,
  facingMode: "environment",
};



const camera = () => {



  const router = useRouter();

const sendTobackCameraPage = () => {st
  router.push("/backCamera")
 }
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
 
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);
 
  const onUserMedia = (e) => {
    console.log(e);
  };
  




 




  return (
    <Layout >
      <strong>Front picture</strong>

<Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
      />
      <div className="flex space-x-4 space-y-4">

      <button onClick={capturePhoto} class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">Capture</button> 
      <button onClick={() => setUrl(null)} 
      class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
      >Refresh</button>
<button  onClick={sendTobackCameraPage} 
      class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
      >Next </button>
      </div>
     
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
     




    </Layout>
  )
}

export default camera
