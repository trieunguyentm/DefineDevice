import React from 'react';
import './App.css';

const setListPlugin = () => {
  let listPlugin = [];
  let plugins = navigator.plugins;
  if (plugins.length > 0) {
    for (let i = 0; i < plugins.length; i++) {
      listPlugin.push(plugins[i]);
    }
  }
  return listPlugin;
};


function App() {
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const listPlugin = setListPlugin();

  return (
    <div className="App">
      <div>{navigator.platform}</div>
      <div>{`${screenHeight}x${screenWidth}`}</div>
      <div>
        {listPlugin.map((plugin, index) => (
          <div key={index}>{`${plugin.name} - ${plugin.filename}`}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
