import { TasksList } from "./app/components/TasksList"
import { TasksForm } from "./app/components/TasksForm"
import { Stack } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Text } from '@chakra-ui/react'

function App() {

  return (
    <Stack bgColor='blue.800' minH='100vh' p={20} justifyContent='center'>
      <BrowserRouter>
        <Link to={'/'}><Text color='gray.200'> ⬅Back </Text></Link>
        <Routes>
          <Route path='/create-task' element={<TasksForm />} />
          <Route path='/edit-task/:id' element={<TasksForm />} />
          <Route path='/' element={<TasksList />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  )
}

export default App
