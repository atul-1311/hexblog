import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title : '',
    category: '',
    subtitle: '',
    bloghex: ''
};

export const blogSlice = createSlice({
  name: 'bloghex',
  initialState,
  reducers: {
    setBlog: (state, action) => {
    //   const { user } = action.payload;
    //   // console.log(user);
    //   state.user = user;
    //   state.isAuth = true;
        const { title, category, subtitle, bloghex } = action.payload;
        state.title = title;
        state.category = category;
        state.subtitle = subtitle;
        state.bloghex = bloghex;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBlog } = blogSlice.actions

export default blogSlice.reducer