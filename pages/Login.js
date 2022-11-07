import Head from 'next/head'
import { useState } from "react"
import auth from "../firebase"
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../pages/icons/logo.jpg'
import { useAuthState} from "react-firebase-hooks/auth"

export default function  Login () {

    const [ email, setEmail] = useState("")
    const [user, loading] = useAuthState(auth)
    const userName = user?.email

    console.log(userName,"email")

    const [ password, setPassword] = useState("")
    const router = useRouter()
    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(()=> {
            router.push("/home")

        }).catch((e) => alert(e))
    }


  return (
    <div  style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: 420,
    }}>
 <Image   src={logo} height={250} width={410}/>
    <Head>
        <title>Login</title>
    </Head>
    <header className="font-medium text-2xl p-6 bg-gray-100 rounded-2t-2xl ">Login</header>
    <form className="shadow-lg p-6 rounded-2xl">
        <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        
        style={{
            background: "#f1f1f1"
        }}
        className="w-full p-2 focus:outline-none mb-3 rounded-md"
        type={"text"} placeholder={"Email"} />
        <br />
        <input  
         value={password}
         onChange={e => setPassword(e.target.value)}
        
        style={{
            background: "#f1f1f1"
        }}
        className="w-full p-2 focus:outline-none mb-3 rounded-md"
        type={"password"} placeholder={"Password"}/>



<div className="flex items-center mt-4">

        <p className="text-sm"> 
        No Account ?? <span onClick={( )=> router.push("/Register")}className="text-blue-500 hover:underline cursor-pointer"> 
        Create one</span></p>
        <div className="flex-1"><p onClick={( )=> router.push("/ResetPassword")}className="text-blue-500 hover:underline cursor-pointer text-sm ml-20">
        Reset Password </p>


        </div> <br />
        </div>
       <div className="flex justify-end"> 
       <input
       onClick={login} style={{
            background: "#f1f1f1"
        }} type="submit"
       value="Login"
       className="cursor-pointer p-3 shadow-lg rounded-md w-20 transition duration-200 hover:shadow-md ml-auto" />
    
    </div>
    </form>
     
    </div>
  
  )
}

