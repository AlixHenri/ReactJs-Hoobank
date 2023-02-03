import React from 'react'
import supportImg from '../assets/support.jpg'
import PhoneIcon from '../assets/phone.svg'
import MicrochipIcon from '../assets/microchip.svg'
import HeadsetIcon from '../assets/headset.svg'

const Support = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img src={supportImg} alt="support" className='w-full h-full object-cover mix-blend-overlay'/>
        </div>
            
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Suporte</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Encontre a equipe certa para você</h3>
                <p className='py-4 text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quisquam placeat fugiat, dolore repellendus numquam enim aliquam animi magni quibusdam?</p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 py-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <img src={PhoneIcon} alt="/" className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Vendas</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut magnam temporibus quia natus at dolor veritatis provident sit odit.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact us <span className='w-5 ml-2'>&#129046;</span></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <img src={HeadsetIcon} alt="/" className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Suporte Tecnico</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut magnam temporibus quia natus at dolor veritatis provident sit odit.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact us <span className='w-5 ml-2'>&#129046;</span></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <img src={MicrochipIcon} alt="/" className='w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut magnam temporibus quia natus at dolor veritatis provident sit odit.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact us <span className='w-5 ml-2'>&#129046;</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support