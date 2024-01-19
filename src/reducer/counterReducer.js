import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrendingMovies } from '../../Screens/MovieDb';
import { fetchUpcomingMovies } from '../../Screens/MovieDb';
import { fetchTopRatedMovies } from '../../Screens/MovieDb';


export const fetchTrendingMoviesAsync = createAsyncThunk(
  'counter/fetchTrendingMovies',
  async () => {
    const data = await fetchTrendingMovies();
    return data.results;
  }
);

export const fetchUpcomingMoviesAsync = createAsyncThunk(
  'counter/fetchUpcomingMovies',
  async () => {
    const data = await fetchUpcomingMovies();
    return data.results;
  }
);

export const fetchTopRatedMoviesAsync = createAsyncThunk(
  'counter/fetchTopRatedMovies',
  async () => {
    const data = await fetchTopRatedMovies();
    return data.results;
  }
);

export const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    trendingMovieState: [],
    upcomingMovieState: [],
    TopRatedMovieState: [],
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingMoviesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trendingMovieState = action.payload;
      })
      .addCase(fetchTrendingMoviesAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchUpcomingMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpcomingMoviesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcomingMovieState = action.payload;
      })
      .addCase(fetchUpcomingMoviesAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchTopRatedMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRatedMoviesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.TopRatedMovieState = action.payload;
      })
      .addCase(fetchTopRatedMoviesAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },

});

export const { increment, decrement, incrementByAmount } = counterReducer.actions;

export default counterReducer.reducer;