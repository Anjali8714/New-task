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
    taskdone:(state,action)=>{
        let doneitem=state.value.find((item)=>item.id === action.payload);
        if(doneitem){
            doneitem.done=true
        }
    },
    
    deleted : (state ,action) =>{
        state.value = state.value.filter ((val) => val.id !== action.payload);
    }
}
})

export const {additem , deleted ,taskdone} = NoteSlice.actions;
export default NoteSlice.reducer;