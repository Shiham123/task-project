"use client"

import {Poppins} from "next/font/google"
import {useEffect, useState} from "react"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const AddToCart = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [addedCart, setAddedCart] = useState([])
	const [filterCartItem, setFilterCartItem] = useState([])

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false), setAddedCart(data)
			})
			.catch((error) => {
				throw new Error(error)
			})
	}, [])

	useEffect(() => {
		const getAddedCartIds = JSON.parse(localStorage.getItem("cart"))

		if (getAddedCartIds && getAddedCartIds.length > 0) {
			const filteredCart = addedCart.filter((item) => getAddedCartIds.includes(item.id))
			setFilterCartItem(filteredCart)
		}
	}, [addedCart])

	console.log(filterCartItem)

	if (isLoading) return <p>...loading</p>

	return (
		<div className={`${poppins.className} lg:col-span-4 md:hidden hidden lg:block mt-[11rem]`}>
			<div className="border-[1px] border-[#212529] p-2 flex flex-col justify-end items-end rounded-lg">
				<button className="bg-[#212529] w-full text-white py-3 rounded-lg text-xl tracking-wide uppercase">
					Selected Products
				</button>
				<p className="uppercase text-sm font-semibold py-4">total : $0</p>
				<div className="flex gap-8 justify-start items-center mr-12 py-6">
					<input type="checkbox" name="" id="" />
					<p className="tracking-widest leading-8">
						I&apos;ve read and agree to the{" "}
						<span className="underline">
							terms and <br /> conditions, refund & privacy police
						</span>
					</p>
				</div>

				{/* here get local storage value */}

				<button className="bg-[#212529] px-4 text-white py-3 rounded-lg text-lg tracking-wide uppercase">
					Checkout
				</button>
			</div>
		</div>
	)
}

export default AddToCart
