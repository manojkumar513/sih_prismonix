import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChatBot from './chatbot'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatBot />
  </StrictMode>,
)
