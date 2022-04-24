import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from '@/App.tsx'

createRoot(document.getElementById('app-root'))
    .render(<App/>)