import React from "react";
import { FunFooter } from "@components";

const FunLayout = ({ children, pathname }) => {
  return (
    <div>
      {children}
      <FunFooter pathname={pathname} />
    </div>
  );
};

export default FunLayout;
