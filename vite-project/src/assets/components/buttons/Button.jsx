export function Button({text}) {
    return (
        <>
            <button className="px-6 bg-pink border-none text-lg text-rose-700 font-semibold py-2 text-green-dark  border-4 border-green-dark rounded-full hover:bg-green-dark hover:scale-105 transition-all">
                {text}
            </button>
        </>
    );
}