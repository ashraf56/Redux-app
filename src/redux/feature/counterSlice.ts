import { createSlice } from "@reduxjs/toolkit"


export interface CounterState {
    count: number
}


const initialState: CounterState = {
    count: 0
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count= state.count + 1
        }
    }
})




export const { increment } = counterSlice.actions
export default counterSlice.reducer