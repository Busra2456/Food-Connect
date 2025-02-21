import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithPopup, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, GithubAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import app from "../Firebase/Fifebase.config";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)
      const [loading,setLoading] = useState(true)


      const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
      }

      const signIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
            
      }

      const logOut = () =>{
            setLoading(true)
            return signOut(auth)
      }

      const PasswordResetEmail = (email) =>{
            setLoading(true)
            return sendPasswordResetEmail(auth,email)
      }

      const  signInGoogle = () =>{
            setLoading(true)
            return signInWithPopup(auth,googleProvider)

      }

      const signInGithub = () =>{
            setLoading(true)
            return signInWithPopup(auth,githubProvider) 
      }

      useEffect(() =>{
            const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                      console.log('user in the auth state changed',currentUser)
                      setUser(currentUser);
                      setLoading(false)
                });
                return () =>{
                      unSubscribe()
                }
          },[])


      const authInfo ={
            user,
            loading,
            createUser,
            signIn,
            PasswordResetEmail,
            signInGoogle ,
            signInGithub ,
            logOut

      }
      return (
            <AuthContext.Provider value={authInfo} >
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;