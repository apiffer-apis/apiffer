import React from "react";
import "../style/Home/Home.css";
import avatar from "../assets/images/avatar.webp";
import bag from "../assets/images/bagvector.svg";
import { useNavigate } from "react-router-dom";
import chrome from "../assets/images/logos_chrome.svg"
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
        <div className="text w-40 z-50 absolute top-20  left-10">
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
         <div className="head">Heading</div>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         </div>
       </div>
       <div className="flex flex-row justify-around">
         <div className="heading w-1/3">
         <div className="head">Heading</div>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
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
