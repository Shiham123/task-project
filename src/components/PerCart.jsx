"use client"

import Image from "next/image"
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"
import {Poppins} from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const PerCart = (props) => {
	const {cart} = props
	const {title, image, price, rating} = cart

	const fullStars = Math.floor(rating.rate)
	const halfStar = rating.rate - fullStars >= 0.5 ? 1 : 0
	const emptyStars = 5 - fullStars - halfStar

	return (
		<div
			className={`${poppins.className}  bg-[#f7f8f8] flex flex-col justify-center px-8 h-[400px] rounded-lg`}
		>
			<div className="flex justify-center items-center p-4">
				<Image src={image} alt="cart-img" width={100} height={100} />
			</div>
			<h1 className="text-[#212529] text-lg py-4 tracking-wide">{title}</h1>
			<div className="flex gap-1">
				{[...Array(fullStars)].map((_, index) => (
					<FaStar key={`full-${index}`} color="#f6aa24" />
				))}
				{halfStar === 1 && <FaStarHalfAlt color="#f6aa24" />}
				{[...Array(emptyStars)].map((_, index) => (
					<FaRegStar key={`empty-${index}`} color="#f6aa24" />
				))}
			</div>
			<p className="text-sm opacity-50 py-4">({rating.count} reviews)</p>
			<div className="flex justify-between items-center">
				<p className="text-lg py-4">${price}</p>
				<button className="bg-[#212529] text-white px-6 py-2 rounded-lg">Add to cart</button>
			</div>
		</div>
	)
}

export default PerCart
