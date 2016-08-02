
$(document).ready(function() {
  $('#v1').hide();
  $('#v2').hide();
  $('#v3').hide();
  $('#v4').hide();
  $('#v5').hide();
  $('#v6').hide();
  $('#v7').hide();

var vid1 = document.getElementById("v1")
var vid2 = document.getElementById("v2")
var vid3 = document.getElementById("v3")
var vid4 = document.getElementById("v4")
var vid5 = document.getElementById("v5")
var vid6 = document.getElementById("v6")
var vid7 = document.getElementById("v7")


$('#spot1').mouseover(function() {
	$('#v1').show().trigger('play')})
$('#spot1').mouseout(function() {
	$('#v1').hide().trigger('pause')})

$('#spot2').mouseover(function() {
	$('#v2').show().trigger('play')})
$('#spot2').mouseout(function() {
	$('#v2').hide().trigger('pause')})

$('#spot3').mouseover(function() {
	$('#v3').show().trigger('play')})
$('#spot3').mouseout(function() {
	$('#v3').hide().trigger('pause')})

$('#spot4').mouseover(function() {
	$('#v4').show().trigger('play')})
$('#spot4').mouseout(function() {
	$('#v4').hide().trigger('pause')})

$('#spot5').mouseover(function() {
	$('#v5').show().trigger('play')})
$('#spot5').mouseout(function() {
	$('#v5').hide().trigger('pause')})

$('#spot6').mouseover(function() {
	$('#v6').show().trigger('play')})
$('#spot6').mouseout(function() {
	$('#v6').hide().trigger('pause')})

$('#spot7').mouseover(function() {
	$('#v7').show().trigger('play')})
$('#spot7').mouseout(function() {
	$('#v7').hide().trigger('pause')})

});




