import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/removeUser', async (user) => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

    return response.status === 200 ? user : null;
}
);

export { removeUser };

