import { Link } from "react-router-dom";

export default function Rooms() {
    return(
        <main className="main">
            <Link to="/lobby" className="main__btn">
                Room
            </Link>
        </main>
    )
}