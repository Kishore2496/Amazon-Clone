import Image from "next/image";
import AmzLogo from "../styles/Amz_Logo.png";
import { MenuIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import StrechHeader from "./StrechHeader";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const [mobileView, setMobileView] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setMobileView(false);
      else setMobileView(true);
    });
  }

  return (
    <header className="">
      <div className=" flex flex-col">
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src={AmzLogo}
              onClick={() => router.push("/")}
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer "
            />
          </div>

          {!mobileView && (
            <div className="flex-grow">
              <StrechHeader />
            </div>
          )}
          <div
            className="text-white flex items-center justify-center
                      text-xs space-x-6 mx-6 whitespace-nowrap"
          >
            <div
              onClick={!session ? signIn : signOut}
              className="hidden sm:inline link"
            >
              <p>{session ? ` Hello, ${session.user.name}` : "Sign In"}</p>
              <p className="font-extrabold md:text-sm">Accounts &amp; Lists</p>
            </div>
            <div className="hidden sm:inline link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">&amp; Orders</p>
            </div>
            <div className="relative flex items-center link">
              <span
                className="absolute top-0 right-0  md:right-10 rounded-full
             bg-yellow-400 text-center text-black h-4 w-4"
              >
                {items.length}
              </span>

              <ShoppingCartIcon
                className="h-10"
                onClick={() => router.push("/checkout")}
              />
              <p
                className="font-extrabold md:text-sm hidden
             md:inline mt-2"
              >
                Basket
              </p>
            </div>
          </div>
        </div>

        <div className="flex-grow" id="small">
          {mobileView && <StrechHeader />}
        </div>
      </div>
      {/* {Bottom} */}
      <div
        className="flex items-center text-white flex-shrink-0
       bg-amazon_blue-light text-sm space-x-3 p-2 pl-6 
       overflow-x-auto whitespace-nowrap md:overflow-x-auto"
      >
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link ">Electronics</p>
        <p className="link ">Food &amp; Grocery</p>
        <p className="link ">Prime</p>
        <p className="link ">Buy Again</p>
        <p className="link ">Shopper Toolkit</p>
        <p className="link ">Health &amp; Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
