import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function HeadCough({ title }) {
	return (
		<div className="flex justify-between">
			<div className="">
				<p className="dark:text-slate-300 font-danabold">{title}</p>
			</div>
			<div className="flex gap-3">
				<button className="border-[2px] dark:text-slate-400 dark:hover:text-white text-slate-400 hover:border-slate-600 hover:text-slate-700 dark:border-slate-400 dark:hover:border-white border-slate-300 p-1 rounded-md">
					<LuChevronRight />
				</button>
				<button className="border-[2px] dark:text-slate-400 dark:hover:text-white text-slate-400 hover:border-slate-600 hover:text-slate-700 dark:border-slate-400 dark:hover:border-white border-slate-300 p-1 rounded-md">
					<LuChevronLeft />
				</button>
			</div>
		</div>
	);
}
