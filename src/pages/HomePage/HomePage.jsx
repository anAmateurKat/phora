import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home">
            <Link to="/reflect" className="home">
                <h1 className="home__title">
                    today's word is{" "}
                    <span className="home__title-arrow">{"->"} </span>
                </h1>
            </Link>
            <p className="home__text">
                Write a reflection on today’s word of the day
            </p>
        </div>
    );
}

export default HomePage;
