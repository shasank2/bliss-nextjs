import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useSidebarContext } from "@/context/sidebarContext";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {};
const HamburgerMenu = (props: Props) => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useSidebarContext();
  return (
    <Sidebar open={isHamburgerMenuOpen}>
      <SidebarHeader className="bg-[#8cd0e3] flex flex-row items-center justify-between px-5">
        <span className=" text-6xl font-bold font-cera-stencil text-stone-50">
          bliss
        </span>
        <IoMdClose
          className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-110"
          onClick={() => setIsHamburgerMenuOpen(false)}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <div className="px-4 pt-2 space-y-4 font-archer text-xl text-stone-800">
          {[
            { href: "/all-products", label: "All Products" },
            { href: "/best-selling", label: "Best Selling" },
            {
              label: "Sets & Kits",
              content: "Explore all curated skincare kits for every need.",
            },
            {
              label: "Accessories",
              content: "Shop tools, bags, and other self-care accessories.",
            },
          ].map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className="block px-3 py-2 rounded hover:bg-stone-100 transition-all duration-500 ease-out transform opacity-0 translate-x-[-10px] animate-slide-in"
                style={{
                  animationDelay: `${index * 300}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger
                    className="px-3 py-2 rounded hover:bg-stone-100 transition-all duration-500 ease-out transform opacity-0 translate-x-[-10px] animate-slide-in"
                    style={{
                      animationDelay: `${index * 300}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pr-3 py-2 text-base text-stone-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </div>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
export default HamburgerMenu;
