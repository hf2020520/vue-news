<template>
  <div id="app">
    <Loading v-show="loading"></Loading>
    <NavHeader v-show="headShow"></NavHeader> 
    <transition name="slide-down">
      <router-view></router-view>
    </transition>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import Home from './components/Home.vue'
import FooterView from './components/Footer.vue'
import {mapGetters} from 'vuex'
export default {
		computed:mapGetters([
			'headShow',
			'loading',
			'footerShow'
		]),
		mounted(){
			var path=this.$route.path.substring(1);
			this.headerChange(path);
			this.footerChange(path);
		},
		watch:{
			$route(to){
				var path=to.path.substring(1);
				this.headerChange(path);
				this.footerChange(path);
			}
		},
		methods:{
			headerChange(path){
				if(path=='user-info' || path=='user-reg' || path=='user-login' || path.indexOf('article')!=-1){
					this.$store.dispatch('hideHeader')
				}else{
					this.$store.dispatch('showHeader')
				}
			},
			footerChange(path){
				if(path.indexOf('article')==-1){
					this.$store.dispatch('showFooter');
				}else{
					this.$store.dispatch('hideFooter');
				}
			}
		},
		components: {
			Home,
			NavHeader,
			FooterView
		}
}
</script>

<style>
body{
   background:#f2f4f5;
   overflow-x: hidden;
}
li{
   list-style: none;
}
a{
   text-decoration: none;
   color: #494d4d;
}
.slide-down-enter-active, .slide-down-leave-active {
	transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	opacity: .7;
	transform: translate3d(0, 6em, 0);
}
.slide-down-enter, .slide-down-leave-active {
	opacity: .1;
	transform: translate3d(0, 6em, 0);
}
</style>
