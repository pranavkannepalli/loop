import BudgetSelector from "@/components/BudgetSelector"
import PrioritiesReorder from "@/components/PrioritiesReorder"
import { motion } from "framer-motion"
import { stageVariant } from "./page"

export default function GoalsForm(props) {
    return (
        <motion.div {...props} className={`flex  flex-1 flex-col items-stretch gap-[20px]`}>
            <div className="caption text-white-500 !text-[20px]">Budget</div>
            <BudgetSelector />
            <div className="caption text-white-500 !text-[20px]">Priorities</div>
            <PrioritiesReorder />
        </motion.div>
    )
}