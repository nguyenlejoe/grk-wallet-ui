'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";

export default function Dashboard() {
  return (
    <Tabs defaultValue="wallet-balances" className="pt-8 w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="wallet-balances">Wallet balances</TabsTrigger>
        <TabsTrigger value="nft">NFTs</TabsTrigger>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="wallet-balances">
      <TokenBalancesListView
          chain_names={[
              "eth-mainnet",
              "matic-mainnet",
              "bsc-mainnet",
              "avalanche-mainnet",
              "optimism-mainnet",
          ]}
          hide_small_balances
          address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
      />
      </TabsContent>
      <TabsContent value="nft">
        <NFTWalletTokenListView
          address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
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
        <AddressActivityListView address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"/>
      </TabsContent>
    </Tabs>
  )
}
