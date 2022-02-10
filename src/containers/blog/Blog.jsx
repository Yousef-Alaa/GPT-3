import React from 'react';
import ReactDom from 'react-dom';
import BlogImg1 from './blogImg1.png';
import BlogImg2 from './blogImg2.png';
import BlogImg3 from './blogImg3.png';
import BlogImg4 from './blogImg4.png';
import BlogImg5 from './blogImg5.png';

function BlogStyle() {
    return (
        ReactDom.createPortal(<style>{`
        
        .blogs {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .blogs > article:first-of-type {grid-row: 1 / 3;}

        .blogs article {
            background: #042C54;
            position: relative
        }

        .blogs article div {padding: .65rem;}
        .blogs article img {background: var(--body-bg);max-width: 100%}
        .blogs article span:first-of-type {font-size: 11px;color: rgb(255 255 255 / 85%);}
        .blogs article h3 {
            font-size: .8rem;
            font-weight: 800;
            line-height: 18px;
            margin: 10px 0 14px;
        }
        .blogs article span:last-of-type {font-size: 11px;color: rgb(255 255 255 / 70%);}
        .blogs article .specialSpan {
            position: absolute;
            bottom: 0.65rem;
        }

        @media (min-width: 420px) {
            .blogs article div {padding: .65rem 1.2rem;}
            .blogs article h3 {
                font-size: 1rem;
                font-weight: 800;
                line-height: 20px;
                margin: 10px 0 14px;
            }
        }

        @media (min-width: 768px) {
            .blogs {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        `}</style>, document.head)
    );
}

function Blog() {
    return (
    <div id='library' className="container py-20">
        <h2 className="main__text text-2xl sm:text-4xl md:text-6xl mb-14 md:!leading-[75px] font-extrabold">A lot is happening,<br />We are blogging about it.</h2>
        <div className='blogs'>
            <article>
                <img src={BlogImg1} alt='Blog 1' />
                <div>
                <span>Sep 26, 2021</span>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <span className='specialSpan'>Read Full Article</span>
                </div>
            </article>
            <article>
                <img src={BlogImg2} alt='Blog 2' />
                <div>
                <span>Sep 26, 2021</span>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <span>Read Full Article</span>
                </div>
            </article>
            <article>
                <img src={BlogImg3} alt='Blog 3' />
                <div>
                <span>Sep 26, 2021</span>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <span>Read Full Article</span>
                </div>
            </article>
            <article>
                <img src={BlogImg4} alt='Blog 4' />
                <div>
                <span>Sep 26, 2021</span>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <span>Read Full Article</span>
                </div>
            </article>
            <article>
                <img src={BlogImg5} alt='Blog 5' />
                <div>
                <span>Sep 26, 2021</span>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <span>Read Full Article</span>
                </div>
            </article>
        </div>
        <BlogStyle />
    </div>
    );
}

export default Blog;