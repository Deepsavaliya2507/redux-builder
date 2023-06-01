import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest } from "../Store/First/action";

function Home() {


  const dispatch = useDispatch();

  const { isLoading, homePageData } = useSelector((Store) => ({
    isLoading: Store?.First?.loading,
    homePageData: Store?.First?.homePageData,
  }));

  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);

  return (
    <div>
      <>
        {
          isLoading ? "loading" : <div className="my-5">
            <h1 className="text-2xl font-medium text-center">Home</h1>
            <div className="mt-5">
              {homePageData?.map((item, index) => (
                <div key={index} className="flex gap-2 items-center justify-center">
                  <p className="font-medium">{item.id}.</p>
                  <p className="text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </>
    </div>
  )
}

export default Home;
