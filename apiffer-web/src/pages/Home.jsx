import React from "react";
import "../style/Home/Home.css";
import avatar from "../assets/images/avatar.webp";
import bag from "../assets/images/bagvector.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
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
  );
}

export default Home;
