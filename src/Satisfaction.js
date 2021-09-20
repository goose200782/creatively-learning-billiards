import React,  { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Satisfaction() {
    const [icon,setIcon] = useState(()=>(
        <span className='red big bold' id='iconSpan'>
            <ExpandMoreIcon id='icon'/>
        </span>));

    useEffect(() => {
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                setIcon(()=>(
                    <span className='red big bold' id='iconSpan'>
                        <ExpandMoreIcon id='icon'/>
                    </span>))
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                setIcon(()=>(
                    <span className='red big bold' id='iconSpan'>
                        <ExpandLessIcon id='icon'/>
                    </span>))
            } 
        });
        }
    }, [])

    
    const click1 = (event) => {
        
        
    }

    return (
        <div className='satisfaction top flex font black alignCenter borderRadius'>

            <div className='left flexCol'>
                <h4>At <span className='yellow big bold'>Creatively</span><span className='orange big bold'> Learning</span><span className='red big bold'> Billiards</span></h4>
                <h4 className=''>Improvement is Guaranteed!</h4>
                <p className='blueText'>We treat all of our students with the respect they deserve, and we won't stop until they are satisfied.</p>
                <a href='#services'><button className='blueBtn bttn square_btn'>View All Services</button></a>
            </div>   
            <ul className='right flexCol'>
                <li>
                    <button id='collapse1' className="collapsible borderRadiusTop" onClick={click1}>{icon} Illuminated Cueing Arts Training System</button>
                    <div className="content borderRadiusBottom">
                        <p className='small'>We offer a full spectrum of professionally prepared modules utilizing the ICA training system to enhance your performance and skills.</p>
                    </div>
                </li>
                <li>
                    <button id='collapse2' className="collapsible borderRadiusTop">{icon} Mobile and Zoom lessons available</button>
                    <div className="content borderRadiusBottom">
                        <p className='small'>Connect with us locally in the general New Orleans area or online via Zoom.</p>
                    </div>
                </li>
                <li>
                    <button id='collapse3' className="collapsible borderRadiusTop">{icon} Lessons for all skill levels</button>
                    <div className="content borderRadiusBottom">
                        <p className='small'>Customized lessons for kids, amateurs and pro level players.</p>
                    </div>
                </li>
            </ul>  

        </div>
    )
}

export default Satisfaction
