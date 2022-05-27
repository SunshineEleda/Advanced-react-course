import Link from "next/link";

const Nav: React.FC<{}> = () => {
	return (
		<nav>
			<Link href="/products">Products</Link>
			<Link href="/sell">Sell</Link>
			<Link href="/orders">Orders</Link>
			<Link href="/account">Account</Link>
			<Link href="/">Home</Link>
		</nav>
	);
};

export default Nav;
