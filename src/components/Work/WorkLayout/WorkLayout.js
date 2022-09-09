import React from "react";
import { WorkFooter } from "@components";

export default function WorkLayout({ children, pathname }) {
  return (
    <>
      {children}
      <WorkFooter pathname={pathname} />
    </>
  );
}
