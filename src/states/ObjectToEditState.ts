import { create } from 'zustand';

// Define the type of the object you are editing
interface EditableObject {
  [key: string]: any;
}

interface ModelState {
  objectToEdit: {};
  setObjectToEdit: (data: EditableObject) => void;
}

export const useObjectToEdit = create<ModelState>((set) => ({
  objectToEdit: {},
  setObjectToEdit: (data) => set({ objectToEdit: data }),
}));
