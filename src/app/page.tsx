import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Alchemy from "../../lib/alchemy";
import Version from "../../lib/version";

export default function Home() {
  return (
    <div className="w-dvw min-h-dvh flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-primary to-background">
      <h1 className="text-3xl font-noto-sans">{Version.toString(Alchemy.VERSION)}</h1>
      <div className="flex flex-row justify-center">
        <Button className="flex flex-row gap-1 rounded-r-none">Host</Button>
        <Input type="text" className="rounded-none bg-background text-center" placeholder="ABC?DEF"/>
        <Button className="flex flex-row gap-1 rounded-l-none">Join</Button>
      </div>
    </div>
  )
}