import Logo from "@/shared/Logo"
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from "react-icons/ai"
import {Poppins} from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Footer = () => {
	return (
		<div className={`${poppins.className} bg-[#212529]`}>
			<div className="max-w-screen-2xl mx-auto lg:flex lg:justify-between lg:items-center py-12 md:grid md:grid-cols-2 grid grid-cols-2 px-4 gap-x-4 gap-y-16">
				<div className="text-white">
					<Logo logoHeading="e-commerce site" responsive="flex justify-start items-center" />
					<p className="py-2">Got question? Call us 24/7</p>
					<h2 className="py-4 font-semibold text-xl">+02 055 4156</h2>
					<p className="py-2 tracking-widest">
						Register now & get you 10% <br /> offer from first order!
					</p>
					<h2 className="py-2 font-semibold text-xl">Join us</h2>
					<div className="flex justify-between md:justify-start gap-4 items-center py-2">
						<AiOutlineInstagram size={50} />
						<AiOutlineLinkedin size={50} />
						<AiOutlineTwitter size={50} />
						<AiOutlineFacebook size={50} />
					</div>
				</div>
				<div>
					<ul className="text-white flex flex-col gap-4">
						<li className="font-semibold text-xl">Company</li>
						<li className="text-lg opacity-70">About us</li>
						<li className="text-lg opacity-70">career</li>
						<li className="text-lg opacity-70">Contact us</li>
						<li className="text-lg opacity-70">Start selling</li>
						<li className="text-lg opacity-70">order history</li>
					</ul>
				</div>
				<div>
					<ul className="text-white flex flex-col gap-4">
						<li className="font-semibold text-xl">My account</li>
						<li className="text-lg opacity-70">Track my order</li>
						<li className="text-lg opacity-70">view cart</li>
						<li className="text-lg opacity-70">Sign in</li>
						<li className="text-lg opacity-70">Help</li>
						<li className="text-lg opacity-70">wishlist</li>
					</ul>
				</div>
				<div>
					<ul className="text-white flex flex-col gap-4">
						<li className="font-semibold text-xl">Customer service</li>
						<li className="text-lg opacity-70">Payment methods</li>
						<li className="text-lg opacity-70">Money return policy</li>
						<li className="text-lg opacity-70">Product return</li>
						<li className="text-lg opacity-70">Contact seller</li>
						<li className="text-lg opacity-70">Terms & conditions</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
