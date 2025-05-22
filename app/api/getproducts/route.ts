import { client } from "@/prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const products = await client.product.findMany({
      include: {
        reviews: true,
        Rating: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.error();
  }
};
