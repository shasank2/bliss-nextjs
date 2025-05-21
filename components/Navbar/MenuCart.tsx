import { useSidebarContext } from "@/context/sidebar-context";
import { IoIosLock, IoMdClose } from "react-icons/io";
import { Sheet, SheetContent } from "../ui/sheet";
import Image from "next/image";
import FancyButton from "../shared/FancyButton";

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
      <SheetContent side={"right"} className="p-0 flex flex-col h-full">
        <div className="flex flex-row-reverse justify-between items-center p-5 border-b border-gray-400 bg-[#8CD0E3]">
          <span className="text-3xl font-cinzel mx-auto">My Cart</span>
          <IoMdClose
            className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
            onClick={() => setIsMenuCartOpen(false)}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
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
        </div>

        <div className="flex justify-between items-center p-4 border-t bg-[#8CD0E3] border-gray-400">
          <div className="space-y-1">
            <div>Sub Total: $90</div>
            <div className="font-semibold text-lg">Total: $90</div>
          </div>
          <FancyButton
            className={`border bg-purple-gradient flex items-center gap-2 px-10 uppercase text-xl text-black font-semibold font-cera-stencil transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md active:scale-95`}
            onClick={() => {}}
          >
            <IoIosLock size={25} /> Checkout
          </FancyButton>
        </div>
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

        <div className="flex border border-black overflow-hidden text-xs font-semibold w-[80px]">
          <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 transition">
            –
          </button>
          <span className="w-8 h-6 flex items-center justify-center border-x border-black">
            {quantity}
          </span>
          <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 transition">
            +
          </button>
        </div>
      </div>
      <IoMdClose className="text-2xl cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 active:scale-95" />
    </div>
  );
};

export default MenuCart;
