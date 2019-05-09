import { FIND_DATA } from '../actions/findItemToDataActions'
import initialState from './initialState';

export default (state = initialState.findData, action) => {
    switch (action.type) {
        case FIND_DATA: {

            const filterData = action.arrData.filter((item) => {
                if (
                    (item.name.toLowerCase().indexOf(action.findValue.name.toLowerCase(), 0) > -1) ||
                    (item.birthday.toLowerCase().indexOf(action.findValue.birthday.toLowerCase(), 0) > -1) ||
                    (item.city.toLowerCase().indexOf(action.findValue.city.toLowerCase(), 0) > -1)
                ) {
                    if (
                        item.name.toLowerCase().startsWith(action.findValue.name.toLowerCase()) &&
                        item.birthday.toLowerCase().startsWith(action.findValue.birthday.toLowerCase()) &&
                        item.city.toLowerCase().startsWith(action.findValue.city.toLowerCase())
                    ) {
                        if (action.findValue.name.trim() === '' && action.findValue.birthday.trim() === '' && action.findValue.city.trim() === '') {
                            return false
                        }

                        return true
                    }
                }

                return false
            })

            return Object.assign({}, state, {
                data: [...filterData]
            })
        }
        default:
            return state
    }
}