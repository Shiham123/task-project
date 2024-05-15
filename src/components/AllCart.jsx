import {TfiLayoutGrid3Alt} from "react-icons/tfi"
import {FaList} from "react-icons/fa6"
import {CiSearch} from "react-icons/ci"
import {Poppins} from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const AllCart = () => {
	return (
		<div className={`${poppins.className} col-span-8 my-12`}>
			{/* heading div */}
			<div className="flex justify-between items-center">
				<h1 className="capitalize text-2xl font-semibold tracking-widest">Our All Products</h1>
				<div className="flex justify-center gap-4 items-center">
					<FaList size={40} />
					<TfiLayoutGrid3Alt size={35} />
				</div>
			</div>
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
		</div>
	)
}

export default AllCart
