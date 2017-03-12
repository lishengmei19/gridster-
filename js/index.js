var gridster;
var widget = [
  ["<li><header class='move'> |||</header>0<footer class='add'>添加</footer></li>", 1, 1],
  ["<li><header class='move'> |||</header>1<footer class='add'>添加</footer></li>", 1, 1],
  ["<li><header class='move'> |||</header>2<footer class='add'>添加</footer></li>", 2, 1],
  ["<li><header class='move'> |||</header>3<footer class='add'>添加</footer></li>", 2, 1],
  ["<li><header class='move'> |||</header>4<footer class='add'>添加</footer></li>", 2, 1],
  ["<li><header class='move'> |||</header>5<footer class='add'>添加</footer></li>", 3, 2],
  ["<li><header class='move'> |||</header>6<footer class='add'>添加</footer></li>", 1, 1]
];
$(function() {
  gridster = $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [200, 200],
    draggable: {
      handle: '.move'
    }
  }).data('gridster');

});

var addIssue = `
<div class="addIssue">
  <span>
  请选择添加的板块：
  </span>
  <select >
    <option value="0">我的头像</option>
    <option value="1">我的信息</option>
    <option value="2">导航</option>
    <option value="3">我的说说</option>
    <option value="4">我的日记</option>
    <option value="5">我的相册</option>
    <option value="6">天气</option>
  </select>
  <button type="button">添加</button>
</div>
`
$('#change').on('click', function() {
  $('.delete').show();
  $('.move').show();
  $('#change').hide();
  $('#store').show();
  $('.title').after(addIssue);

})
$('#store').on('click', function() {
  $('.delete').hide();
  $('.move').hide();
  $('#change').show();
  $('#store').hide();
  $('.addIssue').hide();
})


$('.add').on('click', function() {
  if ($('header').siblings('.addIssue').length > 0) {
    $(this).parent().siblings('select').remove();
  } else {
    $(this).parent().after(addIssue);
  }
  //gridster.add_widget.apply(gridster, widget[2])
})
