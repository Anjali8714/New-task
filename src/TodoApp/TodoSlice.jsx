import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:'todo',
    initialState : {
        value : []
    },
    reducers:{
        addtodo :(state, action) => {
            state.value.push({
                id:Date.now(),
                text:action.payload
            }); 
          },
        deletetodo : (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);

        },
        edittodo : (state ,action) => {
            // state.value.map((edit) => edit.id = action.payload )
            
        }
    }
})

export const {addtodo , deletetodo , edittodo} = TodoSlice.actions;
export default TodoSlice.reducer;