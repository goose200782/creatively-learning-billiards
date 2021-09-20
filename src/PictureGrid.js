import React from 'react';

function PictureGrid() {
    const showh2 = (event) => {
        document.getElementById('head1').style.display = 'block';
    }

    const hideh2 = (event) => {
        document.getElementById('head1').style.display = 'none';
    }

    const showh3 = (event) => {
        document.getElementById('head2').style.display = 'block';
    }

    const hideh3 = (event) => {
        document.getElementById('head2').style.display = 'none';
    }

    const showh4 = (event) => {
        document.getElementById('head3').style.display = 'block';
    }

    const hideh4 = (event) => {
        document.getElementById('head3').style.display = 'none';
    }

    return (
        <div className='gridContainer white font borderRadius'>
            <div className='box1 hoverCover flexCol alignCenter' onMouseEnter={showh2} onMouseLeave={hideh2}><h2 id='head1' className='red textShadow'>Cuts shots going almost in??</h2></div>
            <div className='box2 hoverCover flexCol alignCenter'onMouseEnter={showh3} onMouseLeave={hideh3}><h3 id='head2' className='yellow textShadow'>Bank shots a diamond off??</h3></div>
            <div className='box3'>
                <h3 className='white font'>We Can Help!</h3>
                <p className='smaller'>Each student of Creatively Learning Billiards receives personalized instruction tailored to their own particular needs.</p>
                <a href='#getQuote'><button className='blueBtn bttn square_btn'>Free Consultation</button></a>
            </div>
            <div className='box4 hoverCover flex alignCenter'onMouseEnter={showh4} onMouseLeave={hideh4}><h4 id='head3' className='orange textShadow'>Cue ball missing the desired landing zone??</h4></div>
        </div>
    )
}

export default PictureGrid
