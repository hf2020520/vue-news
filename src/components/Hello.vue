<template>
  <div class="content">
	  <div class="newsList">
	  	<ul>
	  		<li>
	  			<h2>ddddddd</h2>
	  			<p>ddddddddd</p>
	  		</li>
	  	</ul>
	  </div>
  </div>
</template>

<script>
export default {
   data(){
   	return{
   		dataList:[]
   	}
   },
   mounted(){
   	this.fetchData();
   },
   methods:{
   	  fetchData(){
   	  	var _this = this;
   	  	this.$http.get('static/data/index.JSON').then(function(res){
   	  		_this.dataList = res.data;
   	  	}).catch(function(err){
   	  		console.log(err);
   	  	})
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
		width:6.4rem; 
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
				}
			}
		}
	}
}
</style>
