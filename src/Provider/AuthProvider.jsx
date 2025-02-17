import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/Fifebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)


      const createUser = (email,password) =>{
            return createUserWithEmailAndPassword(auth,email,password)
      }

      const signIn = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
            
      }

      const PasswordResetEmail = (email) =>{
            return sendPasswordResetEmail(auth,email)
      }


      const authInfo ={
            user,
            createUser,
            signIn,
            PasswordResetEmail

      }
      return (
            <AuthContext.Provider value={authInfo} >
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;