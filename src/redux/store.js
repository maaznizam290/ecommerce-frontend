import { configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer,FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from  './slice';

const persistConfig = {
    key:"root",
    version:1,
    storage,
};

const rootReducer = persistReducer(persistConfig,userReducer);


const store = configureStore({
    reducer:{user:rootReducer},
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,PURGE,PERSIST,REGISTER,PAUSE,REHYDRATE],
            },
        }),
}); 

export let persistor = persistStore(store);
export default store;