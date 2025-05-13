import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

type Props = {
  children: React.ReactNode;
};
const layout = async ({ children }: Props) => {
  const session = await getServerSession(options);
  if (session?.user) {
    return <div>{children}</div>;
  }
  return null;
};
export default layout;
