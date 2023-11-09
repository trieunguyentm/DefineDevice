import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        {navigator.platform}
      </div>
      <div>
        {navigator.userAgent}
      </div>
    </div>
  );
}

export default App;
