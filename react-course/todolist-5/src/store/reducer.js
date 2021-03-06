import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './ActionTypes'

const defaultState={
	inputValue:'',
	list:[]
}

// reducer可以接收state,但绝对不能修改state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用，如new date()和异步的操作等
export default (state=defaultState,action) => {
	if(action.type==CHANGE_INPUT_VALUE){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	if(action.type==ADD_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue='';
		return newState;
	}
	if(action.type==DELETE_TODO_ITEM){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState;
	}
	return state;
}
