export default function CustomButton ({ text, btnClassName = '' }){

    return (
        <button className={`px-4 w-full md:w-fit h-fit rounded-[12px] font-semibold py-2 text-center border border-gray-800 ${btnClassName}`}>
            {text}
        </button>
    )
}
