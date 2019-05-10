import React from 'react'
import { connect } from 'react-redux'

class ListData extends React.Component {

    rowData(item) {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>{item.city}</td>
            </tr>
        )
    }

    render() {

        let listFindData
        
        if(this.props.textInputFindEmpty) {
            listFindData = this.props.listData.map(this.rowData)
        } else {
            listFindData = this.props.findData.map(this.rowData)
        }
        
        return (
            <div className="table-wrap">
                <table border="1">
                    <tbody>
                        <tr>
                            <td>ФИО</td>
                            <td>Год рождения</td>
                            <td>Город</td>
                        </tr>
                        {listFindData}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        findData: state.findData.data,
        listData: state.listData.data,
        textInputFindEmpty: state.findData.textInputFindEmpty
    }
}

export default connect(mapStateToProps)(ListData)