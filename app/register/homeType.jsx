import HomeCard from "@/components/HomeCard"
import { motion } from "framer-motion"
import { stageVariant } from "./page"

export default function HomeTypeSelector({ ...props }) {
    return (
        <motion.div {...props} className={`flex flex-col md:flex-row gap-[20px]`}>
            <HomeCard svg="apartment" color="bg-green-500" borderColor="outline-green-700" name="Apartment" description="Large and small complexes" />
            <HomeCard svg="multi-family" color="bg-yellow-500" borderColor="outline-yellow-700" name="Multi-Family Home" description="Condos and multi-family homes" />
            <HomeCard svg="single-family" color="bg-purple-500" borderColor="outline-purple-700" name="Individual Home" description="Individual homes and town homes" />
        </motion.div>
    )
}