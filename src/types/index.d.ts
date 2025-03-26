// Type declarations for various modules
declare module 'framer-motion';
declare module 'framer-motion/dist/framer-motion';

// Task type
export interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}

// User type
export interface User {
  _id: string;
  name: string;
  email: string;
  theme: 'light' | 'dark';
}

// Auth state
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Task state
export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  statusFilter: string;
  priorityFilter: string;
  searchFilter: string;
}

// Root state
export interface RootState {
  auth: AuthState;
  task: TaskState;
} 