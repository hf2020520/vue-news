<template>
  <div class="content">
      <Slider></Slider>
	  <div class="newsList">
	  	<ul>
	  		<li v-for="item in dataList">
	  		   <router-link :to="'/article/'+item.id">	
	  			 <h2>{{item.id}} .{{item.title}}</h2>
	  			 <p>{{item.detail}}</p>
	  		   </router-link>
	  		</li>
	  	</ul>
	  </div>
  </div>
</template>

<script>
import Slider from './Slider.vue'
export default {
   data(){
   	return{
   		dataList:[]
   	}
   },
   components:{
   	   Slider
   },
   mounted(){
   	this.fetchData();
   },
   methods:{
   	  fetchData(){
   	  	var _this = this;
   	  	this.$http.get('static/data/index.json').then(function(res){
   	  		_this.dataList = res.data;
   	  	}).catch(function(err){
   	  		console.log(err);
   	  	});
   	  }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
	max-width:6.4rem; 
	margin:0 auto; 
	margin-bottom:0.8rem;
	.newsList{
		margin:0 auto;
		ul{ 
			padding:0 0.4rem;
			li{ 
				color:#494d4d; 
				padding:0.2rem 0; 
				border-bottom:1px dashed #ccc;
				h2{
					max-height:0.9rem; 
					font-size:0.33rem; 
					overflow:hidden;
				}
				p{
					max-height:1.8rem; 
					margin-top:0.05rem;
					overflow:hidden;
					font-size: .2rem;
				}
			}
		}
	}
}
</style>
