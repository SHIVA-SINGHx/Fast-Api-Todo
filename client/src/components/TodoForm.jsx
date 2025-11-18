import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TodoForm({ onAdd }){
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if(!task.trim()) return
    onAdd({ task, description })
    setTask(''); setDescription('')
  }

  return (
    <motion.form onSubmit={submit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-lg shadow-sm space-y-3"
    >
      <div>
        <label className="block text-sm font-medium text-slate-700">Task</label>
        <input value={task} onChange={e=>setTask(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 focus:ring-primary focus:border-primary"
          placeholder="e.g. Buy groceries" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Description</label>
        <input value={description} onChange={e=>setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2 focus:ring-primary focus:border-primary"
          placeholder="Optional short note" />
      </div>

      <div className="flex justify-start">
        <button className="btn bg-primary bg-black text-green-500 hover:opacity-95" type="submit">
          Add Todo
        </button>
      </div>
    </motion.form>
  )
}
