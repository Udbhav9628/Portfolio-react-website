import '../style.css'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='heroContainer'>
            <Navbar />
            <div className="mainContent">
                <div id="mainContentLeft">
                    <h1>Think. Make. Solve.</h1>
                    <div id="whatweDo">
                        <img src="" alt="" />
                    </div>
                    <div id="discription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, officia.</p>
                        <button>Hello</button>
                    </div>
                </div>
                <div id="mainContentRight">Right</div>
            </div>
        </div>
    )
}

export default Hero