import AddToCart from "@/components/AddToCart"
import AllCart from "@/components/AllCart"
import NavbarSection from "@/components/Navbar"

const Products = () => {
	return (
		<div>
			<NavbarSection />
			<div>
				<AllCart />
				<AddToCart />
			</div>
		</div>
	)
}

export default Products
