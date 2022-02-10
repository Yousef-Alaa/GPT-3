import React from 'react';
import Flip from 'react-reveal/Flip';

function CTA() {

    let style = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        border: '1px solid #000000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px'
    }

    let btnStyle = {
        background: '#000000',
        borderRadius: '40px',
        border: '2px solid #000',
        transition: '.5s'
    }

    return (
        <Flip top>
        <div className="container h-[160px] pt-8 sm:pt-0 sm:h-[125px] md:h-[170px] px-8 md:px-10 items-center my-10 sm:flex justify-between" style={style}>
            <div className='text-black'>
                <p className='md:text-sm text-xs'>Request Early Access to Get Started</p>
                <h3 className='font-extrabold text-base xs:text-xl md:text-2xl'>Register today & start exploring the endless possiblities.</h3>
            </div>
            <button className='w-[100px] sm:w-[170px] mt-2 sm:mt-0 text-xs sm:text-sm md:text-sm md:w-[190px] h-[35px] sm:h-[45px] md:h-[60px] hover:!border-[#002853] hover:!bg-[#d381ad]' style={btnStyle}>Get Started</button>
        </div>
        </Flip>
    );
}

export default CTA;