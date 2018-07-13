import React,{ Component } from 'react';
import { ListItem,ListInfo,LoadMore} from '../style';
import { connect } from 'react-redux';
import { actionCreaters } from '../store'

class List extends Component{
	render(){
		const { list, page, getMoreList }=this.props;
		return(
			<div>
				{
					list.map((item,index) => (
						<ListItem key={index}>
							<img className='pic' src={item.get('imgUrl')} alt=''/>
							<ListInfo>
								<h3 className='title'>{item.get('title')}</h3>
								<p className='desc'>{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
					))
				}
				<LoadMore onClick={() => getMoreList(page)} >加载更多</LoadMore>
			</div>
		)
	}
}


const mapState=(state) => ({
	list:state.getIn(['home','articleList']),
	page:state.getIn(['home','articlePage'])
});

const mapDispatch=(dispatch) => ({
	getMoreList(page){
		dispatch(actionCreaters.getMoreList(page))
	}
})

export default connect(mapState,mapDispatch)(List);