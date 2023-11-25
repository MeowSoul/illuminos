import { createContext, useEffect, useState } from "react"
import { TokenServices } from "../services/tokenServices"

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = TokenServices.getAccessToken()

        if (!token) {
            return setUser(null)
        }

        const parsedUser = TokenServices.parseToken(token)

        setUser(parsedUser)
    }, [])

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
