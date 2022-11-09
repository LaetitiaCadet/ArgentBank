import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";

/**
 * It returns a div containing a paragraph with the text "404 Not found" and a paragraph with the text
 * "Cette page n'existe pas !", followed by an unordered list containing a list item with a link to the
 * home page
 * @returns A React component.
 */
const NotFound = () => {
    return (
        <div>
            <header className="App-header">
                <Navbar></Navbar>
            </header>
            <main id="homePage-block" className='row'>
                <section className='text-center'>
                <h1>404 Not found</h1>
                <p>Cette page n'existe pas!</p>
                <ul>
                    <li>
                    <Link to="/"><p>Revenir à la page d'accueil</p></Link>
                    </li>
                </ul>
                </section>  
            </main>

        </div>
    )
}


export default NotFound;