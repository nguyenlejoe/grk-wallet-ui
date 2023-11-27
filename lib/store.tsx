import type { ReactNode } from "react";
import { createContext, useState } from "react";

interface WalletContextType {
    walletAddress: string
    setWalletAddress: Function
    chains: any
    setChains: Function
}


export const WalletContext = createContext<WalletContextType>(
    {} as WalletContextType
);

interface WalletProviderProps {
   children: ReactNode
}


export const WalletProvider: React.FC<WalletProviderProps>= ({children}) => {
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [chains, setChains] = useState<[]>([]);


    return (
        <WalletContext.Provider value={{ walletAddress, setWalletAddress, chains, setChains}}>
            {children}
        </WalletContext.Provider>
    );
};

