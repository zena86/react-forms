import { createSlice } from '@reduxjs/toolkit';
// import { ITEMS_ON_PAGE } from '../../constants';

export const formSlice = createSlice({
  name: 'itemsPerPage',
  initialState: {
    formData: {},
  },
  reducers: {
    formDataUpdated: (state, action) => {
      const { formData } = action.payload;
      state.formData = formData;
    },
  },
});

export const { formDataUpdated } = formSlice.actions;

export default formSlice.reducer;
