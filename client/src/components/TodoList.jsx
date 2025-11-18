import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem'

export default function TodoList({ todos, loading, onDelete, onToggle, onEdit }){
  if(loading) return <div className="text-center py-8">Loading...</div>
  if(!todos.length) return <div className="text-center py-8 text-slate-500">No todos yet — add one!</div>

  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {todos.map(t => (
          <TodoItem key={t.id} todo={t} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
        ))}
      </AnimatePresence>
    </ul>
  )
}
