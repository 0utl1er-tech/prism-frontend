import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={100} height={80} />
      </div>
      <div className="flex items-center">
        <Button>ログイン</Button>
      </div>
    </div>
  );
}