<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	/* 引入官方css库 */
	@import './common/uni.css';
	/* 引入自定义css库 */
	@import './common/common.css';
	@import './common/mycommon.css';
	/* 引入自定义图标库 */
	@import './common/iconfont.css';
	@import './common/icon.css';
	/* 引入自定义动画 */
	@import './common/animate.css';
</style>

