import { FIND_DATA } from '../actions/findItemToDataActions'
import initialState from './initialState';

export default (state = initialState.findData, action) => {
    switch (action.type) {
        case FIND_DATA: {

            let filterData = []
            let textInputFindEmpty = true

            if (action.findValue.name.trim() === '' || action.findValue.birthday.trim() === '' || action.findValue.city.trim() === '') {
                filterData = action.arrData.filter((item) => {
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
                            return true
                        }
                    }

                    return false
                })
            }


            if (action.findValue.name.trim() !== '' || action.findValue.birthday.trim() !== '' || action.findValue.city.trim() !== '') {
                textInputFindEmpty = false
            } else {
                textInputFindEmpty = true
            }   

            return Object.assign({}, state, {
                data: [...filterData],
                textInputFindEmpty
            })
        }
        default:
            return state
    }
}