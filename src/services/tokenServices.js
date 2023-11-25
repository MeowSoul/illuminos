import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

export class TokenServices {
    static parseToken(token) {
        const parsedToken = jwtDecode(token)

        if (!parsedToken) {
            return null
        }

        return parsedToken
    }

    static getAccessToken() {
        const token = Cookies.get("access_token")

        if (!token) {
            return null
        }

        return token
    }

    static setAccessToken(token) {
        Cookies.set("access_token", token)
    }
}
