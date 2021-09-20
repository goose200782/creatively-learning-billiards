import React from 'react';

function Services() {
    return (
        <div id='services' className='top paddingBottom bottomMar font'>
            <h2>Services</h2>
            <div className='grid3x3'>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                    <h4 className='fontOther'>ICA Training</h4>
                    <p className='grayText'>Provides targeted drills, created by professional instructors, to focus on particular skills to improve weaknesses.</p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                <h4 className='fontOther'>Fundamentals</h4>
                    <p className='grayText'>Our students are taught the fundamentals of Form, Stance and Alignment.</p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                <h4 className='fontOther'>Video Analysis</h4>
                    <p className='grayText font'>Students are filmed shooting various shots to provide a detailed analysis of their mechanics.</p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                <h4 className='fontOther'>Strategy</h4>
                    <p className='grayText font'>Learn how to use Speed Control, Position and Safety Play to improve your game. </p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                <h4 className='fontOther'>Consistency</h4>
                    <p className='grayText font'>Learn the key elements of a repeatable stroke and how to identify the causes of missed shots.</p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
                <div className = 'serviceBox flexCol alignCenter justifyCenter'>
                <h4 className='fontOther'>Results</h4>
                    <p className='grayText font'>Through our use of innovative technology and proven routines we guarantee improvement in performance.</p>
                    {/* <a href="#read" className='blueLink'>Read More</a> */}
                </div>
            </div>
        </div>
    )
}

export default Services
