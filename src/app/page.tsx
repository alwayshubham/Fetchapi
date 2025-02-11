"use client"
import Link from "next/link"


export default function Home() {
  
  return (
  
    <div>
      <h1>welcome to my page</h1>
      <div className="flex text-center ">
        

        <Link rel="stylesheet" href="/SignIn" className="mt-14">
          go to login page
        </Link>
        <Link rel="stylesheet" href="/SignUp" className="m-14">
          go to register page
        </Link>
      </div>
    </div>
  );
};