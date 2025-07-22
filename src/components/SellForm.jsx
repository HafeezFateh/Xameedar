import { Link } from "react-router-dom";

function SellForm(){

    const shees = {
        fontSize:"25px",
        // fontWeight: "bold"
        
    }
    return(
        <>

            <div className="mx-2 rounded-xl mt-10 font-semibold bg-stone-200/50 p-5 ">
                <Link to="/">
                    <span class="material-symbols-outlined float-end text-stone-900 " style={shees}>close</span>
                </Link>
                <form action="" className="text-stone-900  flex flex-col gap-3 mt-10">
                    <label htmlFor="" className="text-lg ">Name: </label>
                    <input type="text" className="bg-stone-50/50  p-1 rounded-lg   backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Mobile No: </label>
                    <input type="number" className="bg-stone-50/50 p-1  rounded-lg   backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Address: </label>
                    <input type="text" className="bg-stone-50/50 rounded-lg p-1  backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Email </label>
                    <input type="email" className="bg-stone-50/50  p-1 rounded-lg   backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Land location: </label>
                    <input type="text" className="bg-stone-50/50  p-1 rounded-lg   backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Land measurements [In SqFt]: </label>
                    <input type="text" className="bg-stone-50/50  p-1 rounded-lg  backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Land Area [In SqFt]:</label>
                    <input type="number" className="bg-stone-50/50 p-1  rounded-lg   backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Price [Per SqFt]: </label>
                    <input type="number" className="bg-stone-50/50  p-1 rounded-lg  backdrop-blur-2xl" />
                    <label htmlFor="" className="text-lg ">Is every document present: </label>
                    <div className="flex gap-5">
                        <label htmlFor="" className="flex gap-2 items-center">
                        <input type="radio" name="consent" value="Yes" className="accent-purple-800 w-[15px] h-[15px] bg-stone-50/30 rounded-lg  text-white backdrop-blur-2xl" />
                        Yes
                        </label>
                         <label htmlFor="" className="flex gap-2 items-center">
                        <input type="radio" name="consent" value="no" className="accent-purple-800 w-[15px] h-[15px] bg-stone-50/30 rounded-lg  text-white backdrop-blur-2xl" />
                        No
                        </label>
                    </div>
                    <div className="flex w-full justify-end">
                        <input type="submit" className="hover:bg-stone-950/90 text-stone-200 border py-1 px-7 rounded-xl bg-purple-800" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SellForm;