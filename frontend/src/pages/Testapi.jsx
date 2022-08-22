import React, { useState } from "react";
import Sidenav from "../components/sidenav/Sidenav";
import { setNoti } from "../store/features/siteControll";
import { useDispatch,useSelector } from "react-redux/es/exports";
import "../style/Testapi/Testapi.css";
import { useForm } from "react-hook-form";
import { setApitesturl } from "../store/features/testApi";
import axios from "axios";

function Testapi() {
  const [apiurl,setapiurl] = useState(useSelector((state)=>state.api.apiurl))

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [Outputtab, setOutputtab] = useState({
    response: true,
    header: false,
  });
  const [Objstr, setObjstr] = useState();
  const [Headerstr, setHeaderstr] = useState("");
  // const [apiBody, setapiBody] = useState("");
  const [Apidata, setApidata] = useState({
    statuscode: "",
    restime: "",
    size: "",
    data: "",
  });

  const onSubmit = (data) => {
    console.log(data);

    watch("method") === "post" ? reqpostapi(data.url,data.body) : reqgetapi(data.url);
    // dispatch(
      // setNoti({
      //   msg: "hello",
      //   tout: 2000,
      //   vis: true,
      // })
    // );
  };

  function roughSizeOfObject(object) {
    var objectList = [];

    var recurse = function (value) {
      var bytes = 0;

      if (typeof value === "boolean") {
        bytes = 4;
      } else if (typeof value === "string") {
        bytes = value.length * 2;
      } else if (typeof value === "number") {
        bytes = 8;
      } else if (
        typeof value === "object" &&
        objectList.indexOf(value) === -1
      ) {
        objectList[objectList.length] = value;

        for (let i in value) {
          bytes += 8; // an assumed existence overhead
          bytes += recurse(value[i]);
        }
      }

      return bytes;
    };

    return recurse(object);
  }
  const reqpostapi = (url, body) => {
    var startDate = new Date();
    axios
      .post(url, body)
      .then((data) => {
        var endDate = new Date();
        var resTime = endDate.getTime() - startDate.getTime() - 6;
        setApidata({
          ...Apidata,
          statuscode: data?.status,
          restime: resTime,
          size: roughSizeOfObject(data?.data),
        });
        setObjstr(JSON.stringify(data?.data, undefined, 4));
      })
      .catch((err) => {
        console.log(err);
        setApidata({ ...Apidata, statuscode: err?.response?.status });
        setObjstr(JSON.stringify(err, undefined, 4));
      });
  };
  

  const reqgetapi = (url) => {
    var startDate = new Date();
    axios
      .get(url)
      .then((data) => {
       
        
        console.log(data);
        var endDate = new Date();
        var resTime = endDate.getTime() - startDate.getTime() - 6;
        setApidata({
          ...Apidata,
          statuscode: data?.status,
          restime: resTime,
          size: roughSizeOfObject(data?.data),
        });
        setObjstr(JSON.stringify(data?.data, undefined, 4));
        setHeaderstr(JSON.stringify(data?.headers, undefined, 4));
      })
      .catch((err) => {
        console.log(err);
        setApidata({ ...Apidata, statuscode: err?.response?.status });
        setObjstr(JSON.stringify(err, undefined, 4));
      });
  };
  return (
    <div className="flex justify-between flex-col md:flex-row hi-95">
      <div className="h-full  w-full md:w-3/5  flex flex-row">
        <div className="sidenav w-7 flex justify-center">
          <Sidenav />
        </div>
        <div className="dashbody w-93 p-5">
          <div className="heading-text">
            <p className="relative inline-block text-xl font-medium">
              Test APIs
            </p>
          </div>
          <form
            className="testarea  mt-5 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-row ">
              <div className="testurl flex flex-row ">
                <div className="method w-5 master-bg-color p-2">
                  <select
                    name=""
                    id=""
                    className="methodselect"
                    {...register("method", { required: true })}
                  >
                    <option value="get" selected>
                      GET
                    </option>
                    <option value="post">POST</option>
                    <option value="put">PUT</option>
                  </select>
                </div>
                <div className="url flex justify-center align-middle">
                  <input
                    className="apiurl p-2 w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="API Url"
                    value={apiurl} 
                    {...register("url",{onChange : (e)=>setapiurl(e.target.value)}, { required: true })}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="test text-white master-bg-color p-2 mx-2 text-center block"
                value={"Send"}
              />
            </div>
            {watch("method") === "post" && (
              <div className="box flex flex-row my-3">
                <div className=" p-2">Body:</div>
                <div className="objectinp">
                  <textarea
                  {...register("body", { required: true })}
                    className="objarea"
                    rows="10"
                    cols="50"
                    placeholder="Body Content Here"
                  />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="testoutput h-full  w-full md:w-2/5  flex  items-center flex-col ">
        <div className="apistat flex justify-center items-center p-2">
          <div className="apiinfo apireqtime flex mx-5 justify-center flex-row items-center">
            <p className="mx-1 font-medium">Status : </p>
            <p className="mx-1 text-xs">
              {Apidata.statuscode ? Apidata.statuscode : null}
            </p>
          </div>
          <div className="apiinfo apireqtime flex mx-5 justify-center flex-row items-center">
            <p className="mx-1 font-medium">Time : </p>
            <p className="mx-1 text-xs">
              {Apidata.restime ? Apidata.restime + "ms" : null}
            </p>
          </div>
          <div className="apiinfo apireqcount flex mx-5 justify-center flex-row items-center">
            <p className="mx-1 font-medium">Size : </p>
            <p className="mx-1 text-xs">
              {" "}
              {Apidata.size ? Apidata.size + "byte" : null}{" "}
            </p>
          </div>
        </div>
        <div className="outputarea">
          <div className="typeoutput flex items-center">
            <li
              className={Outputtab.response ? "item active" : "item"}
              onClick={() => setOutputtab({ header: false, response: true })}
            >
              Responce
            </li>
            <li
              className={Outputtab.header ? "item active" : "item"}
              onClick={() => setOutputtab({ response: false, header: true })}
            >
              Header
            </li>
            {/* <li>Responce</li> */}
          </div>
          <div className="resoutput">
            <textarea
              name=""
              id=""
              value={Outputtab.response ? Objstr : Headerstr}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testapi;
