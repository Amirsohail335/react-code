
import './App.css';
import CreateTweet from './components/CreateTweet';
import Tweet from './components/Tweet';

const name = "Amir"; 

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet/>
      <Tweet author={name} message="this is the actually tweet"/>
      
      
    </div>
  );
}

export default App;
