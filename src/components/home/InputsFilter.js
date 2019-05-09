import React from 'react'
import Input from '../../common_components/Input'
import { connect } from 'react-redux'
import { findInData } from '../../redux/actions/findItemToDataActions';

class InputsFilter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            item: {
                name: '',
                birthday: '',
                city: ''
            }
        }
    }

    onChangeName(event) {
        this.setState({ item: { ...this.state.item, name: event.target.value } }, () => {
            this.props.findInData(this.state.item, this.props.listData)
        })
    }
    onChangeBirthday(event) {
        this.setState({ item: { ...this.state.item, birthday: event.target.value } }, () => {
            this.props.findInData(this.state.item, this.props.listData)
        })
    }
    onChangeCity(event) {
        this.setState({ item: { ...this.state.item, city: event.target.value } }, () => {
            this.props.findInData(this.state.item, this.props.listData)
        })
    }



    render() {
        return (
            <div className="inputs-filter-wrap">
                <div className="inputs-filter-title">
                    <span>Имя</span>
                    <span>Дата</span>
                    <span>Страна</span>
                </div>
                <div className="inputs-filter-container">
                    <Input onChange={(event) => { this.onChangeName(event) }} />
                    <Input onChange={(event) => { this.onChangeBirthday(event) }} />
                    <Input onChange={(event) => { this.onChangeCity(event) }} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listData: state.listData.data,
    }
}

const mapDispatchToProps = { findInData }

export default connect(mapStateToProps, mapDispatchToProps)(InputsFilter)