import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: '',
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
    },
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer