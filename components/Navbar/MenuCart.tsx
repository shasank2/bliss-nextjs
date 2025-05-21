import { useSidebarContext } from "@/context/sidebar-context";
import { IoMdClose } from "react-icons/io";
import { Sheet, SheetContent } from "../ui/sheet";

type Props = {};
const MenuCart = (props: Props) => {
  const { setIsMenuCartOpen, isMenuCartOpen } = useSidebarContext();

  return (
    <Sheet open={isMenuCartOpen} onOpenChange={setIsMenuCartOpen}>
      <SheetContent side={"right"} className="p-0">
        <div className="flex justify-between items-center p-5 bg-[#8cd0e3]">
           <div className="flex-grow"></div> 
          <span className="text-6xl font-bold font-cera-stencil text-stone-50">
            bliss
          </span>
          <IoMdClose
            className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
            onClick={() => setIsMenuCartOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MenuCart;
