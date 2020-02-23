// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
const electron = require('electron')
const fs = require('fs')

// webview 实例
const wb = document.querySelector('#wb')
const loading = document.querySelector('#loading')

let subWin = null
function openNewWindow() {
    subWin = window.open('popup_page.html', 'baidu')
}

function closeWindow() {
    subWin.close()
}

window.addEventListener('message', (msg) => {
    console.log('接收到的消息：', msg)
})


// wb.addEventListener('did-start-loading', () => {
//     console.log("loading...")
//     loading.innerHTML = "loading..."
// })
// wb.addEventListener('did-stop-loading', () => {
//     console.log("OK .")
//     loading.innerHTML = "OK ."
//     wb.insertCSS(`
//     #su {
//         background: red !important;
//     }
//     `)
//     wb.executeJavaScript(`
//         setTimeout(()=>{
//             alert(document.getElementById('su').value)
//         },2000)  
//     `)
//     wb.openDevTools()
// })


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
