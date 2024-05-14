"use client"

import {useState} from "react"
import {Poppins} from "next/font/google"
import Link from "next/link"
import {AiOutlineShopping} from "react-icons/ai"
import {HiMiniBars3} from "react-icons/hi2"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const NavbarSection = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="bg-[#212529] px-6 py-4 flex justify-between items-center">
			{/* nav section one */}
			<Link href="/">
				<div className="flex justify-center items-center">
					<AiOutlineShopping color="white" size={70} />
					<p className={`${poppins.className} font-bold text-white text-2xl mt-2`}>
						E-commerce site
					</p>
				</div>
			</Link>

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
					<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>Cart</p>
				</Link>
			</div>

			<button
				className={`${poppins.className} bg-[#525CEB] text-white font-semibold text-xl px-8 py-2 rounded-lg lg:block hidden`}
			>
				Login
			</button>

			{/* Mobile menu for small and medium screens */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-[#212529] flex flex-col items-center gap-4 lg:hidden">
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
	)
}

export default NavbarSection
