import React from 'react'
import { connect } from 'react-redux'

class ListData extends React.Component {
    render() {

        const listFindData = this.props.findData.map((item) =>
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>{item.city}</td>
            </tr>
        );

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
        findData: state.findData.data
    }
}

export default connect(mapStateToProps)(ListData)