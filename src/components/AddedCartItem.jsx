import {Poppins} from "next/font/google"
import Image from "next/image"
import {FaStarHalfAlt} from "react-icons/fa"
import {FaRegStar, FaStar} from "react-icons/fa6"
import {FaTrashAlt} from "react-icons/fa"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const AddedCartItem = ({item}) => {
	const {id, title, rating, image, price} = item

	const fullStars = Math.floor(rating.rate)
	const halfStar = rating.rate - fullStars >= 0.5 ? 1 : 0
	const emptyStars = 5 - fullStars - halfStar

	const handleDeleteCart = (id) => {
		const cartItems = JSON.parse(localStorage.getItem("cart")) || []
		const findIdxLS = cartItems.findIndex((item) => item === id)

		if (findIdxLS !== -1) {
			cartItems.splice(findIdxLS, 1)
		}

		localStorage.setItem("cart", JSON.stringify(cartItems))
	}

	return (
		<div
			className={`${poppins.className} bg-[#f7f8f8] flex flex-row h-[250px] w-full gap-12 px-8 rounded-lg my-4`}
		>
			<div className="flex justify-center items-center p-8">
				<Image src={image} alt="cart-img" width={100} height={100} />
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
				<div className="flex flex-row justify-between items-center">
					<p className="text-lg py-4">${price}</p>
					<FaTrashAlt
						onClick={() => handleDeleteCart(id)}
						color="red"
						size={30}
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	)
}

export default AddedCartItem
