import axios from "axios"
import { TokenServices } from "./tokenServices"

export class UserServices {
    static async registrationAsync(login, password) {
        try {
            const result = await axios.post("http://localhost:3333/api/registration", {
                login: login,
                password: password,
            })
            return result.data
        } catch (err) {
            console.log("error")
        }
    }

    static async authorizationAsync(login, password) {
        try {
            const result = await axios.post("http://localhost:3333/api/login", {
                login: login,
                password: password,
            })

            TokenServices.setAccessToken(result.data.access_token)

            return null
        } catch (err) {
            console.log("error")
        }
    }
}
