import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
export interface ApplicationState {
  isSmall: boolean
}

// Define the initial state using that type
const initialState: ApplicationState = {
  isSmall: false,
}

// Slice name
export const applicationSlice = createSlice({
  name: 'application',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    detectSizeIsSmall: (state, action: PayloadAction<boolean>) => {
      state.isSmall = action.payload
    },
  },
})

export const { detectSizeIsSmall } = applicationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsSmall = (state: RootState) => state.application.isSmall

export default applicationSlice.reducer