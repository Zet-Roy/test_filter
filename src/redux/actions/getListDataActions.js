import dataPeople from './data'

export const LOAD_DATA = 'LOAD_DATA'

function loadData(data) {
    return {
        type: LOAD_DATA,
        data
    };
}

export const getListData = () => {
    return (dispatch) => {
        dispatch(loadData(dataPeople.data))
    }
}