import { createRoot } from 'react-dom/client'
import './index.css'

import { App } from './app'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(<App />)
