import { LuArrowBigLeft, LuBookMarked, LuChevronLeft } from "react-icons/lu";

export default function Group({title , about , icon}) {
  return (
    <div className="flex items-center justify-between bg-teal-600 rounded-xl p-2 text-slate-200 shadow shadow-black/70 min-w-[200px] my-5 ">
        <div className="flex justify-center items-center gap-3">
            <div className="">
                {icon}
            </div>
            <div className="flex flex-col">
                <p>{title}</p>
                <p>{about}</p>
            </div>
        </div>
        <div className="">
            <button className="bg-slate-200 border border-slate-400 rounded-lg p-1.5 text-slate-600 hover:text-slate-800">
                <LuChevronLeft/>
            </button>
        </div>
    </div>
  )
}