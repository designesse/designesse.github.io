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

            <section className="logo-animation pos-relative">
                <img className="block center opacity-01" src={malinaLogo} alt="malina malina logo"/>

                <div>
                {/*// <!-- Left upside down V -->*/}
                <svg className="block left-to-center-1 pos-absolute" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="2,110 54,4 106,110" fill="none" stroke="#272890" strokeWidth="3"/>
                </svg>
                {/*// <!-- Shadow of Left upside down V >*/}
                {/*// <polyline points="4,108 54,6 104,108" fill="#000" opacity=".07"/> -->*/}

                {/*// <!-- Right upside down V -->*/}
                <svg className="block right-to-center-1 pos-absolute" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="82,110 134,4 186,110" fill="none" stroke="#272890" strokeWidth="3"/>
                </svg>
                {/*</div>*/}
                {/*// <!-- Shadow of Right upside down V >*/}
                {/*// <polyline points="84,108 134,4 184,108" fill="#000" opacity=".07" /> -->*/}

                {/*// <!-- Left/Right upside down V intersection -->*/}
                <svg className="block center appear-2 pos-absolute cross-1" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="84.5,108 94,89 103.5,108" fill="#ddd"/>
                </svg>

                {/*// <!-- Top V -->*/}
                <svg className="block pos-absolute top-to-bottom-3" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="49,14 94,104 139,14" fill="none" stroke="#272890" strokeWidth="3"/>
                </svg>

                {/*// <!-- Left + Top intersection -->*/}
                <svg className="block center pos-absolute appear-4" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="89.5,92 50.5,14.5 54,7 92.5,86" fill="#aaa"/>
                </svg>

                {/*// <!-- Right + Top intersection -->*/}
                <svg className="block center pos-absolute appear-4" viewBox="0 0 188 108" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="98.5,92 95.5,86 134,7 137.5,14.5" fill="#aaa"/>
                </svg>

                {/*// <!-- Left + Right + Top diamond intersection -->*/}
                <svg className="block center pos-absolute appear-5" viewBox="0 0 188 108"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon points="94,101 91,95 94,89 97,95" fill="#ffa500" opacity=".9"/>
                </svg>
                </div>
            </section>

            <main id="content">
                <p>
                    Malina believes <span className="text-to-contrast-6">magic </span> happens at the
                    intersection of <span className="text-to-contrast-6"> functionality </span>,
                    <span className="text-to-contrast-6"> beauty </span> and <span
                    className="text-to-contrast-6"> meaning</span>.
                </p>

                <p>
                    To practice her creative and technical skills, she has lately been building <a
                    href="https://processes.vercel.app/" target="_blank">
                    processes </a> and <a href="https://habits-today-nine.vercel.app/" target="_blank"> habits </a> tools.
                </p>
                <p>
                    She also enjoys collaborating, sharing ideas and learning new things and can be accessible through
                    <a href="https://www.linkedin.com/in/malinar" target="_blank"> LinkedIn </a> and <a
                    href="mailto:malina.randrianavony@gmail.com" target="_blank"> email </a>.
                </p>
            </main>

            <footer>
                <section className="right">
                    Designed & Coded by <img src={malinaLogo} className="logo-s" alt="malina malina logo"/><span className="display-hidden">M</span>alina Randrianavony.
                </section>
            </footer>
        </>
    )
}

export default App
