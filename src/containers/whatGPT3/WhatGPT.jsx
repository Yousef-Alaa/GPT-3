import React from 'react';
import Bounce from 'react-reveal/Bounce';


function WahatGpt() {
    let style = {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        background: 'radial-gradient(circle at 0% 0%, #1b78de -3%, #042c54 17%, rgb(4, 44, 84) 92%, #1b78de 99%, #1b78de 100%, #1b78de 100%)'
    }
    return (<div id='WhatisGPT?' className='py-7'>
        <div className='container sm:h-[75vh] flex flex-col justify-between pt-8 pb-6 md:py-12 px-12' style={style}>
            <div className='sm:text-left mb-4 sm:mb-0'>
                <h2 className='grad__dash text-lg md:text-2xl font-extrabold mb-3 md:mb-5 sm:w-2/6'>What is GPT-3</h2>
                <p className='text-primary inline-block ml-auto text-xs md:text-base sm:w-4/6'>
                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                </p>
            </div>
            <div className='sm:flex mb-6 sm:mb-0'>
                <h3 className='main__text mb-4 sm:mb-0 sm:w-3/6 md:w-2/4 text-2xl md:text-4xl'>The possibilities are beyond your imagination</h3>
                <span className='text-second sm:w-3/6 text-sm md:text-base text-right'>Explore The Library</span>
            </div>
            <div className='sm:flex justify-between'>
                <Bounce right cascade>
                <div className='sm:w-[30%] mb-6 sm:mb-0'>
                    <h3 className='grad__dash text-lg md:text-2xl font-extrabold mb-3 md:mb-5'>Chatbots</h3>
                    <p className='text-primary  text-xs md:text-base'>
                    We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
                    </p>
                </div>

                <div className='sm:w-[30%] mb-6 sm:mb-0'>
                    <h3 className='grad__dash text-lg md:text-2xl font-extrabold mb-3 md:mb-5'>Knowledgebase</h3>
                    <p className='text-primary  text-xs md:text-base'>
                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                    </p>
                </div>
                <div className='sm:w-[30%] mb-0 sm:mb-0'>
                    <h3 className='grad__dash text-lg md:text-2xl font-extrabold mb-3 md:mb-5'>Education</h3>
                    <p className='text-primary  text-xs md:text-base'>
                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                    </p>
                </div>
                </Bounce>
            </div>
        </div>
    </div>);
}

export default WahatGpt;