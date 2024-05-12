import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <SignUp path="/agency/sign-up" routing="path" fallbackRedirectUrl="/" />
  );
};

export default Page;
