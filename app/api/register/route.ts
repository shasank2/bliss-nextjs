import {client} from "../../../prisma/client"
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const body = await request.json()
    const {
        name,
        email,
        password
    } = body

    const hashedPassword = await bcrypt.hash(password,12)

    try{
        const user = await client.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
        return NextResponse.json(user)
    }catch{
        return NextResponse.error()
    }
}
