import React, { useState, useEffect } from 'react'
import { chakra, Input, Textarea, Stack, Heading, Button, Flex } from '@chakra-ui/react'
import {v4 as uuid} from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, editTask } from '../features/tasks/tasksSlice'
import { useNavigate, useParams } from 'react-router-dom'

export const TasksForm = () => {

  const [task, setTask] = useState({
    title:'',
    description:'',
    completed: false,
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }
    navigate('/')
  }

  useEffect(() => {
    if(params.id){
      setTask( tasks.find( el => el.id === params.id))
    }
  },[params.id, tasks])

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Heading as='h2' color='gray.200' mb={5}>{params.id ? 'Edit Task✏' : 'Create Task✏'}</Heading>
      <chakra.form onSubmit={handleSubmit} display='flex' flexDirection='column' gap={5} w='auto' >
        <Flex direction={'row'} gap={5}>
          <Input onChange={handleChange} name='title' bgColor='' placeholder='Title' _placeholder={{color: 'gray.100'}} />
          <Textarea onChange={handleChange} name='description' placeholder='Task Description..' _placeholder={{color: 'gray.100'}}/>
        </Flex>
        <Button type='submit' _hover={{color: 'gray.200', bgColor: 'gray.800'}}>Create</Button>
      </chakra.form>
    </Stack>
  )
}
