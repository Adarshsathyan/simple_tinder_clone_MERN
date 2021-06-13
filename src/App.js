
import './App.css';
import Header from './components/Header/Header';
import Tindercards from './components/TinderCards/Tindercards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header/> {/*  header */ }
      <Tindercards/>{/*tinder cards*/}
      <SwipeButtons/>{/* swipe buttons */}
    </div>
  );
}

export default App;
