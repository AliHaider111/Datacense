import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/Auth/authSlice";
// import authModelSlice from "./slices/Auth/authModelSlice";


export const store = configureStore({
    reducer: {
        authSlice: authSlice,
        // authModelSlice: authModelSlice,
        
    },
})
