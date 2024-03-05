var ssConfig = {
	site: '6AYNYTBV',
	base: 'syncsearch',
	search: {
		group: '1',
		charset: 'utf-8',
		count: 10,
		// inputHitCount: {
		// 	type: 'radio',
		// 	count: [10, 20, 30],
		// 	className: '',
		// 	suffix: ''
		// },
		paginationSize: 4,
		align: 'center',
		dateFormat: 'yyyy年MM月dd日',
		opacityTime: 500,
		summaryLength: 200,
//		summaryHead: true,
		theme: 'gray',
		loadingAnimation: false,
		templates: {},
		groupFieldType: 'radio',
		groupLimit: [],
		useItemPicture: false,
		totalHitsComma: true,
		keywordRanking: {
			enable: false,
			displayableCount: 1,
			baseUrl: 'https://cdn.syncsearch.jp/keyrank',
			fileName: 'ranking_result_utf8.js'
		},
		relateWords: {
			size: 5,
//			type: 'log',
		},
		facet: {
			type: 'radio',
			countPrefix: '(',
			countSuffix: ')',
			ulClass: '',
			liClass: '',
			showZero: true,
			showContentPosition: 'left',
			refresh: true,
			resetLabel: 'Reset selection',
			resetLabelPosition: 'top'
		},
		multiViews: [
			// {
			// 	id: 'ss-multi-1',
			// 	viewTitle: 'グループ１',
			// 	group: '1',
			// 	category: 'none',
			// 	sort: '',
			// 	reverse: '',
			// 	count: 5,
			// 	summaryLength: 50,
			// 	templates: {}
			// }
		]
	},
	image: {
		// popup: true,
		// popupItemPicture: false,
		adPosition: 2,
		thumbPosition: 2,
		templates: {},
		useScrollBlock: false
	},
	/*
	suggest: {
		forms: [
			{
				id: '', //ss-form, ss-query
				group: '1',
				depth: 3
			},
			{
				id: '1', //ss-form1, ss-query1
				group: '1',
				depth: 3
			},
			{
				id: '2', //ss-form2, ss-query2
				group: '1',
				depth: 3
			}
		],
		depth: 3,
		wmModeExcludes: '',
		cssPath: '/sites/default/files/assets/plugin/SyncSearchJS/ss_suggest.css',
		templates: {}
	},
	useIpv6Domain:false
	*/
};

function createCustomInputField() {
	return '';
// 日付範囲指定絞り込み
//	return createDatePart("dby", 2009, new Date().getFullYear(), true) +
//	'年' + createDatePart("dbm", 1, 12, true) + '月' + createDatePart("dbd", 1, 31, true) + '日' + '～' +
//	createDatePart("dey", 2009, new Date().getFullYear(), true) +
//	'年' + createDatePart("dem", 1, 12, true) + '月' + createDatePart("ded", 1, 31, true) + '日';
}

ssConfig.search.templates.form =
'<form name="search" id="ss-form">' +
	'<div class="rn-ss-input">' +
	'<input type="text" value="{{query}}" name="query" id="ss-query" class="ss-search-input" autocomplete="off" aria-autocomplete="none" />' +
	'<input type="submit" class="ss-search-button" value="検索" />' +
	'</div>' +
	// '<div id="ss-keyword-ranking" class="ss-keyword-ranking" style="display: none;"><p class="ss-keyword-ranking-heading">よく検索されるキーワード</p></div>' +
	// '<div class="ss-groups">{{groupFields}}</div>' +
	// '<div class="ss-group-categories">{{groupFields.categoryFields}}</div>' +
	'<div class="ss-categories">{{category.category_new}}</div>' +
	'<div class="ss-categories">{{category.pdf}}</div>' +
	createCustomInputField() +
 '</form>';

ssConfig.search.templates.item =
'<div class="ss-item">' +
	// '<div class="ss-image"><a href="{{item.link}}"><img src="{{item.image}}" id="{{item.imageId}}" /></a></div>' +
	'<div class="ss-page">' +
		'<h4 class="ss-title">' +
			// '{{item.fileIcon}}' +
			// '{{item.urlIcon}}' +
			'<span class="ss-file-type">{{item.fileType}}</span><a href="{{item.link}}">{{item.title}}</a>' +
		'</h4>' +
		'<div class="ss-summary">{{item.summary}}</div>' +
		'<div class="ss-url"><a href="{{item.link}}">{{item.url}}</a></div>' +
		// '<span class="ss-content-length">({{item.contentLength}})</span>' +
		// '<span class="ss-last-modified">{{item.lastModified}}</span>' +
	'</div>' +
'</div>';

