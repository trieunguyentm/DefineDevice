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


// const getDefaultBackgroundColor = () => {
//   const bodyComputedStyle = window.getComputedStyle(document.body)
//   console.log(bodyComputedStyle.fontSize)
//   console.log(bodyComputedStyle.backgroundColor)
// }


function App() {
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const listPlugin = setListPlugin();
  const bodyComputedStyle = window.getComputedStyle(document.body)
  return (
    <div className="App">
      <div>{navigator.platform}</div>
      <div>{`${screenHeight}x${screenWidth}`}</div>
      <div>
        {listPlugin.map((plugin, index) => (
          // <div key={index}>{`${plugin.name} - ${plugin.filename}`}</div>
          <div key={index}>{`${plugin.name}`}</div>
        ))}
      </div>
      <div>{bodyComputedStyle.fontSize}</div>
      <div>{bodyComputedStyle.backgroundColor}</div>
    </div>
  );
}

export default App;
