import React, {useRef, useEffect, useState} from 'react'
import Layout from "./Layout"

const camera = () => {

 const videoRef = useRef(null)
 const photoRef = useRef(null)

const [hasPhoto, setHasPhoto] = useState(false);
//const [hasPhoto, setHasPhoto] = useState(false);


const getVideo = () => {
 navigator.mediaDevices
    .getUserMedia({
       video: { width: 190, height: 1080}
    })
    .then(stream => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
 .catch(err => {
  console.error(err)
 });


}

const takePhoto = () => {
  const width = 414;
  const height = width / (16/9);

  let video = videoRef.current;
  let photo = photoRef.current;

  photo.with = width;
  photo.height = height;

  let ctx = photo.getContext('2d')
  ctx.drawImage(video, 0, 0, width, height);
  setHasPhoto(true);

}

const closePhoto = () => {
  let photo = photoRef.current;
  let ctx = photo.getContext('2d')
  ctx.clearRect(0, 0, photo.width, photo.height);
  setHasPhoto(false);

}
 

useEffect(() => {
  getVideo();
}, [videoRef]);


  return (
    <Layout >
      
<div className="  min-height: 100% position-relative h-100% ">
{/* app */}
<div className="  w-100% "> 
{/* camera */}
<video className="min-height: 100%" ref={videoRef} ></video>
<button onClick={takePhoto} className="position-absolute bottom-20px left-20px border-none outline-none appearance-none
p-8px 16px color-#FFF font-size-24px font-weight-700 hover:background-position-100%
">
  Snap
</button>

 
</div>
<div className={"min-height: 100% result position-fixed " + (hasPhoto ? 'hasPhoto' : '')}>
<canvas className="w-100% h-100" ref={photoRef}></canvas>
  <button onClick={closePhoto} className="min-height: 100% cursor-pointer p-3 shadow-lg rounded-md w-24 transition duration-200 hover:shadow-md ml-auto">Close</button>
</div>

</div>


    </Layout>
  )
}

export default camera