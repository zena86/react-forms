import { createSlice } from '@reduxjs/toolkit';
// import { ITEMS_ON_PAGE } from '../../constants';

export const formSlice = createSlice({
  name: 'formData',
  initialState: {
    formData: [
      {
        name: 'Example',
        age: 25,
        email: 'example@qwerty.com',
        password: '',
        confirm_password: '',
        gender: 'Male',
        country: 'Georgia',
      },
    ],
  },
  reducers: {
    formDataUpdated: (state, action) => {
      const { formData } = action.payload;
      state.formData.push(formData);
    },
  },
});

export const { formDataUpdated } = formSlice.actions;

export default formSlice.reducer;
