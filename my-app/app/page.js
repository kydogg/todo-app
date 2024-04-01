export default function Home() {
	return (
		<>
			<form
				action=""
				className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
			>
				<input
					type="text"
					name="title"
					placeholder="Enter your task"
					className="px-3 py-2 border-2 w-full"
				/>
				<textarea
					name="description"
					placeholder="Enter description"
					className="px-3 py-2 border-2 w-full"
				></textarea>
				<button
					type="submit"
					className="bg-task-trek-green py-3 px-11 text-white"
				>
					Add task
				</button>
			</form>

			<div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
				<table className="w-full text-sm text-left rtl:text-right">
					<thead className="text-xs uppercase bg-deep-indigo text-white">
						<tr className="border-b border-sea-green">
							<th scope="col" className="px-6 py-3" id="task_id">
								ID
							</th>
							<th scope="col" className="px-6 py-3" id="title">
								Title
							</th>
							<th scope="col" className="px-6 py-3" id="description">
								Description
							</th>
							<th scope="col" className="px-6 py-3" id="task_status">
								Status
							</th>
							<th scope="col" className="px-6 py-3" id="task_action">
								Action
							</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</>
	);
}
