'use client'
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Flex } from "@radix-ui/themes"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function IndexPage() {
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
          <Input type="input" id="address" placeholder="Wallet Address" />
        </Flex>
        <Button>
          Continue
        </Button>
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
