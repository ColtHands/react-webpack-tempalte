import { createRoot } from 'react-dom/client'
import React from 'react'
// @ts-ignore
import { App } from '@/App.tsx'

createRoot(document.getElementById('app-root'))
    .render(<App/>)