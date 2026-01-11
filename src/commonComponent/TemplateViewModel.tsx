import type { ImageDataType } from "@/pages/Landing";
import { HiOutlineXMark } from "react-icons/hi2";
import { BsEmojiAngry } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { useState } from "react";

interface TemplateViewModelProps {
    setData: (arg: null) => void;
    data: ImageDataType
}

const TemplateViewModel = ({ setData, data }: TemplateViewModelProps) => {
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40 flex items-center justify-center">
            <div className="bg-white h-[750px] overflow-y-scroll w-[90%] rounded-md p-4">
                <HiOutlineXMark className="text-black group-hover:text-white flex ms-auto text-2xl cursor-pointer" onClick={() => setData(null)} />

                <div className="block md:block lg:flex gap-4">
                    <div className="w-3/4">
                        <div className='w-[663px] m-auto h-[500px] bg-[#efefef] p-4 rounded-lg flex justify-center'>
                            <img src={data?.url} className="w-1/2 h-full" alt={data?.title} />
                        </div>
                        <div className="mt-5">carousel</div>
                    </div>
                    <div className="w-1/4">
                        <h2 className="font-bold text-xl">{data?.title}</h2>
                        <h4 className="my-4">Poster</h4>

                        <div>
                            <div className="flex gap-2 items-center mb-3">
                                <BsEmojiAngry className="bg-[#efefef] text-3xl p-2 rounded-full" />
                                <h4>By Daksh Sathwara</h4>
                            </div>
                            <Button>Follow</Button>
                        </div>

                        <div className="mt-10 flex items-center gap-3">
                            <Button className="w-3/4">Use this template</Button>
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" aria-label="Open menu" size="icon-sm">
                                        <MoreHorizontalIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40" align="end">
                                    <DropdownMenuLabel>File Actions</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                                            New File...
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
                                            Share...
                                        </DropdownMenuItem>
                                        <DropdownMenuItem disabled>Download</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
                <div>daksh</div>
            </div>
        </div>

    )
}

export default TemplateViewModel