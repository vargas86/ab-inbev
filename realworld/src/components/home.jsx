import React from 'react';
import Banner from './home/banner';
import Feed from './home/banner';
import Preview from './home/articlePreview';
import SideBar from './home/sidebar';

//import Navbar from '../nav/navbar';
//import NavbarMobile from '../nav/navbarMobile';
//import Footer from '../footer/footer'; 




export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <MobileHomeHeader /> */}
            <div class="home-page">
                    
                    <Banner />

                <div class="container page">
                    <div class="row">
                        <div class="col-md-9">
                            
                            <Feed />
                            <Preview />
                        
                        </div>

                        <div class="col-md-3">
                            
                            <SideBar />
                            
                        </div>

                    </div>
                </div>

            </div>
            {/* <NavbarMobile /> */}


        </>

    );
}