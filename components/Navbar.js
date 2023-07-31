import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (   
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
                <Image src="/logo.png" width={100} height={100} />
                <div>
                    <ul className="flex items-center justify-between space-x-4">
                        <Link href="/">
                            
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;