import React from 'react'
import Home from './pages/Home'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-slate-800">FastTodo</h1>
          <nav className="text-sm text-slate-600">
            <span className="mr-4">Docs</span>
            <a href="http://127.0.0.1:8000/docs" className="text-primary hover:underline">API</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Home />
      </main>

      <footer className="mt-12 text-center text-xs text-slate-500 pb-8">
        Built with FastAPI + React
      </footer>
    </div>
  )
}
