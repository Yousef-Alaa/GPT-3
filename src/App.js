import React from 'react';
import { Blog, Features, Footer, Header, WhatGPT3 } from './containers';
import { CTA, Navbar, Companies } from './components';

function App() {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Companies />
            <WhatGPT3 />
            <Features />
            <CTA />
            <Blog />
            <Footer />
        </>
    );
}

export default App;