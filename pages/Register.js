import Head from 'next/head'
import { useState } from "react"
import { useRouter } from "next/dist/client/router"
import auth from "../firebase"
//import '@firebase/auth'


function Register() {

    const [ name, setName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const router = useRouter()
    const register = (e) => {
        e.preventDefault()
        if (name === "") {
            alert("You haven't given a name")
        } else {
            if (password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password).then((authenticatedUser) => {
            router.push("/Login")
                    authenticatedUser.user.updateProfile({
                        displayName: name
                    }) 
                })
                .catch((e) => {
                    alert(e.message)
                    setEmail("")
                    setPassword("")
                    setName("")
                    setConfirmPassword("")
                    setPassword("")
                })
            } else { 

              alert  ("The given password and the confirmed password are not the same")
             } 

        }
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
            <title>Register</title>
        </Head>
        <header className="font-medium text-2xl p-6 bg-gray-100 rounded-2t-2xl ">Register</header>
        <form className="shadow-lg p-6 rounded-2xl">
        <input value={name}
                onChange={e => setName(e.target.value)}

        style={{
                background: "#f1f1f1"
            }}
            className="w-full p-2 focus:outline-none mb-3 rounded-md"
            type="text" placeholder="Name" />
            <br />
            <input value={email}
                    onChange={e => setEmail(e.target.value)}

            style={{
                background: "#f1f1f1"
            }}
            className="w-full p-2 focus:outline-none mb-3 rounded-md"
            type="email" placeholder="Email" />
            <br />
            <input  value={password}
                    onChange={e => setPassword(e.target.value)}

            style={{
                background: "#f1f1f1"
            }}
            className="w-full p-2 focus:outline-none mb-3 rounded-md"
            type="password" placeholder="Password"/>
            <br />
            <input  value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    style={{
                background: "#f1f1f1"
            }}
            className="w-full p-2 focus:outline-none mb-3 rounded-md"
            type="password" placeholder="Confirm Password"/>
    
    
    
    <div className="flex items-center mt-4">
    
            <p className="text-sm"> Have an account?? <span  onClick={( )=> router.push("/Login")} className="text-blue-500 hover:underline cursor-pointer"> Login</span></p>
           
            </div>
           <div className="flex justify-end"> 
           <input 
           onClick={register}
           style={{
                background: "#f1f1f1"
            }}
            type="submit"
           value="Register"
           className="cursor-pointer p-3 shadow-lg rounded-md w-20 transition duration-200 hover:shadow-md ml-auto" />
        
        </div>
        </form>
         
        </div>
      
      )
    }
export default Register