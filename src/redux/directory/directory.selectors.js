import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirecotorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);