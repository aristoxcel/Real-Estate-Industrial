import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import auth from "./Firebase/Firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
export const AuthContext = createContext()

function Context({children}) {
    const [user, setUser] = useState(null)

// sign up by email
    const signUp =(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
// sign in by email
const signIn =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}


// user info capture by onAuthStateChange
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (curUser)=>{
    setUser(curUser)
    console.log(curUser);
  });
  return ()=>unsubscribe()
},[])

// logout user
const logout=() =>{
return signOut(auth)
}

    const authInfo ={ 
      user, 
      signUp,
      signIn,
      logout
     }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default Context

Context.propTypes={
    children:PropTypes.node
}