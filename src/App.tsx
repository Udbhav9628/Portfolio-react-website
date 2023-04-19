import Hero from './components/Hero'
import Wroks from './components/Wroks'
import Contact from './components/Contact'
import './style.css'

const App = () => {
    return (
        <div className='container'>
            <Hero />
            <Wroks />
            <Contact />
        </div>
    )
}

export default App