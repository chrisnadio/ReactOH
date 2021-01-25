import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

const Counter = (props) => {
// const Counter = ({hitungBro}) => {
    const [count, setCount] = useState(0);

    const tambah = () => {
        setCount(count +1);
    }

    const kurang = () => {
        setCount(count -1);
    }

    console.log('props =>', props);

    return(
        <>
            <p>This is Counter Page</p>
            <p>Click!: {count} times</p>
            <Button onClick={kurang}>Kurang</Button>
            <Button onClick={tambah}>Tambah</Button>
            <p>-----------------------------</p>
            <p>Click!: {props.hitungBro} times</p>
            <Button onClick={props.handleSubtAction}>Kurang</Button>
            <Button onClick={props.handleAddAction}>Tambah</Button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hitungBro: state.hitung
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddAction: () => dispatch ({type: 'HANDLE_ADD'}),
        handleSubtAction: () => dispatch ({type: 'HANDLE_SUBT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);