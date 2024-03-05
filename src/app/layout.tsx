"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import "./globals.css";
import "./prismjs.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };


import SideNavbar from "@/components/partials/navbar/sideNavbar/SideNavbar";
import { useState } from "react";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    console.log(isSidebarOpen)
	return (
		<html lang="en">
			<body className={inter.className}>
                <SideNavbar 
                    setIsSidebarOpen={setIsSidebarOpen} 
                    className={`${isSidebarOpen?"translate-x-[0%]":"-translate-x-full"}  transition-transform duration-200 w-64 fixed top-0 bottom-0`}
                />
                <div className={`${isSidebarOpen?"md:pl-64":"md:pl-0"} transition-[padding] duration-200`}>
                    <div onClick={()=>setIsSidebarOpen((pre:boolean)=>!pre)}>toggle</div>
                    <Breadcrumb/>
                    {children}
                </div>
            </body>
		</html>
	);
}
