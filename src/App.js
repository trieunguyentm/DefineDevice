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

// Phiên bản Java
const getJavaVersion = () => {
  const javaVersion = navigator.javaEnabled() ? 'Java đã kích hoạt' : 'Java không kích hoạt';
  console.log('Trạng thái Java:', javaVersion);
  return javaVersion
};

const checkCookieSupport = () => {
  const cookieEnabled = navigator.cookieEnabled ? 'Hỗ trợ cookie' : 'Không hỗ trợ cookie';
  console.log('Khả năng của trình duyệt đối với cookie:', cookieEnabled);
  return cookieEnabled
};

// DPI (điểm ảnh trên mỗi inch)
const getDPI = () => {
  const dpi = window.devicePixelRatio;
  console.log('DPI (điểm ảnh trên mỗi inch):', dpi);
  return dpi
};

const getCPUInfo = () => {
  const cpuInfo = navigator.hardwareConcurrency ? `Loại CPU: ${navigator.hardwareConcurrency} lõi` : 'Không thể xác định loại CPU.';
  console.log(cpuInfo);
  return cpuInfo
};

// Hỗ trợ font
const getFontSupport = () => {
  const supportedFonts = Array.from(document.fonts).map(font => font.family);
  console.log('Hỗ trợ font:', supportedFonts);
  return supportedFonts
};

// Loại GPU và Tên GPU
const getGPUInfo = () => {
  if (navigator.gpu) {
    navigator.gpu.requestAdapter().then(adapter => {
      const gpuInfo = `Loại GPU: ${adapter.name}, Tên GPU: ${adapter.description}`;
      console.log(gpuInfo);
      return gpuInfo
    }).catch((error) => {
      console.error('Lỗi khi lấy thông tin GPU:', error)
      return null
  });
  } else {
    console.error('Trình duyệt không hỗ trợ WebGPU.');
    return null
  }
};

    // Thông tin về Bộ nhớ RAM
    const getRAMInfo = () => {
      const ramInfo = navigator.deviceMemory ? `Lượng RAM có sẵn: ${navigator.deviceMemory} GB` : 'Không thể xác định lượng RAM.';
      console.log(ramInfo);
      return ramInfo
    };

  // Thời gian hệ thống
  const getSystemUptime = () => {
    const startTime = performance.timing.navigationStart;
    const systemUptime = (Date.now() - startTime) / 1000; // Đổi thành giây
    console.log('Thời gian chạy của hệ thống từ khi khởi động:', systemUptime, 'giây');
    return systemUptime
  };


// Thông tin về ổ đĩa cứng
const getDriveInfo = () => {
  if (navigator.storage && navigator.storage.estimate) {
    navigator.storage.estimate().then(estimate => {
      const driveInfo = `Loại ổ đĩa: ${estimate.type}, Dung lượng ổ đĩa: ${estimate.quota / (1024 * 1024 * 1024)} GB`;
      console.log(driveInfo);
      return driveInfo
    }).catch((error) => 
    {
      console.error('Lỗi khi lấy thông tin ổ đĩa cứng:', error)

      return null
    });
  } else {
    console.error('Trình duyệt không hỗ trợ Storage API.');
    return null
  }
};



function App() {
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const listPlugin = getListPlugin();
  const bodyComputedStyle = window.getComputedStyle(document.body)
  getJavaVersion()
  return (
    <div className="App">
      <div><b>user agent:</b>{navigator.userAgent}</div>
      <div><b>platform:</b> {navigator.platform}</div>
      <div><b>height and width:</b> {`${screenHeight}x${screenWidth}`}</div>
      <div><b>list plugin</b></div>
      <div>
        {listPlugin.map((plugin, index) => (
          // <div key={index}>{`${plugin.name} - ${plugin.filename}`}</div>
          <div key={index}>{`${plugin.name}`}</div>
        ))}
      </div>
      <div><b>font size:</b>{bodyComputedStyle.fontSize}</div>
      <div><b>backgroundColor: </b>{bodyComputedStyle.backgroundColor}</div>
      <div><b>webGL:</b>{getWebGL()}</div>
      <div><b>language:</b>{navigator.language || navigator.userLanguage}</div>
      <div><b>java:</b>{getJavaVersion()}</div>
      <div><b>cookie:</b>{checkCookieSupport()}</div>
      <div><b>DPI:</b>{getDPI()}</div>
      <div><b>CPU:</b>{getCPUInfo()}</div>
      <div><b>Font:</b>{getFontSupport().map((font, index)=>{
        return (
          <div key={index}>
            {font}
          </div>
        )
      })}</div>
      <div><b>GPU:</b>{getGPUInfo()}</div>
      <div><b>RAM:</b>{getRAMInfo()}</div>
      <div><b>SystemUpTime:</b>{getSystemUptime()}</div>
      <div><b>DriveInfo:</b>{getDriveInfo()}</div>
    </div>
  );
}

export default App;
