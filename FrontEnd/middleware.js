import { withAuth } from 'next-auth/middleware'
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server'

export default withAuth(
    function middleware(req){
         return NextResponse.rewrite(new URL("/", req.url))
    },{
    callbacks: {
         authorized({token}){
          return token === null    
          }
        },
    },
);

export const config = {
    matcher: ["/admin", "/client/profile", "/bussines/dashboard", "/client/profile"]
};