import Banner from "../components/Banner"
import { useLoaderData } from "react-router-dom"
import CardEstate from "../components/CardEstate"


function Home() {
 const estate = useLoaderData()
  return (
    <div>
      <Banner/>
    <div className="mx-auto text-center mt-24 px-3">
      <h3 className="font-franklin  font-semibold uppercase text-gray-400 mb-5 hover:text-[#2596BE] hover:text-lg hover:mb-4">Prime Industrial Spaces Await You</h3>
      <h1 className="font-poppins lg:text-[33px] md:text-3xl text-2xl font-semibold text-gray-600 lg:w-3/5 md:w-2/3 w-11/12 text-center mx-auto">Explore diverse industrial spaces tailored for your business growth journey.</h1>
      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-4/5 mx-auto  mt-14 px-3">
    {
      estate.map(property=><CardEstate key={property.id} property={property}/>)
    }
    </div>
    </div>
  )
}

export default Home