import React from 'react';
import './App.css';

const getListPlugin = () => {
  let listPlugin = [];
  let plugins = navigator.plugins;
  if (plugins.length > 0) {
    for (let i = 0; i < plugins.length; i++) {
      listPlugin.push(plugins[i]);
    }
  }
  return listPlugin;
};

const getWebGL = () => {
  var canvas = document.createElement("canvas");
  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  var renderer = gl.getParameter(gl.RENDERER);
  return renderer
}

function App() {
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const listPlugin = getListPlugin();
  const bodyComputedStyle = window.getComputedStyle(document.body)
  getWebGL()
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
      <div>{getWebGL()}</div>
    </div>
  );
}

export default App;
