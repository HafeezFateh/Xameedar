import { useState } from "react";
import Layout from "./layouts/Layout";
import { Link } from "react-router-dom";
function Home(){
  const [sell, setSell] = useState();

    return(
        <div>
            <Layout>
            <div id="hero" className="mx-5 my-7 ">
            <div className="mt-10 flex flex-col gap-2 lg:text-center ">
            <h1 className="text-4xl py-3 lg:text-5xl lg:mt-15  font-semibold bg-gradient-to-r from-stone-500 to-white bg-clip-text text-transparent">Buy and sell plots at minimum charges</h1>
            <p className="text-stone-400 text-xl lg:text-3xl">Buy & Sell Land with Trust and Transparency</p>
            </div>
            
            <div className="flex flex-col lg:items-center">
              <div className="group hover:-translate-y-1 shadow-xl  transition  bg-gradient-to-tl from-purple-950 via-stone-800 to-purple-900 p-[1px] rounded-xl w-fit mt-8">
                <div className=" bg-stone-900 flex items-center gap-2 rounded-xl  p-2 ">
                  <div className="w-[10px] h-[10px] border rounded-full bg-purple-500"></div>
                  <div className="text-slate-300"><span className="font-semibold">Buy Plots:</span> Check-In here </div>
                  <span className="material-symbols-outlined text-purple-700 group-hover:translate-x-2 px-3 transition">arrow_forward</span>
                </div>
              </div>

              
              <Link to="/sellplot">
              <div className="group hover:-translate-y-1 shadow-xl  transition  bg-gradient-to-tr from-amber-950 via-stone-800 to-amber-900 p-[1px] rounded-xl w-fit mt-5">
                <div className=" bg-stone-900 flex items-center gap-2 rounded-xl  p-2 ">
                    <div className="w-[10px] h-[10px] border rounded-full bg-amber-500"></div>
                    <div className="text-slate-300"><span className="font-semibold">Sell Plots:</span> Check-In here </div>
                  <span className="material-symbols-outlined text-amber-700 group-hover:translate-x-2 px-3 pl-15 transition ml-auto">arrow_forward</span>
                </div>
                
              </div>
              </Link>
              
              </div>
            
            
              </div>
         

          <div className="mx-5 mt-10 lg:text-center">
            <h1 className="text-lg  text-slate-300">Doesn't matter wheather you are MiddleclassName, Uppermiddle className, Millionaire or a MultiMillionaire.</h1>
            <p className=" text-purple-600 text-lg">We have options for you...</p>
          </div>

          <div className="bg-gradient-to-b from-stone-900 to-purple-950/10 h-[100px]  w-full text-white"></div>
          <div className="bg-purple-950/10 ">

            <div  id="services" className=" mx-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div  className=" bg-gradient-to-br rounded-xl from-purple-800 via-stone-800 shadow-xl to-purple-950 p-[1px] ">
                <div className="bg-stone-900 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:bg-gradient-to-br from-stone-900 via-purple-950/10 to-stone-900">
                  <img src="./residential.svg" alt="residential" className="h-[100px] w-[100px]"/>
                  <h1 className="text-xl text-slate-300 font-semibold">Residential lands</h1>
                </div>
              </div>
              <div className="bg-gradient-to-br rounded-xl from-purple-800 via-stone-800 shadow-2xl to-purple-950 p-[1px]">
                <div className="bg-stone-900 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:bg-gradient-to-br from-stone-900 via-purple-950/10 to-stone-900">
                  <img src="./commercial.svg" alt="" className="h-[100px] w-[100px]"/>
                  <h1 className="text-xl text-slate-300 font-semibold">Commercial lands</h1>
                </div>
              </div>
              <div className="bg-gradient-to-br rounded-xl from-purple-800 via-stone-800 shadow-xl to-purple-950 p-[1px]">
                <div className="bg-stone-900 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:bg-gradient-to-br from-stone-900 via-purple-950/10 to-stone-900">
                  <img src="./farming.svg" alt="" className="h-[100px] w-[100px]"/>
                  <h1 className="text-xl text-slate-300 font-semibold">Farming lands</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b  from-purple-950/10 to-stone-900 h-[150px] w-full text-white"></div>

          <div id="contactus" className="mx-5 mt-10 lg:mx-20">
            <h1 className="text-slate-300 text-2xl font-semibold lg:text-center">Have more queries? Let's talk!</h1>

            <h1 className="mt-10 text-slate-300 font-semibold text-3xl">Contact Us</h1>
            <div className="w-[40px] h-[2px] mt-1 mx-1 rounded-2xl bg-purple-500"></div>
            <form action="" className="mt-7 flex flex-col text-slate-300">
              <label for="" className="font-semibold text-lg">Name</label>
              <input type="text" className="  my-4 border border-purple-800 rounded-lg p-2" placeholder="Enter your good name"/>
              <label for="" className="font-semibold text-lg">Email</label>
              <input type="email" className="my-4 border border-purple-800 rounded-lg p-2" placeholder="Enter your Mail-Id"/>
              <label for="" className="font-semibold text-lg">Enquiry</label>
              <textarea type="text" className="mt-4 border border-purple-800 rounded-lg p-2" placeholder="Your message..."></textarea>
              <div className="my-7 flex justify-end">
                <input type="submit" className="px-15 py-1 font-semibold text-slate-300 bg-purple-950 shadow-xl rounded-lg hover:bg-purple-950/50"/>
              </div>
            </form>
          
          </div>
        </Layout>
    </div>


    )



}

export default Home;