import React from 'react'
import './About.css'
import Footer from './Footer'
const About = () => {
  return (
    <>
     <section class="about">
         <div class="container">
            <h2 class="lg-heading text-black about-heading">About Us</h2>
            <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates reiciendis expedita quibusdam ipsam alias dolores consectetur minima deserunt reprehenderit!</p>
            <div class="about-wraper">
                <div class="left">
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
            </div>
            <div class="counts">
                <div class="count-item count-item1">
                    <span>2000</span>
                    <p>Plots</p>
                </div>
                <div class="count-item count-item2">
                    <span>500</span>
                    <p>places</p>
                </div>
                <div class="count-item count-item3">
                    <span>400</span>
                    <p>Land</p>
                </div>
                <div class="count-item count-item4">
                    <span>20</span>
                    <p>Buildings</p>
                </div>
            </div>

            <div class="cta-banner">
                <div class="cta-banner-left">
                    <p class="cta-line">What are you waiting for, reach us right now.</p>
                </div>
                <div class="cta-banner-right">
                    <a href="contact.html" class='btn-cta'>Contact Us</a>
                </div>
            </div>
         </div>
         
     </section>
     < Footer />
    </>
  )
}

export default About
