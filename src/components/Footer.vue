<template>
	<div class="foot-btn">
		<ul>
	    	<router-link class="home" to="/home" tag='li'>
	    		<a href="javascript:;"><img style="width: .6rem;" src="static/img/home.png" alt=""/></a>
	    	</router-link>
	    	<router-link class="write" to='/follow' tag='li'>
	    		<a href="javascript:;"><img style="width: 1rem;" src="static/img/write.png" alt=""/></a>
	    	</router-link>
	    	<router-link class="my" to="/user-info" tag='li'>
	    		<a href="javascript:;"><img src="static/img/my.png" alt=""/></a>
	    	</router-link>
	    </ul>
	</div>
</template>
<style scoped> 
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:0.44rem;height:0.59rem;}
.foot-btn ul .write{width:0.82rem;height:0.81rem; margin-left:1.18rem;}
.foot-btn ul .my{width:0.39rem;height:0.63rem; margin-left:1.18rem; margin-top:0.07rem;}
</style>