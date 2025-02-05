import React from 'react'
import SlideUp from '../animations/slideUp'

const Banner = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12">
                            {/*  START HERO DESIGN AREA  */}
                            <SlideUp>
                                <div className="hero-content rmb-25 text-center">
                                    <h1>I'm <span>Gouri</span> Shankar</h1>
                                    <div className="job">
                                        <span>Frontend Developer</span><span>React Developer</span><span>WEB Designer</span>
                                    </div>
                                </div>
                            </SlideUp>
                            {/*  / END HERO DESIGN AREA  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner