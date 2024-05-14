"use client"

import {Poppins} from "next/font/google"
import Link from "next/link"

import {AiOutlineShopping} from "react-icons/ai"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const NavbarSection = () => {
	return (
		<div className="bg-[#212529] px-12 py-4 flex justify-between items-center">
			<Link href="/">
				<div className="flex justify-center items-center">
					<AiOutlineShopping color="white" size={70} />
					<p className={`${poppins.className} font-bold text-white text-2xl`}>E-commerce site</p>
				</div>
			</Link>
			<div className="flex justify-center items-center gap-4">
				<Link href="/products">
					<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>
						Products
					</p>
				</Link>
				<Link href="/cart">
					<p className={`${poppins.className} text-white cursor-pointer uppercase text-xl`}>Cart</p>
				</Link>
			</div>
			<div>
				<button
					className={`${poppins.className} bg-[#525CEB] text-white font-semibold text-xl px-8 py-2 rounded-lg`}
				>
					Login
				</button>
			</div>
		</div>
	)
}

export default NavbarSection
