import React from 'react'
import Layout from './Layout'
import axios from "axios";

const baseURL = "https://358264285632138:2R0_Pe2UeUPdH12lgfZ4y_hyBk4@api.cloudinary.com/v1_1/drj1izokp/resources/image";


function report() {
    const [post, setPost] = React.useState(null);


    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;
  return (
    <div>
        <Layout><h1>{post.url}</h1>
     </Layout></div>
  )
}

export default report