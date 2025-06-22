'use client';

import { Brush, FlaskConical, HeartPlus, Home, UserRound } from "lucide-react";
import Link from "next/link";
import LoginModal from "../Modals/LoginModal";
import { useState } from "react";

const NavbarMobileBottom: React.FC = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex gap-3 justify-around text-black">
      {/* Home  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Link className="flex flex-col justify-center items-center" href={"/"}>
          {" "}
          {/* ICON */}
          <div className="text-sm">
            <Home size={20} strokeWidth={1.25}></Home>
          </div>
          <div className="text-sm">HOME</div>
        </Link>
      </div>

      {/* Test  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Link 
          className="flex flex-col justify-center items-center"
          href={"/lab-test"} prefetch={true}
        >
          {" "}
          {/* ICON */}
          {/* ICON */}
          <div className="text-sm">
            <FlaskConical size={20} strokeWidth={1.25} />
          </div>
          <div className="text-sm">Lab Test</div>
        </Link>
      </div>

      {/* Beauty  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          className="flex flex-col justify-center items-center"
          href={"/beauty"} prefetch={true}
        >
          {" "}
          {/* ICON */}
          {/* ICON */}
          <div className="text-sm">
            <Brush size={20} strokeWidth={1.25} />
          </div>
          <div className="text-sm">Beauty</div>
        </Link>
      </div>

      {/* Health Care  */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          className="flex flex-col justify-center items-center"
          href={"/healthcare"} prefetch={true}
        >
          {/* ICON */}
          <div className="text-sm">
            <HeartPlus size={20} strokeWidth={1.25} />
          </div>

          <div className="text-sm">Health Care</div>
        </Link>
      </div>

      {/* Account  */}
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer" onClick={() => setIsOpen(true)}>
        {/* ICON */}
        <div className="text-sm">
          <UserRound size={20} strokeWidth={1.25} />
        </div>

        <div className="text-sm">Account</div>
        {/* Login Modal */}
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default NavbarMobileBottom;
