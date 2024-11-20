import {createSlice} from '@reduxjs/toolkit'

const NoteSlice = createSlice({
    name: 'NotePad',
    initialState : {
        value : []
    },
    reducers : {
     additem :(state, action) => {
                state.value.push(action.payload); 
              },
    
    deleted : (state ,action) =>{
        state.value = state.value.filter ((val) => val.id !== action.payload);
    }
}
})

export const {additem , deleted } = NoteSlice.actions;
export default NoteSlice.reducer;