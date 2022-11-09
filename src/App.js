import "./App.css";
import { Switch, Route } from "react-router-dom";
import Question from "./Question/Question";
import Intro from "./Intro/Intro";
import questions from "./Data/questions";

const App = () => {

    let questionsToBeRendered = questions.questions.map(questionObject => {
        return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
    })
    return(
        <> 
            <Switch>
                <Route path="/vraag/:number" component={Question}></Route>
                <Route path="/" component={Intro}></Route>
            </Switch>
        </>
    );
}

export default App;