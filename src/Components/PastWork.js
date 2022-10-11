import React from 'react'
import { MdWork } from 'react-icons/md'
import WodaSoft from '../wodasoft.jpg'
import RealPensive from '../RealPensive.jpg'
import Fusion from '../Fusion.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'
const PastWork = () => {
    return (
        <div id="past-work">
                <h1 align="center" className='heading'>Work Experience<MdWork /></h1>
                <div className='card'>
                    <img src={WodaSoft} alt="wodasoft"/>
                    <h3>WodaSoft Corporation</h3>
                    <p>Role :- Software Developer Engineer Intern</p>
                    <p style={{"marginTop":"0.5rem","color":"blue"}}>September 2022- Current</p>
                    <ul>
                        <li> designing, developing, testing, and debuging responsive web and mobile applications</li><li>
                        Tech Used :- JavaScript, TypeScript, React, GraphQL API, HTML5, CSS3</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/11m3w0ePmBKSA_zhnD5K71BYN_GF9DEKJ/view?usp=sharing" target='_blank' rel="noreferrer">OnBoarding Certificate <HiOutlineExternalLink/></a>
                </div>
                <div className='card'>
                    <img src={RealPensive} alt="Realpensive"/>
                    <h3>RealPensive Pvt. Ltd.</h3>
                    <p>Role :- Frontend developer Intern</p>
                    <p style={{"marginTop":"0.5rem","color":"blue"}}>June 2022- July 2022</p>
                    <ul>
                        <li> Developed user Interface with ReactJs, HTML5 and CSS3 . Used Chakra as css framework , and Pakages such
as Lodash ,ReduxToolkit , react-redux</li><li>
Created Store-front for shops where items are fetched from the database using API and then the items are displyed to the user with many functionality such as filter, best selling etc. User can create account using API and add item to cart and can checkout them.</li>
                            
                    </ul>
                    <a href="https://drive.google.com/file/d/12CzesYbnM-sDA6H_vrY69KysYEOBUXJl/view?usp=sharing" target='_blank' rel="noreferrer">Completion Certificate <HiOutlineExternalLink/></a>
                </div>
                <div className='card'>
                    <img src={Fusion} alt="Fusion" />
                    <h3>Fusion IIIT</h3>
                    <p>Role :-  Software Development Intern</p>
                    <p style={{"marginTop":"0.5rem","color":"blue"}}>May 2022- July 2022</p>
                    <ul>
                        <li> FusionIIIT is the automation of various functionalities, modules and tasks of/for PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur being developed in python3.8 and using Django Webframework</li>
                    </ul>
                    <a href="https://docs.google.com/document/d/1ogEvoSJK5TDgSeX9Zmy7ggmKQfo3KSel/edit?usp=sharing&ouid=115597359274502264530&rtpof=true&sd=true" target='_blank' rel="noreferrer">Completion Certificate <HiOutlineExternalLink/></a>
                </div>
        </div>
    )
}

export default PastWork
