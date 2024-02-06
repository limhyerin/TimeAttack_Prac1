const INPUTVALUE = INPUTVALUE;
const INCREASE = INCREASE;
const DECREASE = DECREASE;

export const setValue = (value) => ({ type: INPUTVALUE, value });
export const setIncrease = () => ({ type: INCREASE });
export const setDecrease = () => ({ type: DECREASE });

// 초기 상태값
const initialState = {
  number: 0,
  value: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case INPUTVALUE:
      return {
        ...state,
        value: action.value,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.value,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.value,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
