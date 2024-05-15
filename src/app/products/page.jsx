import AddToCart from "@/components/AddToCart"
import AllCart from "@/components/AllCart"
import Footer from "@/components/Footer"
import NavbarSection from "@/components/Navbar"

const Products = () => {
	return (
		<div>
			<NavbarSection />
			<div className="grid grid-cols-12 max-w-screen-2xl mx-auto">
				<AllCart />
				<AddToCart isCartPage={false} />
			</div>
			<Footer />
		</div>
	)
}

export default Products
