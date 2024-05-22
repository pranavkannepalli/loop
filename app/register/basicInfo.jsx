import { useContext } from "react";
import LoopContext from "@/components/LoopContext";
import TextInput from "@/components/TextInput";
import { StateSelector } from "@/components/Dropdown";
import { motion } from "framer-motion"
import { stageVariant } from "./page";
export default function BasicInfoForm(props) {

	const { city, state, address, zip, setCity, setState, setAddress, setZip } = useContext(LoopContext);

    return (
        <motion.div {...props}  className={`flex flex-col gap-[20px]`}>
            <div className="flex flex-col gap-[6px]">
                <div className="caption text-white-500">STREET ADDRESS</div>
                <TextInput placeholder="9769 111th Ave NE" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="flex flex-row gap-[13px]">
                <div className="flex flex-col gap-[6px]">
                    <div className="caption text-white-500">City</div>
                    <TextInput placeholder="Redmond" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="flex flex-col gap-[6px]">
                    <div className="caption text-white-500">State</div>
                    <TextInput hasInput={false} suffix={<StateSelector />}></TextInput>
                </div>
                <div className="flex flex-col gap-[6px]">
                    <div className="caption text-white-500">Zip</div>
                    <TextInput placeholder="98052" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
            </div>
            <p>Note: Currently only supports/offers services to people in Washington, New York, or Texas.</p>
        </motion.div>
    )
}