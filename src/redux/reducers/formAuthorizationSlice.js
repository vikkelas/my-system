import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const authentication = createAsyncThunk(
    'formAuthorization/authentication',
    async ({body,optionsUrl},{rejectWithValue})=>{
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_URL+`/api/auth${optionsUrl}`,{
                body,
                method: "POST",
            })
            if(!response.ok){
                return rejectWithValue(await response.json())
            }
            return await response.json()
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const formAuthorizationSlice = createSlice({
    name: 'formAuthorization',
    initialState: {
        user: null,
        username: '',
        email: '',
        password: '',
        confirmation: '',
        identifier: '',
        permission: false,
        loading: 'idle',
        error: null,
        successEmail: false

    },
    reducers: {
        inputControl(state, action){
            const {name, value} = action.payload
            state[name] = value;
        },
        clearForm(state){
            state.user = null
            state.username= ''
            state.email= ''
            state.password= ''
            state.confirmation= ''
            state.identifier= ''
            state.permission= false
            state.loading= 'idle'
            state.error= null
            state.successEmail = false
        }
    },
    extraReducers: (builder)=>{
        //запуск preloader на странице регистрации и авторизации
        builder.addCase(authentication.pending, (state)=>{
            state.error = null
            state.loading = 'pending'
        });
        builder.addCase(authentication.fulfilled, (state,action)=>{
            state.loading = 'fulfilled';
            //user будет в ответе при авторизации и при регистрации с различием с токкеном и без
            if(action.payload.user){
                state.user = action.payload.user
            }
            //токен придет в ответе на успешную авторизацию
            if(action.payload.jwt){
                sessionStorage.setItem('jwtMySystem',action.payload.jwt)
            }
            // обработка ответа на удачную отправку ссылки подтверждение почты или смены пароля
            if(action.payload.sent||action.payload.ok){
                state.successEmail = true
            }
        });
        builder.addCase(authentication.rejected, (state,action)=>{
            state.loading = 'rejected'
            let error = null;
            if (action.payload.error){
                error = action.payload.error.message}
            //перевод ошибок и отправка их в модальное окно
            switch (error){
                case ('email must be a valid email'):
                    state.error = 'Несуществующий email'
                    break
                case ('Email or Username are already taken'):
                    state.error = 'Такой пользователь уже зарегистрирован'
                    break
                case ('Your account email is not confirmed'):
                    state.error = 'Вы не подтвердили свой email'
                    break
                case ('Invalid identifier or password'):
                    state.error = 'Некорректный логин или пароль'
                    break
                default:
                    state.error = 'Непредвиденная ошибка'
                    break
           }
        });
    }
})
export const {
    inputControl,
    clearForm
} = formAuthorizationSlice.actions;
export default formAuthorizationSlice.reducer;