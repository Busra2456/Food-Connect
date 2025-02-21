
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';



const Login = () => {

  const { signIn,signInGoogle,signInGithub ,user } = useContext(AuthContext);
  const [success,setSuccess] = useState('');
  const [loginError,setLoginError] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  // const emailRef = useRef(null);
  const Navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password');
    console.log(email,password)
    //reset error and success
    setSuccess('');
    setLoginError('');
    // signIn
    signIn(email,password)
    .then(result=>{
      console.log(result.user)
      // if(result.user.emailVerified){
      //   setSuccess('User Logged in Successfully')
      // }
      // else{
      //   alert('Please verify your email address.')
      // }

      setSuccess('User create Successfully')
     
      e.target.reset();
      Navigate('/')
     

    })
    .catch(error=>{
      console.error(error);
      setLoginError(error.message)
    })
  } 


  const handleSignInGoogle = () =>{
    signInGoogle ()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
    })

    }


    const handleGithub = () =>{
      signInGithub ()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error)
      })
  
      }
  


  // const handleForgotPassword = () =>{
  //   const email = emailRef.current.value;
  //   if(!email){
  //     console.log('Please provide an email', emailRef.current.value)
  //     return;
  //   }
  //   else if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
  //     console.log('please write a valid email')
  //     return;}

  //     //send validation email
  //     PasswordResetEmail(email )
  //     .then(() =>{
  //       alert('please check your email')
  //     })
  //     .catch(error =>{
  //       console.log(error.message)
  //     })

  // }


      return (
            <div>
              <Navbar></Navbar>
                  <div className="hero bg-base-300 rounded-sm mx-auto min-h-auto max-w-5xl mt-10 ">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold my-10 text-zinc-700">Login your account </h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl mb-20">
      <form onSubmit={handleLogin} className="card-body p-15">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-zinc-400 font-semibold my-2">Email</span>
          </label>
          <br />
          <input 
             type="email"
             name='email' 
            //  ref={emailRef}
             placeholder="email" 
             className="input input-bordered mb-2 text-zinc-800 text-[11px] w-full p-7" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-zinc-400 font-semibold my-2">Password</span>
          </label>
        <div className='relative'>
        <input 
           type= { showPassword ? "text" : "password"}
         
           name='password' 
           placeholder="password" 
           className="input input-bordered mb-2 
           text-zinc-800 text-[11px] w-full p-7"required />

           <span className='absolute top-5 right-5 text-[10px]' onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}  </span>
        </div>
          {/* <label className="label">
            <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover mt-2 text-zinc-500 font-semibold">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className=" bg-zinc-800 text-white w-full text-[12px] p-3 font-semibold">Login</button>
        </div>
      </form>
      {
        loginError && <p className='text-red-800 text-center mt-2 text-2xl' > {loginError} </p>
      }
      {
        success && <p className='text-green-800 text-center mt-2 text-2xl'> {success} </p>
      }
      <p className='text-center text-xl m-4 text-zinc-600 font-semibold'>Do not have an account <Link className='btn-link text-blue-900 font-semibold' to={'/Register'}>Register</Link> </p>

      <div className=' flex ml-16'>
      <p><button className="btn btn-link m-3 text-black text-2xl " onClick={handleSignInGoogle} > <p><FaGoogle className='text-black'></FaGoogle></p> Google</button></p>

<p><button className="btn btn-link m-3 text-2xl  text-black" onClick={handleGithub} > <p><FaGithub className='text-black'></FaGithub></p> Github</button></p>
      </div>

     
     
    </div>
  </div>
</div>
            </div>
      );
};

export default Login;