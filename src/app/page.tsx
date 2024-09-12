import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Alchemy from "../../lib/alchemy";
import Version from "../../lib/version";

export default function Home() {
  return (
    <div className="w-dvw min-h-dvh flex flex-col justify-center items-center gap-4">
      <img src="/emoji/ms-mercury.png" className="invert-[55%] sepia-[69%] saturate-[4840%] hue-rotate-[15deg] brightness-[100%] contrast-[95%];"/>
      <div className="flex flex-row justify-center">
        <Button className="flex flex-row gap-1 rounded-r-none">Host</Button>
        <Input type="text" className="rounded-none text-center" placeholder="ABC?DEF"/>
        <Button className="flex flex-row gap-1 rounded-l-none">Join</Button>
      </div>
    </div>
  )
}