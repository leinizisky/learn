import styled from 'styled-components';

export const HomeWrapper=styled.div`
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;
export const HomeLeft=styled.div`
	float:left;
	margin-left:15px;
	padding-top:30px;
	width:625px;
	.banner-img{
		width:625px;
		height:270px;
	}
`;
export const HomeRight=styled.div`
	width:280px;
	float:right;
`;

export const TopicWrapper=styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-18px;
	border-bottom:1px solid #f0f0f0;
`;

export const TopicItem=styled.div`
	float:left;
	hieght:32px;
	line-height:32px;
	padding-right:10px;
	margin-left:18px;
	margin-bottom:18px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block; 
		float:left;
		width:32px;
		height:32px;
		margin-right:10px;
	}	
`;

export const ListItem=styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #f0f0f0;
	.pic{
		display:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:3px;
	}
`;

export const ListInfo=styled.div`
	width:500px;
	float:left;
	.title{
		font-size:18px; 
		line-height:24px;
		margin-bottom:8px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`;

export const RecommendWrapper=styled.div`
	margin:30px 0;
	width:280px;
`;

export const RecommendItem=styled.div`
	width:280px; 
	height:50px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
	margin-bottom:6px;
`;

export const DownloadWrapper=styled.div`
	margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    img {
    	width: 60px;
	    height: 60px;
	    opacity: .85;
    }
`;

export const DownloadInfo=styled.div`
	display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    h4{
    	font-size: 15px;
    	color: #333;
    }
    p{
    	margin-top: 4px;
	    font-size: 13px;
	    color: #999;
    }
`;