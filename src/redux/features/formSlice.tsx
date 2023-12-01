import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import { ITEMS_ON_PAGE } from '../../constants';

export const formSlice = createSlice({
  name: 'formData',
  initialState: {
    formData: [
      {
        id: uuidv4(),
        name: 'Example',
        age: 25,
        email: 'example@qwerty.com',
        password: '',
        confirm_password: '',
        gender: 'Male',
        country: 'Georgia',
        isActive: false,
      },
    ],
  },
  reducers: {
    formDataUpdated: (state, action) => {
      const { formData } = action.payload;
      state.formData.push(formData);
    },
    inactiveCards: (state) => {
      state.formData = state.formData.map((item) => {
        return { ...item, isActive: false };
      });
    },
  },
});

export const { formDataUpdated, inactiveCards } = formSlice.actions;

export default formSlice.reducer;
