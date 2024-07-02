import React from 'react'
import { ghflag } from '../../assets/images'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUP = () => {


  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    phoneNumber: yup.number().integer().required().positive().max(999999999),
    password: yup.string().required().min(4).max(12),
  });

  const { register, handleSubmit} =useForm({
    resolver: yupResolver(schema),
  });

const onSubmit = (data) =>{
  console.log(data);
};

  return (
    <div className=' bg-white mx-auto py-20 w-[50%] text-center px-20 font-bold shadow-lg'>
      <h1 className='font-bold text-6xl text-[#004B11]'>KidzWorld</h1>
      <p className=' my-10 text-base'>A Place Every Kid Should Be!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FIRST NAME */}
          <div className='flex flex-col text-left gap-2'>
            <label htmlFor="fname">First Name</label>
            <input type="text" id='fname' className='h-10 border-2 border-black/30 outline-none' {...register("firstname")}/>
          </div>

          {/* Last Name */}
          <div className='flex flex-col text-left gap-2 my-10'>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id='lname' className='h-10 border-2 border-black/30 outline-none'  {...register("lastName")}/>
          </div>

          {/* email */}
          <div className='flex flex-col text-left gap-2'>
            <label htmlFor="email">Email Address</label>
            <input type="email" id='email' className='h-10 border-2 border-black/30 outline-none' {...register("email")} />
          </div>

          {/* Phone Number */}
          <div className='flex flex-col text-left gap-2 my-10'>
            <label htmlFor="tel">Phone Number</label>
            <div className='flex bg-white border-2 border-black/30 pl-4 '>
              <img src={ghflag} className='md:h-7 h-5 pt-2.5' alt="ghflag" />
              <p className='pt-1.5 ml-2 pr-4 border-r-2 border-black/30'>+223</p>
              <input type="number" id='tel' className='h-10  outline-none w-full'  {...register("phoneNumber")}/>
            </div>
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


        <p className='mt-4 text-black/50'>Already a member? 
          <a href="login" className='text-[#004B11] ml-1'>Log In</a>
        </p>
    </div>
  )
}

export default SignUP