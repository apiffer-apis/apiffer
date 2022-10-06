import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { removeApi } from '../store/features/apilist';
import { setPath } from '../store/features/siteControll';
import {AiOutlineArrowLeft,AiOutlineDelete} from "react-icons/ai";

export default function Apilist() {
    const dispatch = useDispatch()
  let apilistarr = useSelector((state) => state.apilist.apis);
  const apiarr = [...apilistarr]
  


  const handelstop = (path,index) =>{
    axios.get(`https://apiffer.ml/stop?endpoint=${path}`)
    dispatch(removeApi(index))
  }
function handleBack()
{
dispatch(setPath("home"))
}

  return (
    <div className="flex flex-col h-[600px] border border-red-500 items-center">
        <div className="navbar w-full p-2 bg-orange text-white cursor-pointer">
           <div className="backBtn float-left flex justify-center items-center" onClick={handleBack}>
            <AiOutlineArrowLeft/>
            <p className='mx-1 text-[.9em] font-medium'>Home</p> 
           </div>
        </div>
         <div className="listapi pt-5 overflow-y-scroll w-full ">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700  uppercase bg-gray-50  ">
                <tr className=' '>
                  <th scope="col" class="p-3 w-[80px]">
                    METHOD
                  </th>
                  <th scope="col" class="p-3 text-left w-[280px]">
                    URL
                  </th>
                  <th scope="col" class="p-3 text-center w-[40px]">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiarr.map((api, idx) => {
                  return (
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="py-4 px-3 font-medium master-text-color whitespace-nowrap text-center "
                      >
                        {api.method}
                      </th>
                      <td class="py-4 px-3">
                        <a
                          href={`https://apiffer.ml/cool-cat-apiffer/${api.path}`}
                          target="_blank"
                        >
                          {`https://apiffer.ml/cool-cat-apiffer/${api.path}`}
                        </a>
                      </td>
                      <td class="py-4 px-3">
                        <div className="stop cursor-pointer text-center  api-operation master-bg-color p-2 flex  justify-center flex-row items-center" onClick={()=>handelstop(api.path,idx)}>
                          {/* <BsStopFill size={30} /> */}
                          <AiOutlineDelete size={20}/>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    </div>
  )
}
