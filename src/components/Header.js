import globe from "../images/globe.png"

export default function Header() {
    return(
        <nav>
            <img src= {globe} className="globe" />
            <p className = "title">my travel journal.</p>
        </nav>
    )
}