import { useRef, useState, useEffect } from 'react';
import Layout from './Layout'
import Webcam from 'react-webcam';
import { useRouter } from 'next/router'





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

    const cloud = ( ) =>{

      const sendToSummary = () => {
        router.push("/backCamera")
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
      Full Body Picture
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

export default cloud