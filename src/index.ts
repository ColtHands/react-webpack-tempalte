import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './components/App.tsx'

const objectTets = {
    asd: 123,
}

createRoot(document.getElementById('app-root') as HTMLElement)
    .render(React.createElement(App))