"use client"

import {useState} from "react"
import {Poppins} from "next/font/google"
import Link from "next/link"
import {HiMiniBars3} from "react-icons/hi2"
import Logo from "@/shared/Logo"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const NavbarSection = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="bg-[#212529] py-4">
			<div className="flex justify-between items-center max-w-screen-2xl mx-auto">
				{/* nav section one */}
				<Logo logoHeading="E-commerce site" responsive="flex justify-center items-center" />

				{/* Hamburger menu for mobile and medium screens */}
				<div className="block lg:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						<HiMiniBars3 color="white" size={30} />
					</button>
				</div>

				{/* nav section two and three for larger screens */}
				<div className="hidden lg:flex justify-center items-center gap-4">
					<Link href="/products">
						<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>
							Products
						</p>
					</Link>
					<Link href="/cart">
						<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>
							Cart
						</p>
					</Link>
				</div>

				<button
					className={`${poppins.className} bg-[#525CEB] text-white font-semibold text-xl px-8 py-2 rounded-lg lg:block hidden`}
				>
					Login
				</button>

				{/* Mobile menu for small and medium screens */}
				{menuOpen && (
					<div className="absolute top-24 left-0 w-full bg-[#212529] flex flex-col items-center gap-4 lg:hidden">
						<Link href="/products" onClick={() => setMenuOpen(false)}>
							<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>
								Products
							</p>
						</Link>
						<Link href="/cart" onClick={() => setMenuOpen(false)}>
							<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>
								Cart
							</p>
						</Link>
						<button
							onClick={() => setMenuOpen(false)}
							className={`${poppins.className} bg-[#525CEB] text-white font-semibold text-xl px-8 py-2 rounded-lg`}
						>
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default NavbarSection
