import React from 'react';
import ReactDOM from 'react-dom';

function FooterStyle() {
    return (
        ReactDOM.createPortal(<style>{`
            .Footer__Row p,
            .Footer__Row span {
                display: block;
                margin: 15px 0;
                color: rgb(255 255 255 / 70%);
                font-size: .7rem;
            }

            @media (min-width: 410px) {
                .Footer__Row p,
                .Footer__Row span {
                    font-size: .8rem;
                }
            }

            @media (min-width: 576px) {
                .Footer__Row p,
                .Footer__Row span {
                    font-size: 1rem;
                }
            }
            
        `}</style>, document.head)
    );
}

function Footer() {
    return (
        <footer className='bg-[#031B34] pt-28'>
            <div>
                <h2 className="main__text text-2xl sm:text-4xl md:text-6xl w-11/12 xs:w-[70%] mb-8 mx-auto text-center sm:leading-[75px] font-extrabold">Do you want to step in to the future before others</h2>
                <button className=' bg-transparent border-2 border-white border-solid py-[8px] px-[12px] sm:py-[10px] text-xs xs:text-sm sm:text-base sm:px-[16px] block mx-auto'>Request Early Access</button>
            </div>
            <div className='flex container pt-20 pb-14'>
                <div className='Footer__Row w-1/3'>
                    <h4 className='font-bold text-base sm:text-lg'>Links</h4>

                    <span>Overons</span>
                    <span>Social Media</span>
                    <span>Counters</span>
                    <span>Contact</span>
                </div>
                <div className='Footer__Row w-1/3'>
                    <h4 className='font-bold text-base sm:text-lg'>Company</h4>
                    
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Contact</span>
                </div>
                <div className='Footer__Row w-1/3'>
                    <h4 className='font-bold text-base sm:text-lg'>Get in Touch</h4>

                    <span>Crechterwoord K12<br />182 DK Alknjkcb</span>
                    <span>085-132567</span>
                    <span>info@payme.net</span>
                </div>
            </div>
            <div className='text-center text-xs xs:text-sm sm:text-base py-6 tracking-wider'>©2022 GPT-3. All rights reserved. Coding By Yousef Alaa</div>
            <FooterStyle />
        </footer>
    );
}

export default Footer;