import Image from "next/image";

import { data } from "../../lib/data";

import LeftSideBar from "@/components/HomePage/LeftSideBar/LeftSideBar";
import CardsPage from "@/components/HomePage/CardsPage/CardsPage";
import RightSideBar from "@/components/HomePage/RightSideBar/RightSideBar";

export default function Home() {
  const userData = data;
  return (
    <div className="container mx-auto px-4 my-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className=" lg:col-span-2 order-2 lg:order-1">
        <LeftSideBar userData={userData}></LeftSideBar>
      </div>
      <div className=" lg:col-span-8 order-3 lg:order-2">
        <CardsPage userData={userData}></CardsPage>
      </div>
      <div className=" lg:col-span-2 order-1 lg:order-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