ssConfig.search.templates.aditem =
'<div class="ss-ad-item">' +
	'<div class="ss-ad-image"><a href="{{item.link}}"><img src="{{item.image}}" id="{{item.imageId}}"></a></div> ' +
	'<div class="ss-ad-page">' +
		'<h4 class="ss-ad-title"><a href="{{item.link}}">{{item.title}}</a></h4>' +
		'<div class="ss-ad-summary">{{item.summary}}</div>' +
		'<div class="ss-ad-url"><a href="{{item.link}}">{{item.url}}</a></div>' +
	'</div>' +
'</div>';

ssConfig.search.templates.navigation =
'<div class="rn-ss-nav">' +
	// '<div>表示件数: {{inputHitCount}}</div>' +
	'<div id="ss-navi">' +
		'<div class="ss-navi-left">' +
			//'<span id="ss-query-string"><b>"{{query}}"</b>の検索結果</span>' +
			'<span id="ss-query-string">検索結果</span>' +
			'<span id="ss-total-hits"><b>{{total}}</b>件</span> ' +
			// '<span id="ss-show-counts"><b>{{start}}</b>件 &#65374; <b>{{end}}</b>件を表示</span>' +
		'</div>' +
		'<div class="ss-navi-right">' +
			//'<p>表示切替</p>'+
			'<div>'+
				'<span id="ss-sort-date" class="{{sortDateSelected}}"><a href="#">新着</a></span>' +
				'<span id="ss-sort-match" class="{{sortMatchSelected}}"><a href="#">一致</a></span>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</div>';

ssConfig.search.templates.pagePrev =
'<span class="ss-page-prev" data-start="{{start}}"><a href="#">前へ</a></span>';
ssConfig.search.templates.pagination =
'<span class="ss-page {{pageSelected}}" data-start="{{start}}"><a href="#">{{page}}</a></span>';
ssConfig.search.templates.pageNext =
'<span class="ss-page-next" data-start="{{start}}"><a href="#">次へ</a></span>';
ssConfig.search.templates.pageFirst =
'<span class="ss-page-first" data-start="{{start}}"><a href="#">最初へ</a></span>';
ssConfig.search.templates.pageLast =
'<span class="ss-page-last" data-start="{{start}}"><a href="#">最後へ</a></span>';

ssConfig.search.templates.notfound =
'<div id="ss-not-found">' +
	// '<b>「{{query}}」</b>に一致するページは見つかりませんでした。' +
	'<p>あなたがお探しのキーワードに一致するページは見つかりませんでした。</p>'+
	// '<div id="ss-hint">検索のヒント:</div>' +
	'<ul id="ss-hint-message">' +
		'<li>・キーワードに誤りがないかお確かめください。</li>' +
		'<li>・目的の情報が見つからない場合、類似する別のキーワードなどお試しください。</li>' +
		// '<li>もっと一般的なキーワードに変えて検索してください。 </li>' +
	'</ul>' +
'</div>';

ssConfig.search.templates.maybe =
'<div id="ss-maybe">' +
	'<div id="ss-maybe-message">もしかして：</div>' +
'</div>';

ssConfig.search.templates.relateWords =
'<div id="ss-relate-words">' +
	'<dl>' +
		'<dt>関連キーワード</dt>' +
		'<dd>' +
			'<ul id="ss-relate-words-container">' +
			'</ul>'
		'</dd>' +
	'</dl>' +
'</div>';

if (ssConfig.image != undefined && ssConfig.image.templates != undefined) {
	ssConfig.image.templates.preview =
	'<div id="ss-preview">' +
		'<div id="ss-preview-container">' +
			'<img src="{{previewImage}}" id="ss-preview-image" width="400" height="300" alt="" />' +
		'</div>' +
	'</div>';
}
if (ssConfig.suggest != undefined && ssConfig.suggest.templates != undefined) {
	ssConfig.suggest.templates.item =
	'<div class="ss-suggest-item ss-suggest-item-off" id="{{item.suggestId}}">' +
		'<span class="ss-suggest-key">{{item.keyword}}</span>' +
	'</div>';
}

