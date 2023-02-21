import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const register = createAsyncThunk(
    'formAuthorization/register',
    async ({body},{rejectWithValue})=>{
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/auth/register`,{
                body,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            if(!data.ok){
                return rejectWithValue(data)
            }
            return data;
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const formAuthorizationSlice = createSlice({
    name: 'formAuthorization',
    initialState: {
        userName: '',
        email: '',
        password: '',
        confirmation: '',
        identifier: '',
        loading: 'idle',
        permission: false,
        error: null,
    },
    reducers: {
        inputControl(state, action){
            const {name, value} = action.payload
            state[name] = value;
        },
        clearForm(state){
            state.userName= ''
            state.email= ''
            state.password= ''
            state.confirmation= ''
            state.identifier= ''
            state.permission= false
            state.loading= 'idle'
            state.error= null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(register.pending, (state)=>{
            state.error = null
            state.loading = 'pending'
        });
        builder.addCase(register.fulfilled, (state)=>{
            state.loading = 'fulfilled';
        });
        builder.addCase(register.rejected, (state,action)=>{
            const {message} = action.payload;
            state.loading = 'rejected';
            state.error = message;
        });
    }
})
export const {
    inputControl,
    clearForm
} = formAuthorizationSlice.actions;
export default formAuthorizationSlice.reducer;