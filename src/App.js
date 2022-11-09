import "./App.css";
import { Routes, Route } from "react-router-dom";
import Question from "./Question/Question";
import Intro from "./Intro/Intro";
import questions from "./Data/questions";

const App = () => {

    let questionsToBeRendered = questions.questions.map(questionObject => {
        return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
    })
    return(
        <> 
            <Routes>
                <Route path="/" element={ <Intro />}></Route>
                <Route path="/vraag/:number" element={ <Question /> }></Route>
            </Routes>
        </>
    );
}

export default App;