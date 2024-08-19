import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_Key, TMBD_BASE_URL } from "../utils/const";

const initialState = {
  movies: [],
  generesLoaded: false,
  generes: [],
};
export const getGeneres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { generes },
  } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_Key}`);

  return generes;
});

const createArrayFromRawData = (array, movieArray, generes) => {
  array.forEach((movie) => {
    const movieGeneres = [];
    movie.generes_ids.gotEach((generes) => {
      const name = generes.find(({ id }) => id === generes);
      if (name) movieGeneres.push(name.name);
    });
    if (movie.backdrop_path) {
      movieArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        generes: movieGeneres.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, generes, paging) => {
  const movieArray = [];
  for (let i = 1; movieArray.length < 60 && i < 10; i++) {
    const { data: results } = await axios.get(
      `${api}${paging ? `&page=${i}` : ""}`
    );
    createArrayFromRawData(results, movieArray, generes);
    return movieArray;
  }
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const { netflix: generes } = thunkApi.getState();
    const data = getRawData(
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_Key}`,
      generes,
      true
    );
    // return getRawData(`${TMBD_BASE_URL}/discover/${type}? api_key=${API_Key}& with_generes=${generes}`)
    console.log(data);
  }
);
const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGeneres.fulfilled, (state, action) => {
      state.generes = action.payload;
      state.generesLoaded = true;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