if (ssConfig.search.multiViews != undefined && ssConfig.search.multiViews.length > 0) {
	ssConfig.search.multiViews[0].templates.viewtitle =
	'<div class="ss-multiview-viewTitle">{{viewTitle}}の検索結果</div>';

	ssConfig.search.multiViews[0].templates.navigation =
	'<div>' +
		'<div class="ss-multiview-navi">' +
			'<span class="ss-multiview-total-hits"><b>{{total}}</b>件</span> ' +
				'<span class="ss-multiview-show-counts"><b>{{start}}</b>件 &#65374; <b>{{end}}</b>件を表示</span>' +
		'</div>' +
	'</div>';

	ssConfig.search.multiViews[0].templates.item =
	'<div class="ss-item">' +
		'<div class="ss-page">' +
			'<h4 class="ss-title">' +
				'<span class="ss-file-type">{{item.fileType}}</span><a href="{{item.link}}">{{item.title}}</a>' +
			'</h4>' +
			'<div class="ss-summary">{{item.summary}}</div>' +
			'<div class="ss-url"><a href="{{item.link}}">{{item.url}}</a></div>' +
		'</div>' +
	'</div>';
// SyncAnswer連携用フォーマット
// 利用する場合はコメントを外して上記設定と差し替えてください
// 	ssConfig.search.multiViews[0].templates.item =
// 	'<div class="ss-item">' +
// 	'<div class="ss-page">' +
// 		'<h4 class="ss-title">' +
// 			'<a href="{{item.url}}">{{item.highlightTitle}}</a>' +
// 		'</h4>' +
// 		'<div class="ss-summary">{{item.highlightContent}}</div>' +
// 		'<div class="ss-url"><a href="{{item.url}}">{{item.url}}</a></div>' +
// 	'</div>' +
// '</div>';
	ssConfig.search.multiViews[0].templates.notfound =
	'<div class="ss-multiview-not-found">' +
		'<b>「{{query}}」</b>に一致するページは見つかりませんでした。' +
	'</div>';

	ssConfig.search.multiViews[0].templates.searchLink =
	'<div class="ss-multiview-searchLink">' +
		'<a href="{{searchLink}}">{{viewTitle}}の検索結果をもっと見る</a>' +
	'</div>';

	var multiViewCount = ssConfig.search.multiViews.length;
	for (var i=1; i < multiViewCount; i++) {
		ssConfig.search.multiViews[i].templates.viewtitle = ssConfig.search.multiViews[0].templates.viewtitle;
		ssConfig.search.multiViews[i].templates.navigation = ssConfig.search.multiViews[0].templates.navigation;
		ssConfig.search.multiViews[i].templates.item = ssConfig.search.multiViews[0].templates.item;
		ssConfig.search.multiViews[i].templates.notfound = ssConfig.search.multiViews[0].templates.notfound;
		ssConfig.search.multiViews[i].templates.searchLink = ssConfig.search.multiViews[0].templates.searchLink;
	}
}

/*!
* ss_helper.js
* http://www.syncsearch.jp/
*
* @version 1.0.1
* @date 2021-08-06
* @license Copyright 2021 SyncThought,Inc. All Rights Reserved.
* This software is the proprietary information of SyncThought,Inc.
* Use is subject to license terms.
*/

function createDatePart(a,e,t,o){var a='<select name="'+a+'" class="ss-extra-param">',r="";o&&(r='<option value=""></option>');for(var n=e;n<=t;n++)r+='<option value="'+n+'">'+n+"</option>";return a+r+"</select>"}
/*!
* ss_loader.js
* http://www.syncsearch.jp/
*
* @version 1.0.0
* @date 2017-06-19
* @license Copyright 2017 SyncThought,Inc. All Rights Reserved.
* This software is the proprietary information of SyncThought,Inc.
* Use is subject to license terms.
*/
var SyncSearchLoader=function(){this.proto="https:"===location.protocol?"https://":"http://",this.server="",this.CDNv6={host:"cdn.syncsearch-ipv6.net",path:"/libs/"},this.CDN={host:"cdn.syncsearch.jp",path:"/libs/"},this.ALT={host:"static.syncsearch.jp",path:"/libs/"},this.ALTv6={host:"static.syncsearch-ipv6.net",path:"/libs/"}};SyncSearchLoader.prototype={load:function(){var targetServer,targetServer;targetServer=ssConfig.useIpv6Domain?this.CDNv6:this.CDN;var url=this.proto+targetServer.host+targetServer.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),xhr=this.createAjaxRequest();try{xhr.open("GET",url,!0),xhr.timeout=500,xhr.onreadystatechange=function(){4==xhr.readyState&&(200==xhr.status?(ssLoader.server=targetServer,eval(xhr.responseText)):0==xhr.status&&ssLoader.loadScript())},xhr.send(null)}catch(ex){ssLoader.loadScript()}},createAjaxRequest:function(){var t;if(window.XMLHttpRequest)t=new XMLHttpRequest;else try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}return t},loadScript:function(t){s=ssConfig.useIpv6Domain?this.ALTv6:this.ALT,this.server=s;var t=this.proto+s.host+s.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),e=document.getElementsByTagName("head").item(0),s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("charset","utf-8"),s.setAttribute("src",t),e.appendChild(s)},init:function(initObj,version){var url=this.proto+this.server.host+this.server.path+ssConfig.base+"_"+version+".min.js";"undefined"!=typeof SS_DEV_SCRIPT&&(url=SS_DEV_SCRIPT);var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("charset","utf-8"),script.setAttribute("src",url);var done=!1;script.onload=script.onreadystatechange=function(){done||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(done=!0,eval(initObj+".init()"))},document.body.appendChild(script)}};var ssLoader=new SyncSearchLoader;ssLoader.load();