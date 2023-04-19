import '../style.css'
import Navbar from './Navbar'
const line = require('../img/line.png')
const Modal = require('../img/moon.png')

const Hero = () => {
    return (
        <div className='heroContainer'>
            <Navbar />
            <div className="mainContent">
                <div id="mainContentLeft">
                    <h1 id='h1Hero'>Hi, I'm Udbhav</h1>
                    <div id='LineImg'>
                        <img src={line} alt="Line" height={'5px'} />
                        <h2 style={{
                            color: "#da4ea2",
                        }}>Full Stack Web & App Developer</h2>
                    </div>
                    <p style={{
                        fontSize: '1.4rem',
                        color: "lightgray",
                    }}>I create products. Innovation is my passion</p>
                    <button className='hireButton'>View Work</button>
                </div>
                <div id="mainContentRight">
                    <img id='Modal' src={Modal} alt="3d Modal" width={'600px'} height={'600px'} />
                </div>
            </div>
        </div>
    )
}

export default Hero