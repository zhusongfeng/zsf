$(document).ready(function(){
  //获取页面数据
  var ticket = 'sd-100';
  $.get("http://adv.qclike.cn/api/goods/info?ticket="+ticket, function(result){

    $('.min_price').text(result.data.goods_price );
    $('.biaoti').text(result.data.goods_name);
    $('.danjia').text(result.data.spec_json[0].price);
    $("#detailImage").attr('src',result.data.detail_image);
    $(".figure").attr('src',result.data.goods_images[0]);
    $('#specinfo').val(result.data.spec_json[0].values); // 用法1 给input赋值value567
    // 轮播图
    var banner = '';
    for (var i=0;i< result.data.goods_images.length;i++){
      console.log(111,result.data.goods_images[i])
      banner+='<div class="swiper-slide" style="width: 375px;">\n' +
          '<img style="width:100%;" src="'+(result.data.goods_images[i])+'" >\n' +
          '</div>';

    }
    $(".swiper-wrapper").append(banner);

    
    //规则
    var str = '';
    for (var i=0;i< result.data.spec_json.length;i++){
      console.log(111,result.data.spec_json[i].values)
      if(i ==0){
        str="<span class='_spec-item active'>"+ result.data.spec_json[i].values+"</span></br>";
      }else {
        str+="<span class='_spec-item'>"+ result.data.spec_json[i].values+"</span></br>";
      }

    }

    $(".guige").append(str);
    $('.guige span').on('click',function (e) {
      var index = $(".guige span").index(this);
      console.log(1111111111,index)
      console.log(1111111111,e.target.innerText)
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $('#specinfo').val(e.target.innerText); // 用法1 给input赋值value567
      $('.danjia').text(result.data.spec_json[index].price);
    })


  });




})