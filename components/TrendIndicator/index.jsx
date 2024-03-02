import classNames from "@/hooks/classnames";
import Icon from "../Icon";

export default function TrendIndicator({ past, present }) {
    const trend = Math.round((present - past) * 10000 / (past == 0 ? 1: past)) / 100;

    return (
        <div className={classNames("flex gap-[10px] items-center", trend == 0 ? "text-yellow-700" : (trend > 0 ? "text-error": "text-correct"))}>
            {trend != 0 && <Icon name={trend > 0 ? "increase" : "decrease"} size={16} />}
            <p className="caption">{trend > 0 ? "+" : ""}{trend}%</p>
        </div>
    )
}