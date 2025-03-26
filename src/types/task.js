export const TaskStatus = {
  TODO: 'todo',
  IN_PROGRESS: 'in-progress',
  DONE: 'done'
};

export const TaskPriority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

/**
 * @typedef {Object} Task
 * @property {string} _id
 * @property {string} title
 * @property {string} description
 * @property {string} status
 * @property {string} priority
 * @property {string} dueDate
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} userId
 */

export const taskShape = {
  _id: '',
  title: '',
  description: '',
  status: TaskStatus.TODO,
  priority: TaskPriority.MEDIUM,
  dueDate: '',
  createdAt: '',
  updatedAt: '',
  userId: ''
}; 