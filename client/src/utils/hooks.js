import { useState, useEffect } from 'react'
import * as api from '../api/todoApi.js'

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = async () => {
    setLoading(true)
    try {
      const res = await api.fetchTodos()
      setTodos(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const add = async (payload) => {
    const res = await api.createTodo(payload)
    setTodos(prev => [res.data, ...prev])
  }

  const remove = async (id) => {
    await api.deleteTodo(id)
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const edit = async (id, payload) => {
    const res = await api.updateTodo(id, payload)
    setTodos(prev => prev.map(t => t.id === id ? res.data : t))
  }

  return { todos, loading, error, reload: load, add, remove, edit }
}
