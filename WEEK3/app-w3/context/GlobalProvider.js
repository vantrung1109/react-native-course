import {createContext, useContext, useState, useEffect} from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setUser(res)
                    setIsLogged(true)
                }
                else {
                    setIsLogged(false)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setIsLogged(false)
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider 
            value={{
                isLogged,
                setIsLogged,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider