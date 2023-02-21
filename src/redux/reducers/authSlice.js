import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "auth/login",
    async({body}, {rejectWithValue})=>{
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/auth/login`,{
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
);
export const newConfirmArePassword = createAsyncThunk(
    "auth/newConfirmArePassword",
    async({body, url}, {rejectWithValue})=>{
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/auth/${url}`,{
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
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        statusLoad: 'idle',
        statusConfirmAndPassword: 'idle',
        messageServer: '',
        error: null,
    },
    reducers: {
        resetStatusLoad(state){
            state.statusLoad = 'idle'
            state.statusConfirmAndPassword='idle'
            state.messageServer = ''
            state.error = null
        },
        logout(state){
            state.user = null
            state.statusLoad = 'idle'
            state.statusConfirmAndPassword='idle'
            state.messageServer = ''
            state.error = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending, (state)=>{
            state.error = null
            state.statusLoad = 'pending'
        });
        builder.addCase(login.fulfilled, (state,action)=>{
            state.statusLoad = 'fulfilled';
            state.user = action.payload.data;
        });
        builder.addCase(login.rejected, (state,action)=>{
            state.statusLoad = 'rejected';
            state.error = action.payload.message
        });
        builder.addCase(newConfirmArePassword.pending, (state)=>{
            state.error = null
            state.statusConfirmAndPassword = 'pending'
        });
        builder.addCase(newConfirmArePassword.fulfilled, (state,action)=>{
            state.statusConfirmAndPassword = 'fulfilled';
            state.messageServer = action.payload.message;
        });
        builder.addCase(newConfirmArePassword.rejected, (state,action)=>{
            state.statusConfirmAndPassword = 'rejected';
            state.error = action.payload.message
        });
    }
})
export const { 
    resetStatusLoad,
    logout
} = authSlice.actions;
export default authSlice.reducer;