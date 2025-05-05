import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { increment } from '@/store/slices/counterSlice';
import { addProduct } from '@/store/slices/cartSlice';
import { addToWishList, removeFromWishList } from '@/store/slices/wishListSlice';
import { useRouter } from 'next/navigation';
import useWishlistStore from '@/store/wishlistStore';
import useCartStore from '@/store/cartStore';
import { Heart, IndianRupee } from 'lucide-react';
const Card = ({product}) => {
    // const [selected, setSelected] = useState(false);
    // const router = useRouter()
    // const { product } = props;
    // const dispatch = useDispatch();
    
    // const addToCart = (payload) => {
    //     dispatch(addProduct(payload));
    //     dispatch(increment());
    // }

    // const likeProduct = (payload) => {
    //   dispatch(addToWishList(payload));
    // }

    // const dislikeProduct = (payload) => {
    //   dispatch(removeFromWishList(payload));
    // }
    // const handleClick = (product) => {
    //     // console.log(product);
    //     router.push(`/product_detail/${product.id}`);
    // }
    // // console.log(product.images)

    const router = useRouter();
    const { addProduct, removeProduct, products } = useWishlistStore();
      const { addToCart } = useCartStore();
      const isInWishlist = products.some((curr) => curr.id == product.id);
    
      const handleHeartClick = () => {
        if (isInWishlist) {
          removeProduct(product.id);
          // setSelected(false);
        } else {
          addProduct(product);
          // setSelected(true);
        }
      };
    
      const handleCartClick = () => {
        addToCart(product);
      };


      const handleCardClick = (sku) => {
        router.push("/products/" + sku);
      };
  return (
    // <div
    //   key={product.id}
    //   className="border-2 rounded-md shadow-md p-2 flex justify-center flex-col hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer relative m-2"
    // >
    //   {selected ? (
    //     <div>
    //       <Image
    //         width="28"
    //         height="28"
    //         src="https://img.icons8.com/color/32/filled-like.png"
    //         alt="fav"
    //         className="hover:cursor-pointer min-w-fit absolute top-5 right-5"
    //         onClick={() => {
    //           setSelected(!selected);
    //           dislikeProduct(product.id);
    //         }}
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <Image
    //         width="28"
    //         height="28"
    //         src="https://img.icons8.com/windows/32/like--v1.png"
    //         alt="fav"
    //         className="hover:cursor-pointer min-w-fit  absolute top-5 right-5"
    //         onClick={() => {
    //           setSelected(!selected);
    //           likeProduct(product);
    //         }}
    //       />
    //     </div>
    //   )}

    //   <div className="" onClick={() => handleClick(product)}>
    //     <Image
    //       className="mx-auto hover:scale-110 transform transition duration-500 ease-in-out my-10"
    //       src={product.thumbnail}
    //       alt={product.title}
    //       width={150}
    //       height={190}
    //     />

    //     <h1 className="font-bold text-xl">{product.title}</h1>
    //     <p className="text-sm font-sans">
    //       {product.description.substring(0, 150) + "..."}
    //     </p>
    //   </div>
    //   <div className="flex justify-between mt-10 flex-col sm:flex-row">
    //     <p className="text-xl font-bold  md:absolute md:bottom-0 m-2">${product.price}</p>
    //     <button
    //       className="bg-blue-500 hover:bg-blue-800 text-white font-bold p-2 rounded active:bg-blue-300 md:absolute md:bottom-0 md:right-0 m-2"
    //       onClick={() => addToCart(product)}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>

    <div
      className="rounded-md overflow-hidden bg-black hover:cursor-pointer relative group"
      key={product.id}
      onClick={() => handleCardClick(product.sku)}
    >
      <div className=" aspect-square overflow-hidden">
        <Image
          src={product.thumbnail}
          alt="logo"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl truncate">{product.title}</h3>
        <p className="font-light text-gray-200">{product.category}</p>
        <div className="font-bold mt-2 flex items-center">
          <span className="flex items-center">
            <IndianRupee className="h-4 w-4"></IndianRupee>
            {product.price}
          </span>
          {product.onSale && (
            <span className="text-gray-200 pl-2 line-through font-normal flex items-center">
              <IndianRupee className="h-4 w-4"></IndianRupee>
              {product.discountedPrice}
            </span>
          )}
        </div>
        <div className="flex text-black gap-2 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCartClick();
            }}
            className=" w-full px-4 py-2 text-sm bg-slate-200 rounded flex justify-center items-center"
          >
            Add to Cart
          </button>
          <button
            href="#"
            className={`shrink-0 p-2 rounded border border-gray-50`}
            onClick={(e) => {
              e.stopPropagation();
              handleHeartClick();
            }}
          >
            <Heart
              className={`${isInWishlist ? "text-red-500" : "text-white"}`}
              fill={`${isInWishlist ? "red" : "black"}`}
            />
          </button>
        </div>
      </div>
      {/* <Link
        href={`/products/${product.slug}`}
        className="absolute inset-0 group"
      >
        <span className="sr-only">View Product</span>
      </Link> */}
    </div>
  );
}

export default Card