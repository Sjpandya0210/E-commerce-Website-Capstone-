// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url:"/users",
        method : "POST",
        body,
      }),
    }),
  login: builder.mutation({
    query: (body) => ({
      url: "/auth/login",
      method: "POST",
      body
    }),
  }),
  productlist: builder.query({
    query: () => ({
      url: "/products",
    }),
  }),
  productDetails: builder.query({
    query:(id) => ({
      url: `/products/${id}`,
    }),
  }),
  cart: builder.query({
    query:(token) => ({
      url: `/cart`,
      headers: {
        authorization: `Bearer ${token}`
      }
  }),
}),
getAllUsers: builder.query ({
  query: () => ({
     url:"/users",
  }),
  }),
account: builder.query ({
  query: ({token, id}) => ({
    // url:"/users",
    url:`/users/${id}`,
    headers: {
      authorization:`Bearer ${token}`
    }
  }),
}),
cartByUser: builder.query ({
  query: ({token, id}) => ({
    url: `/carts/user/${id}`,
    headers:{
      authorization:`Bearer ${token}`
    }
  }),
}),
allCart: builder.query ({
  query: ({token}) => ({
    url:`/carts`,
    headers:{
      authorization:`Bearer ${token}`
    }
  }),
}),
singleCart: builder.query ({
  query: ({token, id}) => ({
    url:`/carts/${id}`,
    headers:{
      authorization:`Bearer ${token}`
    }
  }),
}),
deleteCart: builder.mutation ({
  query: ({token, id}) => ({
    url:`/carts/${id}`,
    method: "DELETE",
    headers:{
      authorization:`Bearer ${token}`
    }
  }),
}),
addToCart: builder.mutation({
  query:({token, body}) => ({
    url:'/carts',
    method: "POST",
    headers:{
      authorization:`Bearer ${token}`
    },
    body
  })
})
})
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useRegisterMutation, 
  useLoginMutation, 
  useProductlistQuery, 
  useProductDetailsQuery, 
  useAccountQuery, 
  useCartQuery,
  useGetAllUsersQuery,
  useCartByUserQuery,
  useAllCartQuery,
  useSingleCartQuery,
  useDeleteCartMutation,
  useAddToCartMutation} = apiSlice;