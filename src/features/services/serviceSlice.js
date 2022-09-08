import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllServices } from '../../api/serviceApi';

const initialState = {
  list: {}
}

export const getAll = createAsyncThunk(
  'service/getAllServices',
  async() => {
    const response = await getAllServices()
    return response.data
  }
)

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.serviceList = [...state.serviceList, action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.list = { loading: true }
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(getAll.rejected, (state, action) => {
        state.list = { error: action.error }
      })
  }
})

export const { setServiceList, addService } = serviceSlice.actions

export default serviceSlice.reducer