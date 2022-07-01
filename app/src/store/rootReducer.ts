import { combineReducers } from "@reduxjs/toolkit";

import { reducer as count } from "./count";
import { reducer as posts } from "./posts";
import { reducer as todos } from "./todos";
import { reducer as error } from "./error/error";

export const rootReducer = combineReducers({
    count,
    posts,
    todos,
    error
});
