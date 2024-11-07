import Image from "next/image";
import NoAvatar from "../../../../public/assets/NoAvatar.svg"

export default function Avatar ({ src = "", customClassName = '' }){

    return (
        <Image
            className={`w-10 h-10 rounded-full ${customClassName}`}
            src={src !== "" ? src : NoAvatar}
            alt="Rounded avatar"
        />
    )
}



