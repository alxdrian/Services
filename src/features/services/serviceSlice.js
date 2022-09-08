import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createService, deleteServiceById, editServiceById, getAllServices } from '../../api/serviceApi';

const initialForm = {
  mode: { creation: true },
  fields: {
    name: 'nombre',
    description: 'descripción',
    category: 'cars',
  },
  selected: {}
}

const initialState = {
  services: {
    list: [],
    status: { idle: true }
  },
  form: initialForm,
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

export const editService = createAsyncThunk(
  'service/editService',
  async(service) => {
    const response = await editServiceById(service.id, service)
    return response.data
  }
)

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      state.form.fields[action.payload.field] = action.payload.value
    },
    setEditionMode: (state) => {
      state.form.mode = { edition: true }
    },
    setCreationMode: (state) => {
      state.form.mode = { creation: true }
    },
    setSelectedService: (state, action) => {
      state.form.selected = action.payload
    },
    setResetForm: (state) => {
      state.form = initialForm
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
      // status fetch delete service
      .addCase(editService.pending, (state) => {
        state.services.status = { loading: true }
      })
      .addCase(editService.fulfilled, (state) => {
        state.services.status = { idle: true }
      })
  }
})

export const { setFormField, setEditionMode, setCreationMode, setSelectedService, setResetForm } = serviceSlice.actions

export default serviceSlice.reducer