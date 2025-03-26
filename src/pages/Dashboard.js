import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchTasks, deleteTask } from '../store/slices/taskSlice';
import CreateTaskModal from '../components/CreateTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: '',
  });
  const [sortBy, setSortBy] = useState('createdAt');

  const dispatch = useAppDispatch();
  const { tasks, loading } = useAppSelector(state => state.tasks);
  const { token } = useAppSelector(state => state.auth);
  const toast = useToast();

  useEffect(() => {
    if (token) {
      dispatch(fetchTasks(token));
    }
  }, [dispatch, token]);

  const handleDelete = async (taskId) => {
    try {
      await dispatch(deleteTask({ taskId, token })).unwrap();
      toast({
        title: 'Task deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to delete task',
        description: error.message || 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = !filters.status || task.status === filters.status;
    const matchesPriority = !filters.priority || task.priority === filters.priority;
    const matchesSearch = !filters.search || 
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'dueDate':
        return new Date(a.dueDate) - new Date(b.dueDate);
      case 'priority':
        return b.priority - a.priority;
      case 'createdAt':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <VStack spacing={8} align="stretch">
      <Flex justify="space-between" align="center">
        <Heading size="lg">My Tasks</Heading>
        <Button
          colorScheme="brand"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create Task
        </Button>
      </Flex>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Input
          placeholder="Search tasks..."
          value={filters.search}
          name="search"
          onChange={handleFilterChange}
          maxW={{ base: '100%', md: '300px' }}
        />
        <Select
          placeholder="Filter by status"
          value={filters.status}
          name="status"
          onChange={handleFilterChange}
          maxW={{ base: '100%', md: '200px' }}
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </Select>
        <Select
          placeholder="Filter by priority"
          value={filters.priority}
          name="priority"
          onChange={handleFilterChange}
          maxW={{ base: '100%', md: '200px' }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        <Select
          placeholder="Sort by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          maxW={{ base: '100%', md: '200px' }}
        >
          <option value="createdAt">Created Date</option>
          <option value="dueDate">Due Date</option>
          <option value="title">Title</option>
          <option value="priority">Priority</option>
        </Select>
      </Stack>

      {loading ? (
        <Text>Loading tasks...</Text>
      ) : sortedTasks.length === 0 ? (
        <Text>No tasks found. Create one to get started!</Text>
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {sortedTasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </Grid>
      )}

      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
      />
    </VStack>
  );
};

export default Dashboard; 