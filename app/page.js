"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "@/app/Components/navbar";
import { useEffect } from "react";

import App from "@/app/Components/app";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  });

  return (
    <>
      <BasicExample />

      <App />

 
    </>
  );
}
