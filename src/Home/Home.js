import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest, removeUserDetails, storeUserDetails, storeUserInfo } from "../Store/First/action";

function Home() {


  const First = createContext()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);

  return (
    <div>
      <First.Provider value={userData}>
        {
          isLoading ? "loading" : <div className="my-5">
            <h1 className="text-2xl font-medium text-center">Home</h1>
            <div className="mt-5">
              {Firs?.map((item, index) => (
                <div key={index} className="flex gap-2 items-center justify-center">
                  <p className="font-medium">{item?.id}.</p>
                  <p className="text-center">{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </First.Provider>
    </div>
  )
}

export default Home;
