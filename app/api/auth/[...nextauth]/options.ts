import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { client } from "@/prisma/client";
import bcrypt from "bcrypt"
import axios from "axios"


export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text', placeholder: 'your email' },
                password: { label: 'password', type: 'password', placeholder: 'your password' }
            },
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentails')
                }
                const user = await client.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                console.log(user)
                if (!user) {
                    throw new Error('Invalid credentails')
                }
                // const isCorrectedPassword = await bcrypt.compare(credentials.password, user.password)
                const isCorrectedPassword = credentials.password === user.password
                if (!isCorrectedPassword) {
                    throw new Error('Invalid credentails')
                }
                return user
            }
        })
    ],
    pages: {
        signIn: '/signin',
        // error:'/signin',
        // signOut:'/'
    },
    callbacks: {
        redirect: async ({ url, baseUrl }) => {
            return 'http://localhost:3001';
        },
        session: async ({ session, token, user }) => {
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id
            }
            return token
        }
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development'
}

