import React, { useState, useEffect } from "react";
import Sidenav from "../components/sidenav/Sidenav";
import "../style/Dashboard/Dashboard.css";
import { BsStopFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { setApitesturl } from "../store/features/testApi";
import { removeApi } from "../store/features/apilist";
import { setNoti } from "../store/features/siteControll";
import axios from 'axios'

function Dashboard() {
  const dispatch = useDispatch()
  let apilistarr = useSelector((state) => state.apilist.apis);
  const apiarr = [...apilistarr]
  const apiurl = useSelector((state) => state.api.apiurl);
  const navigate = useNavigate();
  const reducer = useDispatch();



  const handelTest = (url) => {
    reducer(setApitesturl(url));
    console.log("Here");
    navigate("/httptest");
  };
  const handelstop = (path,index) =>{
    axios.get(`https://apiffer.ml/stop?endpoint=${path}`)
    dispatch(setNoti(
      {
        msg: "API Deleted",
        tout: 1500,
        vis: true,
      }
    ))
    reducer(removeApi(index))
  }
  return (
    <div className="flex justify-between flex-col md:flex-row hi-95">
      <div className="h-full  w-full flex flex-row">
        <div className="sidenav flex justify-center">
          <Sidenav />
        </div>
        <div className="dashbody p-5">
          <div className="heading-text">
            <p className="relative inline-block text-xl font-medium">
              List Of APIs
            </p>
          </div>
          {/* <div className="testarea mt-5 flex flex-row  items-center">
            <div className="urlbox flex flex-row">
              <div className="method master-bg-color p-2">
                <select name="" id="" className="methodselect text-center">
                  <option value="get" selected>
                    GET
                  </option>
                  <option value="post">POST</option>
                  <option value="put">PUT</option>
                </select>
              </div>
              <div className="url flex align-middle justify-center">
                <input
                  className="p-2 w-full apiurl "
                  type="text"
                  name=""
                  id=""
                  placeholder="API Url"
                />
              </div>
            </div>
            <div className="stop  api-operation master-bg-color p-2 mx-2 flex  justify-center flex-col items-center">
              <BsStopFill size={30} />
              <p className="p-0 m-0">Stop</p>
            </div>
            <div className="restart api-operation master-bg-color p-2 mx-2 flex  justify-center flex-col items-center">
              <VscDebugRestart size={30} />
              <p className="p-0 m-0">Restart</p>
            </div>
            <div className="apistat flex justify-center items-center">
              <div className="apiinfo apireqtime flex mx-5 justify-center flex-row items-center">
                <p className="mx-1 font-medium">Time : </p>
                <p className="mx-1 text-xs">
                  {Timer <= 60 ? Timer + " s" : (Timer / 60).toFixed() + " m"}
                </p>
              </div>
              <div className="apiinfo apireqcount flex mx-5 justify-center flex-row items-center">
                <p className="mx-1 font-medium">Req : </p>
                <p className="mx-1 text-xs"> 1.5k </p>
              </div>
            </div>
          </div> */}
          <div className="listapi pt-5">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    METHOD
                  </th>
                  <th scope="col" class="py-3 px-6">
                    URL
                  </th>
                  <th scope="col" class="py-3 px-6">
                    TEST
                  </th>
                  <th scope="col" class="py-3 px-6">
                    STOP
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiarr.map((api, idx) => {
                  return (
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium master-text-color whitespace-nowrap "
                      >
                        {api.method}
                      </th>
                      <td class="py-4 px-6">
                        <a
                          href={`https://apiffer.ml/cool-cat-apiffer/${api.path}`}
                          target="_blank"
                        >
                          {`https://apiffer.ml/cool-cat-apiffer/${api.path}`}
                        </a>
                      </td>
                      <td class="py-4 px-6">
                        <p
                          className="testbtn master-bg-color px-2 py-1 inline-block text-white rounded-lg"
                          onClick={() =>
                            handelTest(
                              `https://apiffer.ml/cool-cat-apiffer/${api.path}`
                            )
                          }
                        >
                          TEST
                        </p>
                      </td>
                      <td class="py-4 px-6">
                        <div className="stop  api-operation master-bg-color p-2 flex  justify-center flex-row items-center" onClick={()=>handelstop(api.path,idx)}>
                          <BsStopFill size={30} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {/* <tr class="bg-white border-b ">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
            </tr> */}
                {/* <tr class="bg-white ">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Accessories
                </td>
                <td class="py-4 px-6">
                    $99
                </td>
            </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
