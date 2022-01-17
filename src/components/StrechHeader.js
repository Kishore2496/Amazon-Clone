import { SearchIcon } from "@heroicons/react/outline";

function StrechHeader() {
  return (
    <div
      className="flex bg-amazon_blue items-center justify-center
                       cursor-pointer h-12"
    >
      <input
        className="p-3 h-3/4 w-[90%] rounded-l-md focus:outline-none px-4"
        type="text"
        placeholder="Search Amazon"
      />{" "}
      {/*w-6*/}
      <SearchIcon className="h-9 p-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500" />
    </div>
  );
}

export default StrechHeader;
