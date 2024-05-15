import Link from "next/link"
import {AiOutlineShopping} from "react-icons/ai"
import {Poppins} from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Logo = (props) => {
	const {logoHeading, responsive} = props
	return (
		<Link href="/">
			<div className={`${responsive}`}>
				<AiOutlineShopping color="white" size={70} />
				<p className={`${poppins.className} font-bold text-white text-2xl mt-2`}>{logoHeading}</p>
			</div>
		</Link>
	)
}

export default Logo
