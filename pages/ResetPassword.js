import Head from 'next/head'
import { useState } from "react"
import { useRouter } from "next/dist/client/router"
import auth from '../firebase'


function ResetPassword() {
  const [ email, setEmail] = useState("")
  const router = useRouter()
 

  const resetPassword = (e) => {
 e.preventDefault()
 auth.sendPasswordResetEmail(email)
 .then(() => {setEmail("")
}).catch(
  (e) => {alert(e)
  setEmail("")
})
  } 

  return (
    <div  style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: 420,
    }}>

    <Head>
        <title>ResetPassword</title>
    </Head>
    <header className="font-medium text-2xl p-6 bg-gray-100 rounded-2t-2xl ">Reset Password</header>
    <form className="shadow-lg p-6 rounded-2xl">
        <input style={{
            background: "#f1f1f1"
        }}
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 focus:outline-none mb-3 rounded-md"
        type="email" placeholder="Email" />
        <br />
       



<div className="text-gray-400 text-xs mb-3 ">
 <p> Once you type in your Email Id here. You will be sent a password reset link. Please check your <strong>inbox</strong> shortly.</p>
        <span onClick={( )=> router.push("/Login")} className="text-sm text-blue-500 hover:underline cursor-pointer"> Back to Login!</span>
       
        </div>
       <div className="flex justify-end"> 
       <input style={{
            background: "#f1f1f1"
        }} 
        onClick={resetPassword}
        type="submit"
       value="Reset Password"
       className="cursor-pointer p-3 shadow-lg rounded-md w-32 transition duration-200 hover:shadow-md ml-auto" />
    
    </div>
    </form>
     
    </div>
  )
}

export default ResetPassword