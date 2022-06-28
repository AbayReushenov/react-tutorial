import { combineReducers } from "@reduxjs/toolkit";

import { reducer as count } from "./count";

export const rootReducer = combineReducers({
    count
});
