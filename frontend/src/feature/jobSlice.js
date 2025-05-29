import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateJob = createAsyncThunk('jobs/updateJob', async ({ id, data }) => {
  const res = await axios.put(`/api/jobs/${id}`, data);
  return res.data;
});

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {
  await axios.delete(`/api/jobs/${id}`);
  return id;
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(job => job._id === action.payload._id);
        if (index !== -1) state.jobs[index] = action.payload;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
      });
  }
});

export default jobSlice.reducer;
