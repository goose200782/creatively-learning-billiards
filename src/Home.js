import React from 'react';

function Home() {
    return (
        <div  className='Banner white font flexCol'>
                <div id='home'>
                    <div className='leftDiv alignCenter'>
                        <h1 className='marTop red bold fontOther2 textShadow' id='companyName'><span className='yellow'>Creatively</span><span className='orange'> Learning</span> Billiards</h1>
                        <p className='textShadow' id='homeP'>
                        Billiard lessons for all skill level players from kids, adults, amateur and pros! Using modern technology to create better Pool Players & Champions⚪🎱🔴
                            {/* Our trainers deliver outstanding service and support at competitive prices.
                            All of our work is guaranteed and complies with the highest industry standards. */}
                        </p>
                    </div>   
                </div>
                <div className='parent'>
                    <div className='quote flex alignCenter spaceBetween'>
                        <h3 className='white font ml50 bold'>Where Champions Are Made!</h3>
                        <a href='#getQuote'><button className='bttn square_btn' id='greenBtn'>Schedule free consoltation</button></a>
                    </div>
                </div>
        </div>
    )
}

export default Home
