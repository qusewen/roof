jQuery(document).ready(function () {

    $("#phone").mask("+375 (99) 999-99-99");

    jQuery('form button').click( function() {
        var form = jQuery(this).closest('form');

        if ( form.valid() ) {
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    form.find('.status').html(`<div>
					<h2 class="w-[250px] text-white">Отлично! Заявка отправлена! В ближайшее время я свяжусь с вами !</h2>
				</div>`);
                },
                error:	 function() {
                    form.find('.status').html(`<div class="status_body">
					 <h2 class="text-white">Ошибка сервера. Обновите страницу.</h2>
				 </div>`);
                }
            });
        }
    });
});