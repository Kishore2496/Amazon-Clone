import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div>
      <div
        className="flex flex-col sm:flex-row items-center shadow-md bg-white
                    p-5 rounded-lg w-[85%]"
      >
        <div>
          {/* {PROD IMAGE } */}
          <div className="relative px-5 mx-8 h-60 w-40">
            <Image src={image} layout="fill" objectFit="contain" />
          </div>
        </div>

        {/* {PROD INFO} */}
        <div
          className="flex flex-col
        m-5 space-y-2"
        >
          <div
            className="font-semibold 
          text-md md:text-2xl line-clamp-2"
          >
            {" "}
            {title}
          </div>
          <div>
            {" "}
            <div className="flex">
              {Array({ rating })
                .fill()
                .map((_, i) => (
                  <StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
          <div className="text-sm text-gray-500 line-clamp-3">
            {" "}
            {description}
          </div>
          <div className="font-semibold text-xl ">
            {" "}
            <Currency quantity={price} currency="USD" />
          </div>
          <div>
            {hasPrime && (
              <div className="flex items-center space-x-2">
                <img
                  loading="lazy"
                  className="w-12"
                  src="https://links.papareact.com/fdw"
                  alt=""
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
            )}
          </div>
        </div>

        {/* {BUTTONS ON THE RIGHT} */}
        <div
          className=" flex flex-col space-y-2 my-auto
         sm:whitespace-nowrap whitespace-pre-wrap justify-self-end"
        >
          <button className="amz-button" onClick={addItemsToBasket}>
            Add to Basket
          </button>
          <button className="amz-button" onClick={removeItemFromBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
