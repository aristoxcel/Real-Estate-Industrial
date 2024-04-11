
import  {useRouteError,  Link } from 'react-router-dom'
import Nav from '../components/Nav';

const ErrorPage = () => {

    const error = useRouteError()
    console.error(error);

    return (
       <>
        <Nav/>
      <div id="error-page" className="relative bg-gray-300 min-h-calc(100%-150px) flex justify-center items-center">
        <img src={'error.png'} alt="" />
        <p className="absolute z-10 flex flex-col bottom-72">
          <i className="font-bold text-white text-3xl pb-3">{error.statusText || error.message}</i>
            <button><Link className="btn bg-lime-600 text-xl font-semibold text-white">Go Home</Link></button>
        </p>
      </div>
       </>
    );

}

export default ErrorPage
