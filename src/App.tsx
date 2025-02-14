import malinaLogo from './assets/malina-malina-logo.svg'
import './App.css'

function App() {
    return (
        <>
            <header>
                <h1>Malina Randrianavony</h1>
                <h2>
                    <span className="nowrap"> Engineer by trade | </span>
                    <span className="nowrap"> Designer at &#9829; | </span>
                    <span className="nowrap"> Artist on occasions</span>
                </h2>

            </header>

            <img className="center logo-m opacity-01" src={malinaLogo} alt="malina malina logo"/>

            <main id="content">
                <p>
                    Malina believes <span className="color-bold-trans">magic </span> happens at the
                    <span className="color-bold-trans"> intersection </span> of
                    <span className="color-bold-trans"> functionality </span>,
                    <span className="color-bold-trans"> beauty </span> and <span className="color-bold-trans"> meaning</span>.
                </p>

                <p>
                    To practice her creative and technical skills, she has lately been building <a href="https://processes.vercel.app/">
                    processes </a> and <a href="https://habits-today-nine.vercel.app/"> habits </a> tools.
                </p>
                <p>
                     She also enjoys collaborating, sharing ideas and learning new things and can be accessible through
                    <a href="https://www.linkedin.com/in/malinar"> LinkedIn </a> and <a href="mailto:malina.randrianavony@gmail.com"> email </a>.
                </p>
            </main>

            <footer>
                <section className="right">Designed & Coded by <img src={malinaLogo} className="logo-s" alt="malina malina logo"/><span className="display-hidden">M</span>alina Randrianavony.
                </section>
            </footer>
        </>
    )
}

export default App
