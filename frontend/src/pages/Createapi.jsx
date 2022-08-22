import React, { useEffect, useState } from "react";
import "../style/Createapi/Createapi.css";
import Sidenav from "../components/sidenav/Sidenav";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { setNoti } from "../store/features/siteControll";
import { setApi } from "../store/features/apilist";

function Createapi() {
  const dispatch= useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let [Objstr, setObjstr] = useState(
    JSON.stringify(
      {
        name: "tyep:String",
        _id: "type:String",
        batchno: "type:Number",
      },
      undefined,
      4
    )
  );
  const apiid = JSON.parse(window.localStorage.getItem("apiffer"));

  const reqpostapi = (body) => {
    console.log(body)
    axios
      .post("https://api.apiffer.ml/create", body)
      .then((data) => {
        console.log(data);
        dispatch(setApi({
          path: data.data.endpoint,
          method:"GET"
        }))
        dispatch(
      setNoti({
        msg: "API Created ! Enjoy",
        tout: 2000,
        vis: true,
      })
    );
        let arr = []
        if(apiid)
        {
          arr=[...apiid.apis]
          arr.push(data.data);
          
          localStorage.setItem("apiffer", JSON.stringify({
            apis : arr,
          }));
         }
         else
         {
           console.log("created ")
           localStorage.setItem("apiffer", JSON.stringify({
             apis : [],
           }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    // console.log(data);
    reqpostapi( data);
  };

  return (
    <div className="flex justify-between flex-col md:flex-row hi-95">
      <div className="h-full  w-full flex flex-row">
        <div className="sidenav flex justify-center">
          <Sidenav />
        </div>
        <div className="dashbody p-5">
          <div className="heading-text">
            <p className="relative inline-block text-xl font-medium">
              Create APIs
            </p>
          </div>
          <div className="testarea mt-5 flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pathbox flex flex-row my-3">
                <div className="path p-2 flex justify-center items-center">
                  Path
                </div>
                <div className="path-dir">
                  <input
                    className="p-2 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="API path"
                    {...register("path", { required: true })}
                  />
                </div>
              </div>
              <div className="box flex flex-row my-3">
                <div className="path p-2 flex justify-center items-center">
                  Method
                </div>
                <div className="options flex justify-center items-center">
                  <div class="form-check mx-2 flex justify-center items-center">
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
                  <div class="form-check mx-2 flex justify-center items-center">
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
                  <div class="form-check mx-2 flex justify-center items-center">
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
              </div>
              <div className="box flex flex-row my-3">
                <div className="path p-2 flex justify-center items-center">
                  Schema
                </div>
                <div className="objectinp">
                  <textarea
                    className="objarea"
                    rows="10"
                    cols="50"
                    placeholder="Object here"
                    {...register("body", { required: true })}
                    placeholder={Objstr}
                  />
                </div>
              </div>
              <div className="box flex my-3  items-center">
                <div className="path"></div>
                <input
                  type="submit"
                  className="create-btn my-5 mr-10 master-bg-color px-3 py-2 inline-block"
                  value="Create"
                />
                <div className="status"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createapi;
