import classNames from "@/hooks/classnames";
import Icon from "../Icon";

export default function TrendIndicator({ trend }) {
    return (
        <div className={classNames("flex gap-[10px] items-center", trend > 0 ? "text-error": "text-correct")}>
            <Icon name={trend > 0 ? "increase" : "decrease"} size={16} />
            <p className="caption">{trend > 0 ? "+" : ""}{trend}%</p>
        </div>
    )
}