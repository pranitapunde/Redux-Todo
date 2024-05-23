import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name : " quotes",
    initialState : {
        quoteData: null,
        isLoading : false,
        isError : false,
    },
    reducers: {},

    extraReducers : ( builder)  => {
        builder
        .addCase( fetchQuote.pending , ( state , action) => {
            state.isLoading = true
        }) 
        .addCase( fetchQuote.fulfilled , (state , action) => {
            state.isLoading = false
            state.quoteData = action.payload
        })
        .addCase ( fetchQuote.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
        })

    }
})

export default   quoteSlice.reducer;

export const fetchQuote = createAsyncThunk ("FETH/QUOTES" , async() =>{
    const  response =  await fetch (' https://quotable.io/random');
    const data =  await  response.json ();
    return data;


})