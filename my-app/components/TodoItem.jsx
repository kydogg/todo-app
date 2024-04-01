/* eslint-disable react/no-unescaped-entities */
export default function TodoItem() {
	return (
		<>
			<tr className="bg-white border-b border-sea-green">
				<th
					scope="row"
					className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
				>
					Apple MacBook Pro 17"
				</th>
				<td className="px-6 py-4">Silver</td>
				<td className="px-6 py-4">Laptop</td>
				<td className="px-6 py-4">$2999</td>
				<td className="px-6 py-4">Incomplete</td>
			</tr>
			<tr className="bg-sea-green border-b border-sea-green">
				<th
					scope="row"
					className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
				>
					Microsoft Surface Pro
				</th>
				<td className="px-6 py-4">White</td>
				<td className="px-6 py-4">Laptop PC</td>
				<td className="px-6 py-4">$1999</td>
				<td className="px-6 py-4">Completed</td>
			</tr>
		</>
	);
}
