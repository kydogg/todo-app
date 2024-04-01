export default function Navbar() {
	return (
		<>
			<div className="flex py-3 flex-wrap justify-around">
				<h1 className="text-lg font-semibold">TaskTrek</h1>
				<ul className="flex gap-[40px] text-medium">
					<li>Home</li>
					<li>Products</li>
					<li>Contact</li>
					<li>Product</li>
				</ul>
			</div>
		</>
	);
}
