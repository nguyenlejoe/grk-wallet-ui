'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import { Flex } from "@radix-ui/themes"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext } from "react"
import { WalletContext } from "@/lib/store"
import Link from "next/link"
import { TokenBalancesListView } from "@covalenthq/goldrush-kit"


export default function IndexPage() {
  const {walletAddress,  setWalletAddress } = useContext(WalletContext);

  return (
    <section className="container flex flex-col justify-center gap-6 md:py-10 h-[calc(100vh-150px)] items-center ">
      <Flex direction="column" gap="4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          GoldRush Wallet UI
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
        <Flex direction="column" gap="2">
          <Label htmlFor="email">Wallet Address</Label>
          <Input type="input" id="address" placeholder="Wallet Address" value={walletAddress} onChange={(e)=>{
            setWalletAddress(e.target.value)
          }}/>
        </Flex>
        <Link href="/activity">
          <Button disabled={walletAddress.length === 0}>
            Continue
          </Button>
        </Link>
        {/* <TokenBalancesListView
        chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
        ]}
        hide_small_balances
        address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
    /> */}
      </Flex>
      {/* <Flex gap="4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </Flex> */}
    </section>
  )
}
