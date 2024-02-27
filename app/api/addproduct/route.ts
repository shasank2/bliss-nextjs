import { client } from "@/prisma/client"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const body = await req.json()
    const {title, description,category,style,store,size,inventory,color, price, images, userId} = body
    try {
        const product = await client.product.create({data:{title, description,category,style,store,size,inventory,color, price, images, userId}})
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.error()
    }
}