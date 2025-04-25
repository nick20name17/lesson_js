import { createRoot } from 'react-dom/client'
import { App } from './app'
import { UserNameProvider } from './context/user-name-context'
import './index.css'

createRoot(document.getElementById('root')).render(
    <UserNameProvider>
        <App />
    </UserNameProvider>
)
