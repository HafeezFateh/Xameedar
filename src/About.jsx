import Layout from "./layouts/Layout";
function About(){
     return(
        <>
        <Layout>
        <div class="flex-1 text-stone-300 flex flex-col items-center gap-4 mt-10 p-5 ">
            <h1 class="text-3xl font-semibold">About <span class="text-purple-600">Xameedar</span> - Your Trusted Land Companion</h1>
            <p class="max-w-[1000px] text-xl">Xameedar is a modern platform built for buyers, sellers, and investors to seamlessly buy, sell, and explore land across India. Whether you're looking for a fertile agricultural plot, a residential site, or an investment-worthy land parcel, Xameedar connects you to verified listings with ease and transparency. We aim to bring digital transformation to rural and urban land dealings — making the process fast, trustworthy, and hassle-free for everyone.</p>
        </div>
        </Layout>
        </>
  )

}

export default About;