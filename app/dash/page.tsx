"use client";
import Header from "../components/Header"
import { useState, useEffect } from "react";
import FacultyDashboard from "../components/FacultyDashboard"
export default function Dash()
{
    const[showSplash, setshowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowSplash(false);
        }, 1000)
        return () => clearTimeout(timer);
    },[]);
    return(
        
        <div>
            {showSplash && (
                <div className="h-screen w-screen bg-white flex flex-col items-center justify-center text-center overflow-hidden fixed">
                    <h1 className="text-[100px] bg-gradient-to-r from-purple-500  via-yellow-300 to-pink-500 bg-clip-text text-transparent font-thin relative z-10">Welcome to CITADEL</h1>
                </div>
            )}
            <div className={`${showSplash ? "opacity-0" : "opacity-100"} transition-opacity duration-1000`}>
                <Header className = {``}/>
               
                <FacultyDashboard />
            </div>
        </div>
    )
}