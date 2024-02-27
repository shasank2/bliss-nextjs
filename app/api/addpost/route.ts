import { client } from "@/prisma/client"
import { NextResponse } from "next/server"


export const POST = async (req:Request) =>{
    const body = await req.json()
    const {title, authorId,updatedAt,content,published } = body
    try {
        const post = await client.post.create({data:{ title, authorId }})
        return NextResponse.json(post)
        return
    } catch (error) {
        return NextResponse.error()
    }
}