import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { useTodos } from '../utils/hooks'

export default function Home(){
  const { todos, loading, add, remove, edit } = useTodos()
  const [editing, setEditing] = useState(null)

  const handleAdd = async (data) => {
    await add(data)
  }

  const handleDelete = async (id) => {
    await remove(id)
  }

  const handleToggle = async (todo) => {
    await edit(todo.id, { ...todo, completed: !todo.completed })
  }

  const handleEdit = async (todo) => {
    // simple toggle to demonstrate - you can open modal etc.
    const newTask = prompt('Edit task', todo.task)
    if(newTask !== null){
      await edit(todo.id, { ...todo, task: newTask })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">Your Todos</h2>
      </div>

      <TodoForm onAdd={handleAdd} />

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <TodoList todos={todos} loading={loading} onDelete={handleDelete} onToggle={handleToggle} onEdit={handleEdit} />
      </div>
    </div>
  )
}
