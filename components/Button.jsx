export default function Button({ children }) {
    return <button className="
    text-black font-bold text-lg 
    bg-white rounded-lg mix-blend-screen 
    px-2 py-1 mx-4 
    border-2 border-black 
    shadow-lg
    hover:bg-black hover:text-white hover:border-white
    active:bg-white active:text-black
    transition duration-100
    ">
        {children}
    </button>
}