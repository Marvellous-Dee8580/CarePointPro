import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  bloodPressure: null,
  heartRate: null,
  weight: null,
};

// Async thunk for fetching health data
export const fetchHealthData = createAsyncThunk(
  'healthStats/fetchHealthData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/health-data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch health data:', error);
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const healthStatsSlice = createSlice({
  name: 'healthStats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHealthData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(fetchHealthData.rejected, (state, action) => {
        console.error('Fetch health data failed:', action.payload);
      });
  },
});

export const selectHealthStats = (state) => state.healthStats;
export default healthStatsSlice.reducer;