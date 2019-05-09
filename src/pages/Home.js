import React from 'react';
import InputsFilter from '../components/home/InputsFilter';
import ListData from '../components/home/ListData';
import { connect } from 'react-redux'
import { getListData } from '../redux/actions/getListDataActions';

class Home extends React.Component {

    componentDidMount() {
        this.props.getListData()
    }

    render() {
        return (
            <header className="home">
                <InputsFilter />
                <ListData />
            </header>
        )
    }
}


const mapDispatchToProps = { getListData }

export default connect(
    null,
    mapDispatchToProps
)(Home)