import { useState, createContext, ReactNode } from "react";

interface UserContextType {
    nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>;

}

export const UserContext = createContext<UserContextType>({
    nome:'',
    setNome: () => {}
})

interface userProviderProps{
    children : ReactNode; 
}

function userProvider({children} : userProviderProps){
    const [nome, setNome] = useState('');

    return(
        <UserContext.Provider value={{nome, setNome}}>
            {children}
        </UserContext.Provider>

    );

}

export default userProvider;