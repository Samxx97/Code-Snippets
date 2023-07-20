
import Link from "next/link";
import Image from "next/image";

const Nav = () => {

    return (
        <nav className=" flex-between w-full mb-16 pt-3">
            <Link href="assets/images/logo.svg" className="flex gap-2"> 
                <Image src="/assets/images/logo.svg"
                    width={30}
                    height={30}/>
                <p className="logo_text"> Code Snippets </p>
            </Link>
            <div>
                <button className="black_btn"> Sign in </button>
            </div>
        </nav>
    );
}

export default Nav;