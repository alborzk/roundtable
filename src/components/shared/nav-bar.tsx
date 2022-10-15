import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { SearchPalette } from "./search-palette";

interface NavBarProps {
  username: string;
}

const NavBar = ({ username }: NavBarProps): JSX.Element => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showSearch && (
        <SearchPalette
          username={username}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
      )}
      <div className="sticky right-[44%] bottom-4 flex flex-row items-center gap-12 mx-auto">
        <div className="flex w-full items-center space-x-4">
          <button
            className="h-14 w-14 shadow-lg rounded-full border border-blue-600 bg-blue-600"
            onClick={() => setShowSearch(true)}
          >
            <SearchIcon className="w-7 h-7 mx-auto text-white" />
          </button>
          <button className="h-14 w-14 shadow-lg rounded-full border border-blue-600 bg-blue-600">
            <ShuffleIcon className="w-7 h-7 mx-auto text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export { NavBar };
