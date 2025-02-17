"use client";
import useAuthModel from "@/hooks/useAuthModel";
import useUploadModel from "@/hooks/useUploadModel";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

interface LibraryProps {
    songs : Song[];
}

const Library : React.FC<LibraryProps> = ({songs}) => {
    const authModel = useAuthModel();
    const uploadModel = useUploadModel();
    const { user } = useUser();

    const onClick = () => {
        if(!user){
            return authModel.onOpen();
        }
        //TODO : check for subscription
        return uploadModel.onOpen();
    };
    return (
        <div className = "flex flex-col">
            <div className = "flex item-center justify-between px-5 py-4">
                <div className = "inline-flex items-center gap-x-2">
                    <TbPlaylist className = "text-neutral-400" size = {26}/>
                    <p className = "text-neutral-400 font-medium text-no">Your Library</p>
                </div>
                <AiOutlinePlus onClick={onClick} size = {28} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
            </div>
            <div className = "flex flex-col gap-y-2 mt-4 px-3">
                {songs.map((item) => (
                    <MediaItem
                        onClick = {() => {}}
                        key = {item.id}
                        data = {item}/>
                ))}
            </div>
        </div>
    );
}

export default Library;