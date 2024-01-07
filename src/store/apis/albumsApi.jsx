import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3005',
        }),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: (user) => {
                return {
                    url: '/albums',
                    method: 'GET',
                    params: {
                        userId: user.id,
                    },
                };
            }
        }),
    }),
});

export const { useGetAlbumsQuery } = albumsApi;
export default { albumsApi };
