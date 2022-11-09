import "./App.css";
import { Routes, Route } from "react-router-dom";
import Question from "./Question/Question";

const App = () => {
    return(
        <Routes>
            <Route path="/vraag" element={ <Question /> }></Route>
        </Routes>
    );
}

export default App;