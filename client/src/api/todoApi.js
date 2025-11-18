import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000'

const client = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

export const fetchTodos = () => client.get('/todos/')
export const fetchTodo = (id) => client.get(`/todos/${id}`)
export const createTodo = (data) => client.post('/todos/', data)
export const updateTodo = (id, data) => client.put(`/todos/${id}`, data)
export const deleteTodo = (id) => client.delete(`/todos/${id}`)

export default client
