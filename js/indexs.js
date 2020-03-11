$(document).ready(function(){
  //获取页面数据
  var ticket = 'sd-100';
  $.get("http://adv.qclike.cn/api/goods/info?ticket="+ticket, function(result){


    $(".brick-picture--2khEj").attr('src',result.data.detail_image);







  });




})