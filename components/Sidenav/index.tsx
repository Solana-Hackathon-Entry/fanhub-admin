"use client";
import React from "react";
import style from "./style.module.css";

export default function ({ children }: any) {
  return (
    <>
      <div className={style.toolbar}></div>
      <div className={style.container}>
        <div className={style.divider}></div>
        {children}
      </div>
    </>
  );
}
