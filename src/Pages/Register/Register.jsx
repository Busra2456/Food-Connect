import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";




const Register = () => {

  const { createUser ,user} = useContext(AuthContext);
  const [success,setSuccess] = useState('');
  const [registerError,setRegisterError] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  

  const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password');
    
   
    console.log(name,photo,email,password)

    //reset error and success
    setSuccess('');
    setRegisterError('');

    if(password.length < 6){
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      alert('Your password should have at least one upper case characters.')
      return;
     }

     
    

    // createUser

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      setSuccess('User create Successfully')
      //update profile
      updateProfile(result,user,{
        displayName: name,
        photoURL:  "https://example.com/jane-q-user/profile.jpg"
      })
      .then(() => console.log('profile updated'))
      .catch()
      //send Verification email :
      // sendEmailVerification(result.user)
      // .then(() =>{
      //   console.log('Please check your email verify your account')
        

      // })
      e.target.reset();
    })
    .catch(error=>{
      console.error(error)
      setRegisterError(error.message)
    })


    
    
  } 


      return (
        <div>
        <Navbar></Navbar>
            <div className="hero bg-base-300 rounded-sm mx-auto min-h-auto max-w-5xl mt-10 ">
<div className="hero-content flex-col ">
<div className="text-center">
<h1 className="text-5xl font-bold my-10 text-zinc-700">Register your account </h1>

</div>
<div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl mb-20">
<form onSubmit={handleRegister} className="card-body p-15">
  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-zinc-400 font-semibold my-2">Name</span>
    </label>
    <br />
    <input type="text"
    name='name' placeholder="Enter your name" className="input input-bordered mb-2 text-zinc-800 text-[11px] w-full p-7" required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-zinc-400 font-semibold my-2">Photo URL</span>
    </label>
    <br />
    <input type="text"
    name='photo' placeholder="Enter your photo" className="input input-bordered mb-2 text-zinc-800 text-[11px] w-full p-7" required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-zinc-400 font-semibold my-2">Email</span>
    </label>
    <br />
    <input type="email"
    name='email' placeholder="email" className="input input-bordered mb-2 text-zinc-800 text-[11px] w-full p-7" required />
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
   
  
   
  </div>



  <div className="form-control mt-6">
    <button className=" bg-zinc-800 text-white w-full text-[12px] p-3 font-semibold">Register</button>
  </div>
</form>
      {
        registerError && <p className='text-red-800 text-center mt-2 text-2xl' > {registerError} </p>
      }
      {
        success && <p className='text-green-800 text-center mt-2 text-2xl'> {success} </p>
      }
<p className='text-center m-5 text-zinc-600 font-semibold'>Already have an account <Link className='btn-link text-blue-900 font-semibold' to={'/Login'}>Login New</Link> </p>
</div>
</div>
</div>
      </div>
      );
};

export default Register;