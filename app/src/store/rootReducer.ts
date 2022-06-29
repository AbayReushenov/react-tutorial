import { combineReducers } from "@reduxjs/toolkit";

import { reducer as count } from "./count";
import { reducer as error } from "./error/error";

export const rootReducer = combineReducers({
    count,
    error
});
