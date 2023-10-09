import { createSlice } from '@reduxjs/toolkit'

export const hoverInfoSlice = createSlice({
  name: 'hoverInfo',
  initialState: {
    hoveredElementSectionUid: null,
    hoveredElementCourseId: null,
  },
  reducers: {
    // Stores both the course and section for an element, which is used to highlight
    // only elements that are the same exact section
    storeHoveredElementSection: (state, action) => {
      state.hoveredElementSectionUid = action.payload();
    },

    forgetHoveredElementSection: (state) => {
        state.hoveredElementSectionUid = null;
    },
    // Stores just the course information of an element, which is used to highlight
    // all other elements of the same course
    storeHoveredElementCourse: (state, action) => {
        state.hoveredElementCourseId = action.payload;
    },
    forgetHoveredElementCourse: (state) => {
        state.hoveredElementCourseId = null;
    },
  },
})

export const { storeHoveredElementSection, forgetHoveredElementSection, storeHoveredElementCourse, forgetHoveredElementCourse } = hoverInfoSlice.actions;

export default hoverInfoSlice.reducer