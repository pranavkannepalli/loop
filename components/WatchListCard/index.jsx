import Image from "next/image";
import TrendIndicator from "../TrendIndicator";

export default function WatchlistCard({ img, alt, name, price, past, present, remove }) {
    return (
        <div className="flex items-stretch bg-white-100 border border-white-300  overflow-hidden w-max rounded-[8px]">
            <div className="relative w-[80px]">
                <Image src={img} alt={alt} fill />
            </div>
            <div className="flex flex-col p-[16px] gap-[5px]">
                <h6>{name}</h6>
                <div className="flex justify-between gap-[10px] items-center">
                    <p className="caption text-white-400">${price.toLocaleString()}</p>
                    <TrendIndicator past={past} present={present} />
                </div>
            </div>
            <p onClick={remove} className="caption p-[10px] flex justify-content items-center bg-white-200 cursor-pointer">-</p>
        </div>
    )
}