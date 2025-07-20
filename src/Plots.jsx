import Layout from "./layouts/Layout";
import LandCard from "./components/LandCard";
function Plots(){
    return (
        <>
        <Layout>
            <div className="mx-5 grid grid-cols-1 lg:grid-cols-3 lg:mx-10 gap-4">
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