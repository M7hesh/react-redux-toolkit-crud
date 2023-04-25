CRUD Application with Search and Filter.

Tech used: React, Redux Toolkit 1.0, and React Router DOM

TODO: 
  1. Remove object notation for `createSlice.extraReducers` as it is deprecated, and will be discontinued in RTK 2.0.
     Replace with 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
  2. Add Pinned, Favourite like functionalities.

Implemented Redux for the first time -> its definetely powerful, but felt a little weird to create reducers everytime (thank god there's createSlice, didn't had to create actions separately). createAsyncThunkis a saviour for handling asynchronous request. It feels very useful for complex and huge data applications.

Refernce:
1. https://whataboutcoding.com/crud-using-createasyncthunk-and-redux-toolkit/
2. https://www.youtube.com/watch?v=8vNFuUALYv4
