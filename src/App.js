
import './App.css';
import Header from './components/Header/Header';
import Tindercards from './components/TinderCards/Tindercards';

function App() {
  return (
    <div className="app">
      <Header/> {/*  header */ }
      <Tindercards/>{/*tinder cards*/}
      {/* swipe buttons */}
    </div>
  );
}

export default App;
