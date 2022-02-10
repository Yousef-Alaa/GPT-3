import React from 'react';
import Roll from 'react-reveal/Roll';
import Feature from './Feature.png';

function Features() {
    return (<>
    <div id='openai' className='container justify-between md:flex py-14 md:py-20'>
        
        <div className='w-full sm:w-4/5 md:w-2/5 mb-10 sm:mb-8 md:mb-0'>
            <h2 className='main__text text-2xl xs:text-3xl sm:text-4xl leading-8 sm:leading-10 mb-6 sm:mb-8 font-extrabold'>
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h2>
            <p className='text-second text-sm xs:text-base'>Request Early Access to Get Started</p>
        </div>

        <div className='md:w-2/4'>
        <Roll right cascade>
            <div className='xs:flex justify-between mb-8'>
                <h3 className='grad__dash mb-4 xs:mb-0 xs:w-2/5 text-xl font-extrabold'>Improving end<br/>distrusts instantly</h3>
                <p className='text-primary xs:w-3/5 text-sm'>
                From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
                </p>
            </div>
            <div className='xs:flex justify-between mb-8'>
                <h3 className='grad__dash mb-4 xs:mb-0 xs:w-2/5 text-xl font-extrabold'>Become the<br/>tended active</h3>
                <p className='text-primary xs:w-3/5 text-sm'>
                Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                </p>
            </div>
            <div className='xs:flex justify-between mb-8'>
                <h3 className='grad__dash mb-4 xs:mb-0 xs:w-2/5 text-xl font-extrabold'>Message or<br/>am nothing</h3>
                <p className='text-primary xs:w-3/5 text-sm'>
                Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
                </p>
            </div>
            <div className='xs:flex justify-between mb-8'>
                <h3 className='grad__dash mb-4 xs:mb-0 xs:w-2/5 text-xl font-extrabold'>Really boy<br/>law county</h3>
                <p className='text-primary xs:w-3/5 text-sm'>
                Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
                </p>
            </div>
        </Roll>
        </div>
    </div>
    
    <div id='casestudies' className='container justify-between items-end md:flex pt-5 pb-4 sm:pb-10 md:pb-20'>
        <img src={Feature} className='w-full xs:w-3/5 md:w-2/4 mb-7 md:mb-0' alt='Feature' />
        <div>
            <p className='text-[#71E5FF] text-base font-medium'>Request Early Access to Get Started</p>
            <h2 className='main__text w-3/4 sm:w-full text-2xl sm:text-4xl leading-[2.8rem] my-4 sm:my-8 font-extrabold'>The possibilities are beyond your imagination</h2>
            <p className='text-primary text-sm sm:text-base leading-6 sm:leading-8'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='text-second text-sm sm:text-base mb-8 sm:mb-10 mt-4 sm:mt-6'>Request Early Access to Get Started</p>
        </div>
    </div>
    </>);
}

export default Features;