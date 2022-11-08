import "./Question.css";

const Question = () => {

    const onStarHover = (event) => {
        event.target.classList.add("fa-solid");
        event.target.classList.remove("fa-regular");
    }

    return (
        <article className="question">
            <header className="question__header">
                <h2 className="question__h2">Hoe goed ken je React?</h2>
            </header>
            <section className="question__section">
                <p className="question__text">1 Ster staat voor zeer slecht, 5 sterren staan voor zeer goed.</p>
                <div className="question__stars">
                    <i onMouseEnter={onStarHover} className="question__star fa-regular fa-star"></i>
                    <i onMouseEnter={onStarHover} className="question__star fa-regular fa-star"></i>
                    <i onMouseEnter={onStarHover} className="question__star fa-regular fa-star"></i>
                    <i onMouseEnter={onStarHover} className="question__star fa-regular fa-star"></i>
                    <i onMouseEnter={onStarHover} className="question__star fa-regular fa-star"></i>
                </div>
            </section>
            <footer className="question__footer">
                <button className="question__button">⏮️</button>
                <button className="question__button">⏭️</button>
            </footer>
        </article>
    );
}

export default Question;