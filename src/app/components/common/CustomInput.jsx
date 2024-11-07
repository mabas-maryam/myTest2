export default function CustomInput ({ placeholder = 'Type here', customClassName = '' }){

    return (
        <input
            type="email"
            className={`w-full bg-transparent border border-black rounded-lg p-2.5 lg:min-w-[58px] ${customClassName}`}
            placeholder={placeholder} />
    );
}
