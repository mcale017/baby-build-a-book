$('#theme input:radio').addClass('input_hidden');
$('#theme label').click(function () {
  $(this).addClass('selected').siblings().removeClass('selected');
});