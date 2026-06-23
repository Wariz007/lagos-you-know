import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <img src="/hero.jpg" alt="Lagos at night" className="hero-image" />
            <div className="hero-overlay">
                <span>Lagos, Nigeria</span>
                <h1>Lagos You Know</h1>
            </div>
        </div>
    )
}