'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { WalletContext } from "@/lib/store";
import {
  NFTWalletTokenListView,
  TokenBalancesListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const {walletAddress, setChains, chains, tableState, setTableState} = useContext(WalletContext);
  const [chain_names, setChainNames] = useState([]);
  const router = useRouter();

  useEffect(()=>{
    if(chains.length > 0){
      setChainNames(chains.map((o: { name: any; }) => o.name))
    }
  },[chains])

  useEffect(()=>{
    if(!walletAddress){
      router.push("/")
    }
  },[walletAddress])
  
  return (
    <Tabs defaultValue="wallet-balances" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="wallet-balances">Wallet balances</TabsTrigger>
        <TabsTrigger value="nft">NFTs</TabsTrigger>
        {/* <TabsTrigger value="transactions">Transactions</TabsTrigger> */}
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="wallet-balances">
        <TokenBalancesListView
          chain_names={chain_names}
          address={walletAddress}
        />
      </TabsContent>
      <TabsContent value="nft">
        <NFTWalletTokenListView
          address={walletAddress}
          chain_name="eth-mainnet"
        />
      </TabsContent>
      <TabsContent value="transactions">
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <AddressActivityListView 
        rowSelectionState={tableState} 
        address={walletAddress} 
        getAllRowSelection={(e: any)=>{
          setChains(e)
        }}
        getRowSelectionState={(e: any)=>{
          setTableState(e)
        }}
        />
      </TabsContent>
    </Tabs>
  )
}
