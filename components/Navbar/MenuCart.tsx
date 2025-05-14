import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useSidebarContext } from "@/context/sidebarContext";

type Props = {};
const MenuCart = (props: Props) => {
  const { isMenuCartOpen } = useSidebarContext();

  return (
    <Sidebar side={"right"} open={isMenuCartOpen} >
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
export default MenuCart;
