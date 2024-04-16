import PropTypes from 'prop-types'

function HeadBar({children}) {
  return (
    <div className="bg-black">
        <div className="bg-[url('https://i.ibb.co/kqVqcMh/navvis-factory-planning2-header.webp')] h-56 mx-auto opacity-60 flex justify-center items-center object-fill bg-center">
            <h1 className="font-franklin text-6xl lg:text-7xl font-bold lg:font-bold text-white  underline">{children}</h1>
        </div>
    </div>
  )
}

export default HeadBar

HeadBar.propTypes={
    children:PropTypes.node
}