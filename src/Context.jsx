import { createContext } from "react"
import PropTypes from 'prop-types'
export const AuthContext = createContext()

function Context({children}) {
    const text ='asdf'
    const authInfo ={ text }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default Context

Context.propTypes={
    children:PropTypes.node
}