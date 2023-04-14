import Hero from './components/Hero'
import Who from './components/Who'
import Wroks from './components/Wroks'
import Contact from './components/Contact'
import './style.css'

const App = () => {
    return (
        <div className='container'>
            <Hero />
            <Who />
            <Wroks />
            <Contact />
        </div>
    )
}

export default App