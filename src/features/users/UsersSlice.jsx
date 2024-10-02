// Modules
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Nijhu Zaman Chowdhury' },
    { id: '1', name: 'Mohid Ahmad' },
    { id: '2', name: 'Robiul Islam Chamak' },
]

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: { }
})

export const selectAllUsers = (state) => state.users
export default UsersSlice.reducer