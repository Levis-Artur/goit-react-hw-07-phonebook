import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
}

const fetchFulfilled = (state, { payload }) => { state.items = payload; }  

const addFulfilled =  (state, { payload })=> {
         state.items.push(payload);  
}
        
const deleteFulfilled = (state, { payload })=> {
          state.items = state.items.filter(contact => contact.id !== payload);   
        }


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: (builder) =>{
      builder
        .addCase(fetchContacts.fulfilled, fetchFulfilled)
        .addCase(addContact.fulfilled, addFulfilled)
        .addCase(deleteContact.fulfilled, deleteFulfilled)
        .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
        .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
        .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
    }
})

export const contactsReduser = contactsSlice.reducer;
