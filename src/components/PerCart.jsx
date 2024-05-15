"use client"

import Image from "next/image"

const PerCart = (props) => {
	const {cart} = props
	const {title, price, description, category, image, rating} = cart

	return (
		<div className="border-2 border-black">
			<Image src={image} alt="cart-img" width={100} height={100} />
			<h1>{title}</h1>
		</div>
	)
}

export default PerCart
