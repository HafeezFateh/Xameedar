function LandCard(){
    return(
        <>
            <div className=" mt-5 ">
                <div className="bg-stone-0 mx-5 rounded-2xl ">
                    <div className="rounded-t-2xl bg-stone-500/30 p-5 flex flex-col items-center">
                        <img src="./residential.svg" className="h-[150px] w-[150px]" alt="" />
                    </div>
                    <div className="p-5 bg-stone-700 rounded-b-2xl flex flex-col gap-2">
                        <div className="flex gap-2">
                            <h1 className="text-xl text-slate-300">Location:</h1>
                            <p className="text-xl text-stone-400">Melvisharam</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <a className="border hover:bg-purple-950/50 hover:text-stone-950 hover:border-stone-950 shadow-lg border-purple-900 bg-stone-800  px-5 py-1 rounded-xl text-stone-50 mx-2" href="https://wa.me/919876543210">Click</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default LandCard;