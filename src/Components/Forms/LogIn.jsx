import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';

const LogIn = () => {

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4).max(10),
  });

  const { register, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) =>{
    console.log(data);
  };

  return (
    <div className=' bg-white shadow-lg mx-auto py-20 w-[50%] text-center px-20 font-bold'>
    <h1 className='font-bold text-6xl text-[#004B11]'>KidzWorld</h1>
    <p className=' my-10 text-base'>A Place Every Kid Should Be!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
           {/* email */}
           <div className='flex flex-col text-left gap-2'>
            <label htmlFor="email">Email Address</label>
            <input type="email" id='email' className='h-10 border-2 border-black/30 outline-none' {...register("email")} />
          </div>
           {/* Password */}
           <div className='flex flex-col text-left gap-2'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className='h-10 border-2 border-black/30 outline-none'  {...register("password")}/>
          </div>

          {/* signup */}
          <div className='flex flex-col text-left gap-2 mt-5'>
            <input type="submit" value="Sign Up" className='h-10 border-2 border-black/30 outline-none bg-[#004B11] text-white hover:bg-[#001104]' />
          </div>
      </form>

      <p className='mt-4 text-black/50'>Not on  yet? 
          <a href="signup" className='text-[#004B11] ml-1'>Sign Up</a>
        </p>
    </div>
  )
}

export default LogIn