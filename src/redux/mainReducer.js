import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2201214Reducer from '../features/SignIn2201214/redux/reducers'
import SignIn2200709Reducer from '../features/SignIn2200709/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2201214: SignIn2201214Reducer,
SignIn2200709: SignIn2200709Reducer,

});