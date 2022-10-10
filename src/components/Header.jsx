import React from "react";
import Back from "../icons/Back";
import Settings from "../icons/Settings";
import Level from "./Level";

function Header() {
  return (
    <header className="w-full py-5 bg-header-bg flex flex-col items-center space-y-6 relative">
      <h1 className="text-md md:text-3xl font-bold text-white">
        Choose a survey to earn virtual currency
      </h1>
      <div className="flex w-full justify-between px-6">
        <Back />
        <Level />
        <Settings />
      </div>
    </header>
  );
}

export default Header;
