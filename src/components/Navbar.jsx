import world from "../../public/images/world.png"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={world} className="img-world"/>
                <p>my travel journal.</p>
            </div>
        </>
    )
}