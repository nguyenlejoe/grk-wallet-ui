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
  TokenTransfersListView
} from "@covalenthq/goldrush-kit";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const {walletAddress, setChains, chains, tableState, setTableState} = useContext(WalletContext);
  const [chain_names, setChainNames] = useState([]);
  const [contractAddress, setContractAddress] = useState("")
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
        {!contractAddress 
        ?
        <TokenBalancesListView
        chain_names={chain_names}
        address={walletAddress}
        onTransferClick={(e: SetStateAction<string>)=>{
          setContractAddress(e)
        }}
      />
        :
        <Flex direction="column" gap="2">
          <TokenTransfersListView
          chain_name="eth-mainnet"
          address={walletAddress}
          contract_address={contractAddress}
        />
        <div>
          <Button onClick={()=>{
            setContractAddress("")
          }}>Back to balance view</Button>
        </div>
        </Flex>

        }

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
