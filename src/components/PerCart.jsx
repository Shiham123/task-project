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
	const {cart, isList} = props
	const {id, title, image, price, rating} = cart

	const fullStars = Math.floor(rating.rate)
	const halfStar = rating.rate - fullStars >= 0.5 ? 1 : 0
	const emptyStars = 5 - fullStars - halfStar

	const handleAddToCart = (cartId) => {
		const existingCart = localStorage.getItem("cart")
		let cartItems = existingCart ? JSON.parse(existingCart) : []

		cartItems.push(cartId)

		localStorage.setItem("cart", JSON.stringify(cartItems))
	}

	return (
		<div
			className={`${poppins.className} bg-[#f7f8f8] flex ${
				isList ? "flex-row h-[250px] w-full gap-12" : "flex-col justify-center h-[550px]"
			} px-8 rounded-lg`}
		>
			<div className="flex justify-center items-center p-8">
				<Image
					src={image}
					alt="cart-img"
					width={`${isList ? 150 : 100}`}
					height={`${isList ? 150 : 100}`}
				/>
			</div>
			<div>
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

				{/* price and add to cart section */}
				<div className={`${isList ? "flex gap-12" : "flex justify-between items-center"}`}>
					<p className="text-lg py-4">${price}</p>
					<button
						onClick={() => handleAddToCart(id)}
						className="bg-[#212529] text-white px-6 py-2 rounded-lg"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default PerCart
