"use client"

import {TfiLayoutGrid3Alt} from "react-icons/tfi"
import {FaList} from "react-icons/fa6"
import {CiSearch} from "react-icons/ci"
import {Poppins} from "next/font/google"
import {useEffect, useState} from "react"
import PerCart from "./PerCart"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const AllCart = () => {
	const [products, setProducts] = useState([])
	const [isList, setIsList] = useState(false)

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((error) => {
				throw new Error(error.message)
			})
	}, [])

	return (
		<div className={`${poppins.className} col-span-8 my-12`}>
			{/* heading div */}
			<div className="flex justify-between items-center">
				<h1 className="capitalize text-2xl font-semibold tracking-widest">Our All Products</h1>
				<div className="flex justify-center gap-4 items-center">
					<FaList
						size={40}
						onClick={() => setIsList(true)}
						className="cursor-pointer"
						color={`${isList ? "blue" : "#212529"}`}
					/>
					<TfiLayoutGrid3Alt
						size={35}
						onClick={() => setIsList(false)}
						className="cursor-pointer"
						color={`${isList ? "#212529" : "blue"}`}
					/>
				</div>
			</div>

			{/* search bar */}
			<div className="w-full">
				<div className="relative">
					<input
						className="w-full my-4 border-[1px] border-black outline-none px-14 py-2 rounded-[50px]"
						placeholder="Search An Item"
						type="text"
					/>
					<div className="absolute top-[1.4rem] px-4 left-0">
						<CiSearch size={30} />
					</div>
				</div>
			</div>

			<div
				className={`${
					isList ? "flex flex-col gap-x-6 gap-y-12" : "grid grid-cols-3 gap-x-6 gap-y-12"
				}`}
			>
				{products &&
					products.map((cart, index) => (
						<div key={index}>
							<PerCart isList={isList} cart={cart} />
						</div>
					))}
			</div>
		</div>
	)
}

export default AllCart
