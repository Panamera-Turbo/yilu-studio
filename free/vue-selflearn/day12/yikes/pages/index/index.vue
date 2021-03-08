<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/users/14.jpeg"></image>
			</view>
			
			<view class="top-bar-center">
				<image class="logo" src="../../static/logo.png"></image>
			</view>
			<view class="top-bar-right">
				<image class="add" src="../../static/index/add.png"></image>
				<image class="search" src="../../static/index/search.png"></image>
			</view>
		</view>
		<view class="apply"></view>
		<view class="freinds">
			<view class="freind-list-l">
				<text class="tip">1</text>
				<image src="../../static/users/2.jpeg"></image>
			</view>
			<view class="freind-list-r">
				<view class="top">
					<view class="name">都知道</view>
					<view class="time">14:33</view>
				</view>
				<view class="content">[content; substance] 事物嗦包含的实质性事物</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello,app'
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang = "scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* .logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	} */
	
	.top-bar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;	//border就不会在计算的宽度里面
		background-color: $uni-bg-color;
		border-bottom: 1px solid $uni-border-color;
		box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
		padding-left: $uni-spacing-col-base;
		padding-right: $uni-spacing-col-base;
	}
	
	.top-bar-left{
		float: left;
		image{
			margin-top: 10rpx;
			width: 68rpx;
			height: 68rpx;
			border-radius: 16rpx;
		}
	}
	.top-bar-center{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		text-align: center;
		.logo{
			padding-top: 19rpx;
			width: 88rpx;
			height: 42rpx;
		}
	}
	
	.top-bar-right{
		float: right;
		/* border: 1px solid red; */
		
		.search{
			width: 88rpx;
			height: 88rpx;
			display: inline-block;
			
		}
		
		.add{
			width: 88rpx;
			height: 88rpx;
			display: inline-block;
		}
		
		image{
			width: 52rpx;
			height: 52rpx;
		}
	}
</style>
