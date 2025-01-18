'use client';

import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { useAuth } from "./context/AuthContext";
import SignIn from "./(public)/auth/signin/page";

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return <SignIn />
  }
  
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
