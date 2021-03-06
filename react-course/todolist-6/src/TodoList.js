import React,{ Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'
import { getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state=store.getState();
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleStoreChange=this.handleStoreChange.bind(this);
		this.handleButtonClick=this.handleButtonClick.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	render(){
		return (
				<TodoListUI 
					inputValue={this.state.inputValue}
					list={this.state.list}
					handleInputChange={this.handleInputChange}		
					handleButtonClick={this.handleButtonClick}
					handleItemDelete={this.handleItemDelete}
				/>
			)
	}

	componentDidMount(){
		axios.get('/list.json').then((res) => {
			const data=res.data;
			const action=initListAction(data);
			store.dispatch(action);
		})
	}

	handleInputChange(e){
		const action=getInputChangeAction(e.target.value)
		store.dispatch(action);
	}

	handleStoreChange(){
		this.setState(store.getState());
	}

	handleButtonClick(){
		const action=getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index){
		const action=getDeleteItemAction(index)
		store.dispatch(action);
	}

}

export default TodoList;