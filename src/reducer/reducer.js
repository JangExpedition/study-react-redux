const initialValue = {number: 0, size: 1};

export default function reducer(state = initialValue, action){
    switch(action.type){
        case "SETNUMBER": return {...state, number: state.number + Number(action.size)};
        case "SETSIZE" : return {...state, size: action.value};
        default: return state;
    }
}