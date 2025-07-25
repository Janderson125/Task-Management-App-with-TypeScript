// typescript-2/types.ts

export interface Task {
  id: string;
  userId?: string;       // Add this line to link task to Auth0 user
  title: string;
  description?: string;
  dueDate?: string;      // ISO date string
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface User {
  sub: string;  // Auth0 user ID
  name?: string;
  email?: string;
  picture?: string;
}
