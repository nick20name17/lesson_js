import { createContext, useContext, useState } from 'react'

const UserNameContext = createContext(null)

export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState('John Doe')

    return (
        <UserNameContext.Provider
            value={{
                userName,
                setUserName,
            }}>
            {children}
        </UserNameContext.Provider>
    )
}

export const useUserName = () => {
    const context = useContext(UserNameContext)

    if (context === null) {
        throw new Error('useUserName must be used within a UserNameProvider')
    }

    return context
}
