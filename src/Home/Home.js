import React, { createContext , useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest, removeUserDetails, storeUserDetails, storeUserInfo } from "../Store/First/action";

function Home() {

    // const First = createContext()
    // const dispatch = "https://jsonplaceholder.typicode.com/todos/1";

    // const addData = () => {
    
    //     let data = {
    //       name: "Deep Savaliya",
    //       contact: 1234567890,
    //       age: 17,
    //       email : "deepsavaliya@gamil.com" ,
    //       address: "I can't give you.",
    //     }
    
    //     dispatch((data))
    //   }

    //   const Delete = () => {
    //     dispatch(())
    //   }

    const First = createContext()
    const dispatch = "https://jsonplaceholder.typicode.com/todos/1";

  const { isLoading, Firs, userData } = useSelector((store) => ({
    isLoading: store?.home?.loading,
    Firs: store?.home?.Firs,
    userData: store?.home?.userInfomation
  }));

  const addData = () => {
    
    let data = {
        name: "Deep Savaliya",
        contact: 1234567890,
        age: 17,
        email : "deepsavaliya@gamil.com" ,
        address: "I can't give you.",
    }

    dispatch(storeUserDetails(data))
  }
  
  const Delete = () => {
    dispatch(removeUserDetails())
  }


  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);

  return (
    <div>
      <First.Provider value={userData}>
    {
      isLoading ? "loading" : <div className="my-5">
      <h1 className="text-2xl font-medium text-center">Home</h1>

      <button onClick={addData}>Click to add data in redux</button>

      <button onClick={Delete}>Remove Data redux</button>

      <p>{ userData?.name || 'wait...' }</p>

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
