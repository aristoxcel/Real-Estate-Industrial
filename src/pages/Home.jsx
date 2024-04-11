import Banner from "../components/Banner"
import { useLoaderData } from "react-router-dom"
import CardEstate from "../components/CardEstate"


function Home() {
 const estate = useLoaderData()
  return (
    <div>
      <Banner/>
    <div className="mx-auto text-center mt-24 px-3">
      <h3 className="font-franklin  font-semibold uppercase text-gray-400 mb-8">Prime Industrial Spaces Await You</h3>
      <h1 className="font-poppins text-4xl font-semibold text-gray-600 lg:w-2/5 w-5/6 text-center mx-auto">Explore diverse industrial spaces tailored for your business growth journey.</h1>
      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1400px] mx-auto  mt-14 px-3">
    {
      estate.map(property=><CardEstate key={property.id} property={property}/>)
    }
    </div>
    </div>
  )
}

export default Home