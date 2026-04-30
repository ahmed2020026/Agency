import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';


const root = document.querySelector("#root");
if (!root) throw Error('root not found');

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)