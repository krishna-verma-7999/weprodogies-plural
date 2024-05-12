import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <SignIn path="/agency/sign-in" routing="path" fallbackRedirectUrl="/" />
  );
};

export default Page;
