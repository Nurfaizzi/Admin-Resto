import React, { useState } from "react";
import logonavbar from "../../assets/logonavbar.png";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
const CompLogin = () => {
    const navigate =useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputEmpty,setInputEmpty] = useState(false)
    const [error,setError] =useState(false)
    const [loginSucces,setLoginSucces] = useState(false)
    const [loading,setLoading] = useState(false)
  
    const handleChangeUsername = (e) => {
      setUsername(e.target.value);
      setInputEmpty(false)
      setError(false)
      setLoginSucces(false)
    };
  
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
      setInputEmpty(false)
      setError(false)
      setLoginSucces(false)
    };
  
    const handleLogin = async () => {
      try {
        if(username === "" || password === ""){
          setInputEmpty(true)
          return
        }
        const bodyPayLoad = {
          username: username,
          password: password,
        };
        const res = await axios.post(
          `https://api.mudoapi.tech/login`,
          bodyPayLoad
        );
        localStorage.setItem("accessToken",res.data.data.token) 
        localStorage.setItem("role",res.data.data.roleName)
        setLoginSucces(true)
        setLoading(true)
        setTimeout(() => {
          navigate("/menu")
        }, 2000);
      } catch (err) {
        setError(true)
      }
    };



  return (
    <div className="flex  justify-center m-auto items-center border border-red h-screen">
    <div className="flex-columns gap-8 items-center justify-center mt-12 p-6 bg-white rounded-2xl shadow-2xl overflow-hidden md:max-w-2xl">
      <div>
        <img
          src={logonavbar}
          width={350}
          height={100}
          className="items-center justify-center flex pb-8"
        />
          {inputEmpty ? <p className=" text-red-500 justify-center items-center flex">Name and Password Must Be Filled In!!!</p> : null}
        {error? <p className="text-red-500 justify-center items-center flex">Name and Password Not Registered!!!</p> : null}
        {loginSucces? <p className="text-green-500 justify-center items-center flex">Login Succes!!!</p> : null}
      </div>
      <form className="flex-col gap-8 pb-8" >
        <div>
          <label
            
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="text"
              onChange={handleChangeUsername}
              value={username}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
           
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChangePassword}
              value={password}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
       
        </div>
      </form>
      <button onClick={handleLogin}     className=" mt-8 justify-center flex items-center text-white bg-yellow-500 border border-yellow-500 px-3 py-2.5 w-full rounded-xl " disabled={loading}>
        {loading ? "Loading..." : "Sign in"}
        </button>
    </div>
  </div>
  )
}

export default CompLogin