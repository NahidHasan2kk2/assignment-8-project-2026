import Image from "next/image";
import LeftSideBar from "../components/HomePage/LeftSideBar/LeftSideBar";
import CardsPage from "../components/HomePage/CardsPage/CardsPage";
import RightSideBar from "../components/HomePage/RightSideBar/RightSideBar";
import { data } from "../lib/data";
import { use } from "react";

export default function Home() {
  const userData = data;
  return (
    <div className="container mx-auto px-4 my-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className=" lg:col-span-2">
        <LeftSideBar userData={userData}></LeftSideBar>
      </div>
      <div className=" lg:col-span-8">
        <CardsPage userData={userData}></CardsPage>
      </div>
      <div className="bg-blue-200  lg:col-span-2">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
