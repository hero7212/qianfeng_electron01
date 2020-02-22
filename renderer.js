// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
const electron = require('electron')

function getProcessInfo() {
    console.log('getCPUUsage:', process.getCPUUsage())
    console.log('env:', process.env)
    console.log('arch:', process.arch)
}
