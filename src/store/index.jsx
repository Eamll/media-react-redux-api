import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export { fetchUsers } from './thunks/fetchUsers';
export { addUser } from './thunks/addUser';
export { removeUser } from './thunks/removeUser';
export { useGetAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useGetPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';