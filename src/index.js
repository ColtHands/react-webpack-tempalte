import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from '@/App.tsx'

console.log('hello world')

createRoot(document.getElementById('app-root'))
    .render(<App/>)