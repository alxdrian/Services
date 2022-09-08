import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createService, deleteServiceById, getAllServices } from '../../api/serviceApi';

const initialState = {
  services: {
    list: [],
    status: { idle: true }
  },
  form: {
    fields: {
      name: '',
      description: '',
      category: '',
    }
  }
}

export const getAll = createAsyncThunk(
  'service/getAllServices',
  async() => {
    const response = await getAllServices()
    return response.data
  }
)

export const addService = createAsyncThunk(
  'service/addService',
  async(service) => {
    const response = await createService(service)
    return response.data
  }
)

export const deleteService = createAsyncThunk(
  'service/deleteService',
  async(id) => {
    const response = await deleteServiceById(id)
    return response.data
  }
)

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      state.form.fields[action.payload.field] = action.payload.value
    }
  },
  extraReducers: (builder) => {
    builder
      // status fetch all services
      .addCase(getAll.pending, (state) => {
        state.services.status = { loading: true }
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.services.list = action.payload
        state.services.status = { succeded: true }
      })
      .addCase(getAll.rejected, (state, action) => {
        state.services.status = { error: action.error }
      })
      // status fetch add service
      .addCase(addService.pending, (state) => {
        state.services.status = { loading: true }
      })
      .addCase(addService.fulfilled, (state) => {
        state.services.status = { idle: true }
      })
      // status fetch delete service
      .addCase(deleteService.pending, (state) => {
        state.services.status = { loading: true }
      })
      .addCase(deleteService.fulfilled, (state) => {
        state.services.status = { idle: true }
      })
  }
})

export const { setFormField } = serviceSlice.actions

export default serviceSlice.reducer