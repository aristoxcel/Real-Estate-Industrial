import Banner from "../components/Banner"
import { useLoaderData } from "react-router-dom"


function Home() {
 const estate = useLoaderData()
  return (
    <div>
      <Banner/>
    <div>{estate.length}</div>
    {
      estate.map(i=>(<figure className="px-10 pt-10">
      <img className="rounded-xl bg-gray-500 border w-full" src={i.image} alt="Shoes"  />
  </figure>))
    }
    </div>
  )
}

export default Home