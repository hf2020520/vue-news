//import 数据 from ''	这里面可以获取数据
import * as types from './type'

export default{

	/*头部信息*/
	showHeader:({commit})=>{
		commit(types.HEAD_SHOW_SUCCESS);
	},
	hideHeader:({commit})=>{
		commit(types.HEAD_SHOW_FAIL);
	},
	/*loading*/
	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING)
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING)
	},
	/*底部条*/
	hideFooter:({commit})=>{
		commit(types.FOOTER_HIDE);
	},
	showFooter:({commit})=>{
		commit(types.FOOTER_SHOW)
	}
}
