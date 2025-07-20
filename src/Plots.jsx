import Layout from "./layouts/Layout";
import LandCard from "./components/LandCard";
function Plots(){
    return (
        <>
        <Layout>

            <h1 className="text-3xl p-2 text-stone-400 lg:text-center font-semibold mx-5 mt-5">Plots</h1>
            <div className="h-[2px] w-[40px] rounded-xl  bg-purple-600 mx-7.5 lg:w-[50px] lg:mx-auto"></div>
            <div className="mx-5 mt-5 grid grid-cols-1 lg:grid-cols-3 lg:mx-10 gap-4">

                <LandCard />
                <LandCard />
                <LandCard />
                <LandCard />
            </div>
        </Layout>
        </>
    )
}

export default Plots;