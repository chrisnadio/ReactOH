//penulisan import ala node
const redux = require('redux');

//buat inisial state
const initialState = {
    usia: 10,
    nilai: 15,
}

//Const untuk menghindari typo
const TAMBAH_USIA = 'TAMBAH_USIA';
const TAMBAH_NILAI = 'TAMBAH_NILAI';

//reducer, untuk mengubah state disini
const rootReducer = (state = initialState, action) => {
    if(action.type === TAMBAH_USIA) {
        return {
        ...state,
        usia: state.usia + 10,
        }
    } else if (action.type === TAMBAH_NILAI) {
        return {
        ...state,
        nilai: state.nilai + action.payload
        }
    }
    console.log('action tambah ==', action)
    console.log('ini adalah state =', state);
    return state;
}

//store
const store = redux.createStore(rootReducer);
console.log('ini adalah store =', store);
console.log('get State==', store.getState());


//action atau dispatcher, yang dikirim bentuknya objek
store.dispatch({type:'TAMBAH_USIA'});
store.dispatch({type: 'TAMBAH_NILAI', payload: 200});
console.log('get State==', store.getState());