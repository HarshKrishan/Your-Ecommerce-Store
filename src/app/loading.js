"use client"

import ReactLoading from 'react-loading';
export default function Loading (){
  return (
    <div className="flex justify-center items-center z-10 w-full bg-black h-screen">
      
      <ReactLoading className="" type={"spokes"} color={"#808080"} height={100} width={100} />
    </div>
  );
}

