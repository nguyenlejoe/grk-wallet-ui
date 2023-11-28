'use client'
import { Button } from "@/components/ui/button";
import { WalletContext } from "@/lib/store";
import {
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Activity() {
  const {walletAddress, setChains, chains} = useContext(WalletContext);
  const router = useRouter();

  useEffect(()=>{
    if(!walletAddress){
      router.push("/")
    }
  },[walletAddress])
  
  return (
    <Flex direction="column" gap="4" className="w-full">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Chain Selection
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Please select chains to view your wallet.
      </p>
      <AddressActivityListView address={walletAddress} onChangeSelect={(e: any)=>{
        setChains(e)
      }}/>
      <Link href="/dashboard" className="w-full">
        <Button disabled={chains.length === 0}>Continue</Button>
      </Link>
    </Flex>
  )
}
