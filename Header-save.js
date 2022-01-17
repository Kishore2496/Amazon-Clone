import Image from "next/image";
import AmzLogo from "../styles/Amz_Logo.png";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={AmzLogo}
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div
          className="hidden sm:flex flex-grow items-center rounded-md
                      cursor-pointerh-10 bg-yellow-400 hover:bg-yellow-500"
        >
          <input
            className="p-3 h-full flex-grow 
                      flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />{" "}
          {/*w-6*/}
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* <div className="text-white flex items-center mx-10 flex-shrink">
          <div className="flex flex-col">
            <div className="text-sm">Hello, Kishore!</div>
            <div>Accounts &amp; Lists</div>
          </div>
          <div className="flex flex-col px-5">
            <div>
              Returns
              <div> &amp; Orders</div>
            </div>
          </div>
          <div className="flex items-end">
            <ShoppingCartIcon className="h-10" />
            <div>Basket</div>
          </div>
        </div> */}
        <div
          className="text-white flex items-center justify-center
                      text-xs space-x-6 mx-6 whitespace-nowrap"
        >
          <div className=" link">
            <p>Hello, Kishore</p>
            <p className="font-extrabold md:text-sm">Accounts &amp; Lists</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&amp; Orders</p>
          </div>
          <div className="relative flex items-center link">
            <span
              className="absolute top-0 right-0  md:right-10 rounded-full
             bg-yellow-400 text-center text-black h-4 w-4"
            >
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p
              className="font-extrabold md:text-sm hidden
             md:inline mt-2"
            >
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* {Bottom} */}
      <div
        className="flex items-center text-white
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
