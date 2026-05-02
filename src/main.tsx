import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const root = document.querySelector("#root");
if (!root) throw Error('root not found');

createRoot(root).render(
    <App />
)