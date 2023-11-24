import axios from "axios"

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
}
