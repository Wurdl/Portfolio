import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <div className="text-4xl font-semibold">
                    Jakob<span className="text-accent">.</span>
                </div>
            </Link>
            {/* desktop nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">

                <Nav />
                <Link href="/kontakt">
                    <Button>Beauftrage mich</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header