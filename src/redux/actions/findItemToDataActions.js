export const FIND_DATA = 'FIND_DATA'

function findData(findValue, arrData) {
    return {
        type: FIND_DATA,
        findValue,
        arrData
    };
}

export const findInData = (value, arrData) => {
    return (dispatch) => {
        dispatch(findData(value, arrData))
    }
}