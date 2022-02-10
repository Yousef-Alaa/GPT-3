import React from 'react';
import Roll from 'react-reveal/Roll';
import Face from './face.svg';
import Peoples from './peoples.png'

function Header({children}) {
    return (
    <header id='home' style={{ background: 'linear-gradient(135deg, rgba(0, 40, 83, 1) 14%, rgba(4, 12, 24, 1) 40%, rgba(4, 12, 24, 1) 75%, rgba(7, 45, 86, 1) 100%)' }} className='md:h-screen'>
        <div className="container relative h-full pt-[100px] md:pt-[50px]">
            {children}
            <div className="flex flex-wrap text-center md:text-left items-center h-full">
                <Roll left>
                <div className="w-full md:w-2/4">
                    <h1 className="main__text text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Let’s Build Something amazing with GPT-3 OpenAI
                    </h1>
                    <p className='text-primary text-sm xs:text-base md:text-lg lg:text-xl mb-7 w-10/12 md:w-full mx-auto'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <form className='flex w-full'>
                        <input 
                        type='text' style={{borderRadius: '5px 0px 0px 5px'}}
                        className='bg-[#052D56] w-[75%] lg:w-[80%] text-primary outline-none p-2'
                        />
                        <button type='submit' style={{borderRadius: '0px 5px 5px 0px'}} className='w-[25%] lg:w-[20%] text-sm sm:text-base bg-orange'>Get Started</button>
                    </form>
                    <div className='flex items-center mt-5'>
                        <img className='w-[140px] h-[30px] xs:w-[180px] xs:h-[38px]' src={Peoples} alt='Peoples' />
                        <p className='text-xs ml-2'>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                </Roll>
                <Roll right>
                <div className="w-full md:w-2/4 py-5">
                    <img src={Face} className=' w-10/12 mx-auto md:w-full xl:w-11/12' alt='Face Ai' />
                </div>
                </Roll>
            </div>
        </div>
    </header>
    );
}

export default Header;