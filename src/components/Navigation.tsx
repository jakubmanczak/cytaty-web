"use client";
import Link from "next/link";
import Image from "next/image";
import { IconSearch } from "@/icons/Search";
import { IconUser } from "@/icons/User";
import { useContext, useState } from "react";
import { IconChevronDown } from "@/icons/ChevronDown";
import { IconLayout } from "@/icons/Layout";
import { IconLogOut } from "@/icons/LogOut";
import { IconSliders } from "@/icons/Sliders";
import { IconChevronUp } from "@/icons/ChevronUp";
import { UserContext } from "@/contexts/UserContext";

const Navigation = () => {
  const userctx = useContext(UserContext);
  const iconsize: number = 24;
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userPanelOpen, setUserPanelOpen] = useState<boolean>(false);
  return (
    <nav className="flex flex-row shadow-md bg-slate-50">
      <Link href="/" className="flex flex-row px-4 mr-auto hover:bg-slate-200">
        <Image
          src="/zsklgbt.png"
          alt="tęczowe logo zsk"
          className="mr-4 object-contain transition hover:animate-spin"
          width={64}
          height={64}
        />
        <div className="flex flex-col py-4">
          <p className="font-bold text-xl">Cytaty 5C {"(2019-2024)"}</p>
          <p className="font-extralight">{"„Mamy na Panią teczkę...”"}</p>
        </div>
      </Link>
      <Link
        href="/szukaj"
        className="px-6 flex flex-row items-center gap-2 justify-center border-slate-200 border-l hover:bg-slate-200"
      >
        <IconSearch />
        <p className="hidden lg:block">Wyszukiwanie szczegółowe</p>
      </Link>
      {userctx?.user.loggedin ? (
        <>
          <div className="relative">
            <button
              className="pl-3 pr-10 h-full flex flex-row items-center min-w-[220px] gap-2 justify-left border-slate-200 border-l hover:bg-slate-200"
              onClick={() => {
                setUserPanelOpen(!userPanelOpen);
              }}
            >
              <div className="text-slate-500">
                {userPanelOpen ? <IconChevronUp /> : <IconChevronDown />}
              </div>
              <div className="flex flex-row justify-center items-center text-slate-50 rounded-full bg-violet-600 bg-gradient-to-tr from-violet-700 to-blue-600 w-8 h-8">
                <IconUser />
              </div>
              {/* USERNAME */}
              <p className="font-semibold">username</p>
            </button>
            {userPanelOpen ? (
              <div className="absolute right-0 shadow-md w-full bg-slate-50">
                <Link
                  href="/panel-edytorski"
                  className="flex flex-row items-center w-full py-3 pl-6 gap-6 border-slate-200 border-t hover:bg-slate-200"
                >
                  <IconLayout />
                  <p>Panel edytorski</p>
                </Link>
                <Link
                  href="/ustawienia-konta"
                  className="flex flex-row items-center w-full py-3 pl-6 gap-6 border-slate-200 border-t hover:bg-slate-200"
                >
                  <IconSliders />
                  <p>Ustawienia konta</p>
                </Link>
                <button
                  className="flex flex-row items-center w-full py-3 pl-6 gap-6 border-slate-200 border-t hover:bg-slate-200"
                  onClick={() => {
                    userctx.setUser({ loggedin: false });
                    setUserPanelOpen(false);
                  }}
                >
                  <IconLogOut />
                  <p>Wyloguj się</p>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <>
          <Link
            href="/zaloguj-sie"
            // onClick={() => {
            //   userctx?.setUser({ ...userctx.user, loggedin: true });
            // }}
            className="
              px-6 flex flex-row items-center gap-2 justify-center border-slate-200 border-l hover:bg-slate-200
            "
          >
            <IconUser />
            <p className="hidden lg:block">Zaloguj się</p>
          </Link>
        </>
      )}
    </nav>
  );
};

export { Navigation };
