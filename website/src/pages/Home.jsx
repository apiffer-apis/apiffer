import React from "react";
import "../style/Home/Home.css";
import avatar from "../assets/images/avatar.webp";
import bag from "../assets/images/bagvector.svg";
import chrome from "../assets/images/logos_chrome.svg"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-evenly ">
    <div className="flex justify-between flex-col md:flex-row hi-95">
      <div className="h-full  w-full md:w-1/2 hidden md:block ">
        <div className="avatar absolute bottom-8 left-0 z-50 w-50">
          <img src={avatar} className="h-3/5 w-3/5" alt="cartoon_avatar" />
        </div>
        <div className="background absolute bottom-0 left-0 ">
          <img src={bag} className="h-3/4 w-3/4" alt="background" />
        </div>
        <div className="text w-40 z-50 absolute top-60  left-10">
          <p className="text-5xl land-txt">Yes You are on the Right Place</p>
        </div>
      </div>
      <div className="h-full  w-full md:w-1/2  flex justify-center items-center ">
        <div className="start-area flex flex-col w-50 ">
          <div className="textarea">
            <div className="text my-3">
              <p className="text-4xl font-medium master-text-color">
                Create API With Us
              </p>
            </div>
          </div>
          <div className="btnarea">
            <div className="startweb my-3" onClick={()=>navigate('/dashboard')}>
              <p className="text-lg web-start-btn px-4 py-2 text-center">
              WEB APP
              </p>
            </div>
            <div className="or">
              OR
            </div>
            <div className="startweb my-3" onClick={()=>navigate('#')}>
              <div className="flex justify-evenly text-lg ext-start-btn px-4 py-2 text-center">
              <img src={chrome} alt="logo" />
              Chrome Extension
              </div>
            </div>
            {/* <span className="or">OR</span>
            <div className="startvs my-3">
              <p className="text-lg vs-start-btn px-4 py-2 text-center">
                Vs Code
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col details justify-evenly">
       <div className="flex flex-row justify-around">
        <div className="getapi w-1/4 flex justify-center">
         <button className="getapi-btn w-4/5">Get Api</button>
        </div>
         <div className="heading w-1/3">
         <div className="head">What is apiffer?</div>
         Apiffer is an platform which we have created where someone who has little or no knowledge about Backend can easily and quickly create APIs hassle free
         </div>
       </div>
       <div className="flex flex-row justify-around">
         <div className="heading w-1/3">
         <div className="head">Our inspiration</div>
         We at apiffer have seen many people  try to make dynamic web apps without knowing any backend or API knowledge. What they do is they try to use the APIs mentioned in the tutorial they're following but most of them don't work or have rate limitations. So we tried to create a platform where you can quickly create APIs without any backend knowledge
         </div>
         <div className="getapi w-1/4 flex justify-center align-middle">
         <button className="getapi-btn">GET API</button>
         </div>
       </div>
    </div>
    </div>
    
  );
}

export default Home;
