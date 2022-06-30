import { Stack, Heading, Flex, Text, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/tasks/tasksSlice'

export const TasksList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleChange = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Flex gap={10} mb={10} direction={{base:'column',sm:'row'}}>
        <Heading color='gray.100'>Total Tasks: {tasks.length}</Heading>
        <Link to='/create-task'>
          <Button bgColor='blue.400' color='gray.200' _hover={{color: 'white', bg:"gray.800"}}>
            Create new task
          </Button>
        </Link>
      </Flex>
      <Stack gap={5} direction='row' flexWrap='wrap'>
        {
          tasks.map( task => (
            <Stack key={task.id} direction='row' p={5} bgColor='gray.400' borderRadius={10} gap={2} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)'> 
                <Link to={`/edit-task/${task.id}`}>
                  <Text fontSize='sm' borderBottom='1px solid black'>✏</Text>
                </Link>
              <Flex direction='column'>
                <Text fontWeight='bold'>{task.title}</Text>
                <Text flexWrap='wrap'>{task.description}</Text>
              </Flex>
              <Flex gap={2} direction='column' alignItems='center' >
                <Button onClick={() => handleChange(task.id)} bg='blue.600' color='gray.100' fontSize='sm' _hover={{color:'black'}} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)'>
                  delete
                </Button>
                <Button onClick={() => handleChange(task.id)} fontSize='x-small' _hover={{bg:'green.600', color:'gray.200'}} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)'>
                  DONE✔
                </Button>
              </Flex>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}
