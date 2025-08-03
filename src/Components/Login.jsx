import React,{useState} from 'react'
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
import { auth,AuthProvider } from '../config/firebase';
const Login = () => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const signin=async ()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,pass);
        }
        catch(err){
            console.log(err);
        }
    }
    const signIn=async()=>{
        try{
            const result=await signInWithPopup(auth,AuthProvider)
            console.log(result?.user?.displayName)
        }
        catch(err){
            console.log(err);
        }
    }
    const logout=async()=>{
        try{
            await signOut(auth);
            console.log("user logged out");
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='enter password' onChange={(e)=>setPass(e.target.value)} name="" id="" />
        <br />
        <button onClick={signin}>Login</button>
        <br />
        <br />
        <button onClick={signIn}>Sign-In with Google</button>
        <br />
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Login