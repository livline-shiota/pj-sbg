$(function () {
	var setURL = 'https://www.softbank.jp/sbnews/rss/category/TOMODACHI';
	var setNUM = 40;
	var setID = 'news_sb';
	xmlLoad(setURL, setID, setNUM);
});

function xmlLoad(_xmlUrl, _id, _num) {
	DD = new Date();
	HH = DD.getHours();
	MM = DD.getMinutes();
	SS = DD.getSeconds();
	var xmlUrl = _xmlUrl + "?" + HH + MM + SS;
	var main = this;
	$.ajax({
		url: xmlUrl,
		type: 'GET',
		dataType: 'xml',
		timeout: 10000,
		error: function () {
			_msg = 'error';
			xmlOpen(_msg, _id, _num);
		},
		success: function (_xml) {
			main.xml = _xml;
			_msg = 'load';
			xmlOpen(_msg, _id, _num);
		}
	});
	return;
}
var xmlOpen = function (_msg, _id, _num) {
	var main = this;
	var html = '';
	var ID = _id;
	var Num = _num;
	var userAgent = window.navigator.userAgent.toLowerCase();
	if (_msg == 'load') {
		xml = main.xml;
		var channelData = $(xml).find('channel')[0];
		$(channelData).find('item').each(function (i) {
			if (i < Num) {
				postTitle = $(this).find('title').text();
				postLink = $(this).find('link').text();
				publishedDate = $(this).find('pubDate').text();
				var pdate = new Date(publishedDate);
				var pyear = pdate.getFullYear();
				var pmonth = pdate.getMonth() + 1;
				var pday = pdate.getDate();
				if (pyear < 2000) pyear += 1900;
				if (pmonth < 10) {
					pmonth = "0" + pmonth;
				}
				if (pday < 10) {
					pday = "0" + pday;
				}
				var postDate = pyear + "." + pmonth + "." + pday + " ";
				var description = $(this).find('description')[0].firstChild.nodeValue;
				var thumbnails = description.match(/<img[^>]+>/gi);
				thumbnail = thumbnails[0];
				//html生成
				html += '<li><a class="thum_topics" href="' + postLink + '" target="_blank"><div class="area_image">' + thumbnail + '</div><p>' + postDate + '</p><p class="topics_title">' + postTitle + '</p></a></li>';
			}
		});
	}
	$("#" + ID).html(html);
	$(".topics_title").each(function(){
		var txt = $(this).text();
		if(txt.length > 23){
			txt = txt.substr(0, 23);
			$(this).text(txt + "･･･");
		}
	});
	setTimeout(viewTopic, 100);
}
