$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('itemid') 
    

    var data = button.closest("li").find('h5').text()
    var modal = $(this)
    modal.find('form').attr('action', '/edit/' + recipient)
    modal.find('.modal-body input').val(data)
})

$('.tag span mark').eq(0).text($('.list-group-item').length);
$('.tag span mark').eq(1).text($('.list-group-item .hasFinish').length);
$('.tag span mark').eq(2).text($('.list-group-item').length-$('.list-group-item .hasFinish').length);