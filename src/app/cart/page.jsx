import AddToCart from "@/components/AddToCart"
import Footer from "@/components/Footer"
import NavbarSection from "@/components/Navbar"

const Cart = () => {
	return (
		<div>
			<NavbarSection />
			<AddToCart isCartPage={true} />
			<Footer />
		</div>
	)
}

export default Cart
