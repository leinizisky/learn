import styled from 'styled-components';
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper=styled.div`
	position:relative;
	height:56px;
	border-bottom:1px solid #f0f0f0;
`;

export const Logo=styled.div`
	position:absolute;
	top:0;
	left:0;
	display:block;
	height:56px;
	width:100px;
	background:url(${LogoPic});
	background-size:contain;
`;

export const Nav=styled.div`
	width:960px;
	padding-right:70px;
	box-sizing:border-box;
	margin:0 auto;
	height:100%;
`;

export const NavItem=styled.div`
	line-height:56px;
	padding:0 15px;
	font-size:17px;
	color:#333;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
`;

export const SearchWrapper=styled.div`
	float:left;
	position:relative;

	.zoom{
		position:absolute;
		bottom:5px;
		right:5px;
		width:30px;
		line-height:30px;
		border-radius:15px;
		text-align:center;
		color:#999;
		font-weight:bold;
		&.focused{
			background:#999; 
			color:#fff;
		}
	}
`;

export const NavSearch=styled.input.attrs({
	placeholder:'搜索'
})`
	width:160px; 
	line-height:38px;
	margin-top:9px;
	margin-left:20px;
	padding:0 30px 0 20px;
	box-sizing:border-box;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	font-size:14px;
	color:#777;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;
	}
	&.slide-enter{
		transition:all .3s ease-in;
	}
	&.slide-enter-active{
		width:240px;

	}
	&.slide-exit{
		transition:all .3s ease-in;
	}
	&.slide-exit-active{
		width:160px;
	}
`;

export const SearchInfo=styled.div`
	position:absolute;
	top:56px; 
	left:0;
	width:240px;
	padding:0 20px;
	box-shadow:0 0 8px rgba(0,0,0,.2);
	background:#fff;
`;
export const SearchInfoTitle=styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`;

export const SearchInfoSwitch=styled.span`
	float:right;
	font-size:13px;
	color:#969696;
	cursor:pointer;
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:2px;
		transition:all .2s ease-in;
		transform-origin:center center;
	}
`;

export const SearchInfoList=styled.div`
	overflow:hidden;
`;

export const SearchInfoItem=styled.a`
	display:block;
	float:left;
	line-height:20px;
	padding:0 5px;
	margin:0 10px 10px 0;
	font-size:12px;
	color:#787878;
	border:1px solid #ddd;
	border-radius:3px;
`;

export const Addition=styled.div`
	position:absolute;
	right:0;
	top:0;
	line-height:56px;
`;

export const Button=styled.div`
	float:right;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	&.reg{
		color:#ea6f5a;
		background:#fff;
	}
	&.writting{
		color:#fff;
		background:#ea6f5a;
	}
`;

