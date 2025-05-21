import { useSidebarContext } from "@/context/sidebar-context";
import { IoMdClose } from "react-icons/io";
import { Sheet, SheetContent } from "../ui/sheet";
import Image from "next/image";

type Props = {};

const cartItems = [
  {
    id: 1,
    name: "lemon & sage face wash",
    size: "17 oz",
    price: 23,
    quantity: 55,
    image: "/lemonsag.avif",
  },
  {
    id: 2,
    name: "cucumber face mask",
    size: "10 oz",
    price: 18,
    quantity: 1,
    image: "/cucumberFm.webp",
  },
];

const MenuCart = (props: Props) => {
  const { setIsMenuCartOpen, isMenuCartOpen } = useSidebarContext();

  return (
    <Sheet open={isMenuCartOpen} onOpenChange={setIsMenuCartOpen}>
      <SheetContent side={"right"} className="p-0">
        <div className="flex flex-row-reverse justify-between items-center p-5 border-b border-gray-400">
          <span className="text-3xl font-cinzel mx-auto">My Cart</span>
          <IoMdClose
            className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
            onClick={() => setIsMenuCartOpen(false)}
          />
        </div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </SheetContent>
    </Sheet>
  );
};

// CartItem Component
const CartItem = ({
  name,
  size,
  price,
  quantity,
  image,
}: {
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <Image src={image} width={120} height={120} alt={name} />

      <div className="flex flex-col justify-between h-full space-y-2">
        <div className="font-archer capitalize">{name}</div>
        <div className="text-gray-500">{size}</div>
        <div className="font-semibold">${price}</div>

        <div className="flex space-x-2 border border-black w-20">
          <button className="w-5 h-6 flex items-center justify-center text-base">
            -
          </button>
          <span className="w-8 h-6 flex items-center justify-center text-xs font-semibold border-x border-black">
            {quantity}
          </span>
          <button className="w-5 h-6 flex items-center justify-center text-base">
            +
          </button>
        </div>
      </div>

      <IoMdClose className="text-2xl cursor-pointer" />
    </div>
  );
};

export default MenuCart;
