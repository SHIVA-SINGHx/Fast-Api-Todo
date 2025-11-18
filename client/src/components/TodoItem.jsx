import React from 'react'
import { motion } from 'framer-motion'

export default function TodoItem({ todo, onDelete, onToggle, onEdit }){
  return (
    <motion.li layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-white p-3 rounded-lg shadow-sm flex items-start gap-3"
    >
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}
        className="mt-1 h-5 w-5 text-primary" />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className={`font-medium ${todo.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>{todo.task}</h3>
          <div className="flex gap-2">
            <button onClick={() => onEdit(todo)} className="text-sm text-slate-500 hover:text-slate-800">Edit</button>
            <button onClick={() => onDelete(todo.id)} className="text-sm text-red-500 hover:underline">Delete</button>
          </div>
        </div>
        {todo.description && <p className="text-sm text-slate-500 mt-1">{todo.description}</p>}
      </div>
    </motion.li>
  )
}
