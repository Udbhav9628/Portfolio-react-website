import '../style.css'
import Map from "./Map";

const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className='ContactmainContent'>
                <div className='contentwidth'>
                    <form className="contentLeft">
                        <h1 id='contactH1'>Contact Me</h1>
                        <input className='contactInput' placeholder='Name' type="text" />
                        <input className='contactInput' placeholder='Email' type="email" />
                        <textarea className='contactInput' placeholder='Write your message' name="Message" id="" cols={30} rows={8}></textarea>
                        <input className='contactButton' type="submit" value="Send" />
                    </form>
                </div>
                <div className="contentRight">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Contact