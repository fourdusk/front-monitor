<template>
  <link
    v-if="resourceVisible"
    href="https://sponsors.vuejs.org/images/notfound.css"
    rel="stylesheet"
  />
  <img width="100" v-if="resourceVisible" src="https://sponsors.vuejs.org/images/notfound.png" />
  <button @click="handleSyntaxError">语法错误</button>
  <button @click="handleTypeError">类型错误</button>
  <button @click="handleReferenceError">引用错误</button>
  <button @click="handleRangeError">越界错误</button>
  <button @click="handleResourceError">资源加载错误</button>
  <button @click="handlePromiseError">Promise 错误</button>
</template>

<script setup>
import csijs from 'csijs'
import { ref } from 'vue'

new csijs({
  feID: 'fe',
  report: lines => {
    console.log(lines)
  }
})
const resourceVisible = ref(false)
const handleSyntaxError = () => {
  // let a,;
}

const handleTypeError = () => {
  let b
  b.trim()
}

const handleReferenceError = () => {
  c()
}

const noop = () => {
  noop()
}
const handleRangeError = () => {
  noop()
}

const handleResourceError = () => {
  const scriptSrc = 'https://sponsors.vuejs.org/images/notfound.js'
  const oldScriptElList = document.querySelectorAll('script')
  for (const el of oldScriptElList) {
    el && el.getAttribute('src') === scriptSrc && el.parentNode.removeChild(el)
  }
  const scriptEl = document.createElement('script')
  scriptEl.setAttribute('src', scriptSrc)
  document.body.append(scriptEl)
  resourceVisible.value = !resourceVisible.value
}

const handlePromiseError = () => {
  fetch('https://tuia.cn/test')
}

// 监听资源加载失败错误
window.addEventListener(
  'error',
  event => {
    console.log('error 异常: ', event, '\n')
  },
  true
)

// 监听 promise 错误
window.addEventListener('unhandledrejection', event => {
  console.log('unhandledrejection 异常: ', event)
})

// ajax 异常
// 重写 XMLHttpRequest 对象方法或者用 axios 封装统一调用

// 全局监听错误
// window.onerror = (msg, src, row, col, error) => {
// console.log('msg: ', msg, '\n')
// console.log('src: ', src, '\n')
// console.log('row: ', row, '\n')
// console.log('col: ', col, '\n')
// console.log('error: ', error, '\n')
// return true
// }

// 计算 FP
// const fp = window.performance && window.performance.getEntriesByName('first-paint')[0].startTime
// console.log('FP: ', fp)

// 计算 FCP
// const fcp = window.performance && window.performance.getEntriesByName('first-contentful-paint')[0].startTime
// console.log('FCP: ', fcp)

// 计算LCP
// const ob = new PerformanceObserver(entryList => {
//   for (const entry of entryList.getEntries()) {
//     console.log('LCP:', entry.startTime, entry)
//   }
// })
// ob.observe({ type: 'largest-contentful-paint', buffered: true })

// 计算 TTI
// window.addEventListener('load', () => {
//   const timing = performance.getEntriesByType('navigation')[0]
//   const diff = timing.domInteractive - timing.fetchStart
//   console.log('TTI: ', diff, timing)
// })

// 计算 FID
// const ob = new PerformanceObserver(entryList => {
//   for (const entry of entryList.getEntries()) {
//     console.log('FID:', entry.processingStart - entry.startTime, entry)
//   }
// })
// ob.observe({ type: 'first-input', buffered: true })

// 计算 CLS
// let clsValue = 0
// let clsEntries = []
// let sessionValue = 0
// let sessionEntries = []

// const ob = new PerformanceObserver(entryList => {
//   for (const entry of entryList.getEntries()) {
//     if (!entry.hadRecentInput) {
//       const firstSessionEntry = sessionEntries[0]
//       const lastSessionEntry = sessionEntries[sessionEntries.length - 1]
//       if (
//         sessionValue &&
//         entry.startTime - lastSessionEntry.startTime < 1000 &&
//         entry.startTime - firstSessionEntry.startTime < 5000
//       ) {
//         sessionValue += entry.value
//         sessionEntries.push(entry)
//       } else {
//         sessionValue = entry.value
//         sessionEntries = [entry]
//       }
//       if (sessionValue > clsValue) {
//         clsValue = sessionValue
//         clsEntries = sessionEntries
//         console.log('CLS: ', clsValue, clsEntries)
//       }
//     }
//   }
// })
// ob.observe({ type: 'layout-shift', buffered: true })
</script>
