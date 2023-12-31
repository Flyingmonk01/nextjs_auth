import jwt from "jsonwebtoken";
import { NextRequest } from "next/server"


export function getDataFromToken(request: NextRequest){
    try {
        const encodedToken = request.cookies.get("token")?.value || '';
        const decodedToken: any = jwt.verify(encodedToken, process.env.TOKEN_SECRET!);

        return decodedToken.id;
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
    }
}