import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'yellow';
      case 'inProgress':
        return 'blue';
      case 'completed':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'inProgress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      position="relative"
      _hover={{ shadow: 'md' }}
    >
      <Stack spacing={4}>
        <Flex justify="space-between" align="start">
          <Heading size="md">{task.title}</Heading>
          <Stack direction="row" spacing={2}>
            <IconButton
              icon={<FiEdit2 />}
              variant="ghost"
              size="sm"
              onClick={() => onEdit(task)}
              aria-label="Edit task"
            />
            <IconButton
              icon={<FiTrash2 />}
              variant="ghost"
              size="sm"
              colorScheme="red"
              onClick={() => onDelete(task._id)}
              aria-label="Delete task"
            />
          </Stack>
        </Flex>

        <Text color="gray.600" noOfLines={2}>
          {task.description}
        </Text>

        <Flex gap={2} flexWrap="wrap">
          <Badge colorScheme={getStatusColor(task.status)}>
            {getStatusDisplay(task.status)}
          </Badge>
          <Badge colorScheme={getPriorityColor(task.priority)}>
            {task.priority}
          </Badge>
        </Flex>

        <Text fontSize="sm" color="gray.500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </Text>
      </Stack>
    </Box>
  );
};

export default TaskCard; 