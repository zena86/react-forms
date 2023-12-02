import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import { ITEMS_ON_PAGE } from '../../constants';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [
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
        image:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample83.jpg',
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