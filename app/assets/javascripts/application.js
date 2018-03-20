// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
//= require_tree .

$(function() {
  $('.flash').fadeOut(3000);

  // $('.modal-content').click(function () {
  //   // 背景がクリックされたら、ウィンドウを閉じる
  //   $('.modal-content').hide();
  //   return false;
  // });
  //
  // $('.container').click(function (event) {
  //   // ウィンドウの中身をクリックしても、閉じないようにする
  //   // (親である .windowBg への伝播を止める)
  //   event.stopPropagation();
  // });
  //
  // $('.close').click(function (event) {
  //   // 閉じるボタンのイベントをキャンセルする
  //   // (親である .windowBg への伝播は行う → ウィンドウは閉じられる)
  //   event.preventDefault();
  // });
});
