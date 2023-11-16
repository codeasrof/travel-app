import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="Hilink Logo" width={74} height={29}/> 
            </Link>
        </nav>
    </header>
  )
}
