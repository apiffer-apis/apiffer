/*global chrome*/
import React, { useEffect, useState } from "react";
import "./style/Home.css";
import Computer from "../assets/computer-landing.svg";
import Loader from "../assets/RollingLoader.svg";
import Settings from "../assets/settings-filled.svg";
import Report from "../assets/reports-filled.svg";
import Feed from "../assets/feed-filled.svg";
import { BsGlobe2 } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setApi } from "../store/features/apilist";
import axios from "axios";
import { setPath } from "../store/features/siteControll";
export default function Home() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const reqpostapi = (body) => {
    setCreateApiStatus(true)
    axios
      .post("https://api.apiffer.ml/create", body)
      .then((data) => {
        setCreateApiStatus(false)
        dispatch(setPath("api"))
        dispatch(
          setApi({
            path: data.data.endpoint,
            method: "GET",
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setCreateApiStatus(false)
      });
  };

  const [CreateApiStatus,setCreateApiStatus] = useState(false)
  const onSubmit = (data) => {
    reqpostapi(data);
  };
  function handlePath(path)
  {
    dispatch(setPath(path))
  }

  return (
    <div className="flex flex-col h-[600px] border border-red-500 items-center">
      <div className="pageTitle  h-[80px] flex justify-center items-center ">
        <h1 className="text-[35px] font-bold text-[1.8em]">
          Api<span className="text-orange">ffer .</span>
        </h1>
      </div>
      <div className="scanningArea flex flex-col">
        <div className="saIcon  m-auto  h-[100px]">
          <img src={Computer} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="scanUrlbar border  border-orange rounded-[10px] flex justify-between items-center w-[320px] overflow-hidden">
            <div className="urlBarico p-1 px-2">
              <BsGlobe2 className="text-orange" />
            </div>
            <div className="urlBarinput py-1 ">
              <input
                type="text"
                name=""
                className="text-[gray] text-[.9em]"
                placeholder="API path"
                    {...register("path", { required: true })}
              />
            </div>
            {/* <div className="urlBarscanbutton flex justify-center items-center bg-orange text-[white] p-1 cursor-pointer hover:bg-opacity-90">
            <BiSearchAlt2 className="" />
            <p>Create</p>
          </div> */}
          </div>
          <div className="optionMethods flex my-2">
            <div class="form-check mx-0  flex justify-center items-center">
              <input
                class="form-check-input m-1"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="get"
                {...register("method", { required: true })}
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                GET
              </label>
            </div>
            <div class="form-check mx-1 flex justify-center items-center">
              <input
                class="form-check-input m-1"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="post"
                {...register("method", { required: true })}
              />
              <label class="form-check-label" for="exampleRadios2">
                POST
              </label>
            </div>
            <div class="form-check mx-1 flex justify-center items-center">
              <input
                class="form-check-input m-1"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="put"
                {...register("method", { required: true })}
              />
              <label class="form-check-label" for="exampleRadios3">
                PUT
              </label>
            </div>
          </div>
          <div className="objectinp">
            <textarea
              className="objarea bg-gray border border-1 border-orange rounded-lg p-2"
              rows="8"
              cols="37"
              placeholder="Object here"
              {...register("body", { required: true })}
            />
          </div>
          <div className="flex my-3 justify-center items-center">
            <div className="subBtn flex justify-center items-center text-white bg-orange my-5  px-3 py-2 rounded-full  w-[200px] ">
              <input
                type="submit"
                value="Create"
                className="cursor-pointer"
              />
              <p className="status">{CreateApiStatus && <img src={Loader} className="h-5 w-5"/> }</p>
            </div>
          </div>
        </form>
      <div className="appOptions flex w-[300px] justify-evenly py-0 m-auto ">
            <li className="flex flex-col items-center text-[.8em] cursor-pointer hover:scale-[1.1]" onClick={()=>handlePath("api")}>
                <img src={Report} alt="" className="h-8 w-8"/>
                <p>API List</p>
            </li>
            <li className="flex flex-col items-center text-[.8em] cursor-pointer hover:scale-[1.1]">
                <img src={Feed} alt="" className="h-8 w-8"/>
                <p>Feed</p>
            </li>
            <li className="flex flex-col items-center text-[.8em] cursor-pointer hover:scale-[1.1]">
                <img src={Settings} alt="" className="h-8 w-8"/>
                <p>Settings</p>
            </li>
        </div>
      </div>
    </div>
  );
}
