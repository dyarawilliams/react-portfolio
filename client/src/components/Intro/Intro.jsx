import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

const Intro = () => {
    return (
        <section className='intro section' id="home">
            <div className="intro__container container grid">
                <div className="intro__content grid">
                    <div className="intro-left">
                        <div className="intro-title">
                            <span>Hi! My name is</span>
                            <h1>D'yara Williams</h1>
                            <span>I'm a community-taught Software Engineer based in South Carolina with experience in Full Stack Web Development.</span>
                        </div>
                        <a href="#contact" className="intro-btn btn">Say Hello</a>
                        <div className="intro-icons">
                            <a href="https://www.github.com/dyarawilliams" className="intro__social-icon" target="_blank" alt="Dyara Github" rel="noreferrer">
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dyara-williams" className="intro__social-icon" target="_blank" alt="Dyara Linkedin" rel="noreferrer">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="https://instagram.com/xchaoticrage" className="intro__social-icon" target="_blank" alt="Dyara Instagram" rel="noreferrer">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="intro-right">
                        <div className="intro-img"></div>
                        <div className="intro-img__float0">
                            <img src={glassesimoji} alt='Glasses Emoji' />
                        </div>
                        <div className="intro-img__float1">
                            <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                        </div>
                        <div className="intro-img__float2">
                            <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
                        </div>
                        {/* Blur Divs */}
                        <div className="blur" style={{ 
                            background: "var(--primary-color)",
                            top: '-4rem',
                            left: '11rem',
                        }}>
                        </div>
                        <div className="blur" style={{
                            background: 'pink',
                            top: '17rem',
                            left: '-9rem',
                        }}>
                        </div>
                    </div>
                </div>
                <div className="intro__scroll" >
                    <a href="#about" className='intro__scroll-btn btn-flex'>
                        <span className="intro__scroll-name">Scroll Down</span>
                        <i className="uil uil-angle-down intro__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;