import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  serviceList: []
}

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.serviceList = [...state.serviceList, action.payload]
    }
  }
})

export const { addService } = serviceSlice.actions

export default serviceSlice.reducer