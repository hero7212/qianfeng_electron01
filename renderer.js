// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
const electron = require('electron')
const fs = require('fs')

function getProcessInfo() {
    console.log('getCPUUsage:', process.getCPUUsage())
    console.log('env:', process.env)
    console.log('arch:', process.arch)
}

const dragWrapper = document.getElementById('drag_test')
dragWrapper.addEventListener('drop', (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
        const path = files[0].path
        console.log('path', path)
        const content = fs.readFileSync(path)
        console.log(content.toString())
    }
})

dragWrapper.addEventListener('dragover', (e) => {
    e.preventDefault()
})
