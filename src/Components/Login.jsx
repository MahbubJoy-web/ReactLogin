import React, { useState } from 'react'

const Login = () => {
    // =============usestate
    // email
    const [ deli, reci]= useState('')
    const [muri, dal]=useState('')
    // passs
    const [Password, setPassword]=useState('')
    const [prror ,setprror] = useState('')


    // ================funtion
    const Btn =(alu)=>{
        reci(alu.target.value)
       dal('')
    }
    const EnterBtn = (e)=>{
      e.preventDefault()
        if(deli==''){
          dal('Please Enter your Email')
        }
        else if (Password==''){
          setprror('please Enter Password')
        }else {
          dal('')
          setprror('')
        }
    }
    console.log(Password)

  return (
    <div className='w-full h-screen bg-[#EEEEEE] flex justify-center items-center'>
       <div className='w-[300px] py-[10px] px-[13px] bg-[#C6E7FF] rounded shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
            <h2 className='text-center text-[20px] text-[#000B58] font-semibold'>Login</h2>
            <form onSubmit={EnterBtn}>
              {/* ===============Email=========== */}
              <h2 className='text-[13px] font-regular mt-[15px]'>Email :</h2>
                <input onChange={(e)=>Btn(e)}
                placeholder='Enter your email....' 
                className='border-none rounded-[3px] placeholder:text-[14px] pl-[5px] w-full' type="text" />
                <p className='text-[10px] text-[#DF2E2E] font-medium'>{muri}</p>
                {/* ==============Password======= */}
                <h2 className='text-[13px] font-regular mt-[15px]'>Password :</h2>
                <input 
                onChange={(f)=>{setPassword(f.target.value), setprror('')}}
                placeholder='Password' 
                className='border-none rounded-[3px] placeholder:text-[14px] pl-[5px] w-full' type="text" />
                <p className='text-[10px] text-[#DF2E2E] font-medium'>{prror}</p>
                {/* ============Button */}
                <div className='text-center'>
                <button onSubmit={EnterBtn} type='Submit' className='pb-[3px] px-[5px] bg-[#EA4C88] rounded-[8px] mt-[20px] text-center text-[14px] font-bold text-[#F7F7F7]'>Login</button>
                </div>
            </form>
            <p className='text-[10px] mt-[20px]'>I have no account ? <span className='text-[10px] text-[#DC7646] font-medium'>Register</span></p>
       </div>
    </div>
  )
}

export default Login