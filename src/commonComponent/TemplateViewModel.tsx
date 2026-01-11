import { HiOutlineXMark } from "react-icons/hi2";

interface TemplateViewModelProps {
    setData: (arg: null) => void;
}

const TemplateViewModel = ({ setData }: TemplateViewModelProps) => {
    return (
        <>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40 flex items-center justify-center">
                <div className="bg-white w-full rounded-md p-4">
                    <HiOutlineXMark className="text-black group-hover:text-white flex ms-auto text-2xl cursor-pointer" onClick={() => setData(null)} />
                </div>
            </div>
        </>

    )
}

export default TemplateViewModel