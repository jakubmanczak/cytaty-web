"use client";
import { LoginNeeded } from "@/components/LoginNeeded";
import { Navigation } from "@/components/Navigation";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export default function EditorPanel() {
  const userctx = useContext(UserContext);
  return (
    <>
      <Navigation />
      {userctx?.user.loggedin ? (
        <>
          <div className="max-w-xl mx-auto py-4">
            <p className="text-center">to jest panel edytorski</p>
          </div>
        </>
      ) : (
        <LoginNeeded />
      )}
    </>
  );
}
