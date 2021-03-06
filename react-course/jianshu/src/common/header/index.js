import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
	SearchWrapper
} from './style.js'

class Header extends Component {

	getListArea() {
		const {
			focused,
			list,
			page,
			totalPage,
			mouseIn,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
						onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
						>
						<i ref={(icon) => {this.spinIcon=icon}} className='iconfont spin'>&#xe851;</i>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
							// list.map((item) => {
							// 	return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							// })
						}
					</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}

	render() {
		const {
			focused,
			handleInputFocus,
			handleInputBlur,
			list,
			isLogin,
			logOut
		} = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<Link to='/'>
						<NavItem className='left active'>首页111</NavItem>
					</Link>
					<Link to='/download'>
						<NavItem className='left'>下载App</NavItem>
					</Link>
					<NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
					{
						isLogin?
						<NavItem onClick={logOut} className='right'>退出</NavItem>:
						<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
					
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={300}
							classNames='slide'
						>
							<NavSearch 
							className={focused?'focused':''}
							onFocus={() => handleInputFocus(list)}
							onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe7d4;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/writer'>
						<Button className='writting'><i className='iconfont'>&#xe608;</i>写文章</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}



const mapStateToProps = (state) => {
	return {
		//focused:state.get('header').get('focused')
		// 等价于上面的代码
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		isLogin:state.getIn(['login','isLogin'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}

		},
		logOut(){
			dispatch(loginActionCreators.logOut())
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);