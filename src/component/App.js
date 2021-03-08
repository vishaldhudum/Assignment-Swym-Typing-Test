import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Switch, Route } from "react-router-dom";

import Home from './home/Home'
import TypingChallengeContainer from './typingChallengeContainer/TypingChallengeContainer'
import Results from './results/Results'

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <h1 className="main-heading">Typing test</h1>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/typingChallenge" component={TypingChallengeContainer} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    </HashRouter >
  );
}

export default App;
