import './App.css';

function App() {
  const screenHeight = window.screen.height
  const screenWidth = window.screen.width

  return (
    <div className="App">
      <div>
        {navigator.platform}
      </div>
      <div>
        {navigator.userAgent}
      </div>
      <div>
        {`${screenHeight}x${screenWidth}`}
      </div>
    </div>
  );
}

export default App;
