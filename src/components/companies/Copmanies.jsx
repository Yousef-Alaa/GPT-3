import React from 'react';
import Slide from 'react-reveal/Slide';

function Journey({ children, index }) {
    if (index === 0 ) {
        return <Slide top>{children}</Slide>
    } else if (index === 1 ) {
        return <Slide right>{children}</Slide>
    } else if (index === 2 ) {
        return <Slide>{children}</Slide>
    } else if (index === 3 ) {
        return <Slide left>{children}</Slide>
    } else if (index === 4 ) {
        return <Slide bottom>{children}</Slide>
    }
}

function Companies() {
    let comps = ['google', 'slack', 'atlassian', 'dropbox', 'shopify'];

    return (
        <div className="container flex-wrap pt-14 pb-5 flex justify-evenly md:justify-center">
            {
                comps.map((item, index) => (
                <Journey index={index}>
                <img key={index} alt={`Company ${index + 1}`}
                src={`/images/companies/${item}.png`}
                className='w-[50px] sm:w-[85px] mb-2 mx-3' 
                /></Journey>))
            }
        </div>
    );
}

export default Companies;