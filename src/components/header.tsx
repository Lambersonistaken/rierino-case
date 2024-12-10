import Logo from "../../public/logo.svg";
import Image from "next/image";
import {Button} from "@/components/ui/button"

export default function Header() {
    return (
      <header className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center justify-center gap-6">
        <Image src={Logo} width={30} className="ml-6" alt="logo"  />
        <h2 className="font-semibold">Home</h2>
        </div>
        <Button className="mr-6">Export</Button>

      </header>
    );
  }