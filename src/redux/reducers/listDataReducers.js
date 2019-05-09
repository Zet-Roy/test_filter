import { LOAD_DATA } from '../actions/getListDataActions'
import initialState from './initialState';

export default (state = initialState.listData, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return Object.assign({}, state, {
                data: [...action.data]
            })
        default:
            return state
    }
}