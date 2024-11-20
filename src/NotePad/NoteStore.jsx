import { configureStore } from "@reduxjs/toolkit";
import NotepadReducer from './NoteSlice'

const store = configureStore({
    reducer :{
        note : NotepadReducer
    }
})

export default store