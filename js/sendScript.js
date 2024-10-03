jQuery(document).ready(function () {

    jQuery('form button').click( function() {
        var form = jQuery(this).closest('form');

        if ( form.valid() ) {
            // form.css('opacity','.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    // form.html(data);
                    // form.css('opacity','1');
                    form.find('.status').html(`<div class="status_body">
					<h2 class="text-green-500">Отлично! Заявка отправлена! В ближайшее время я свяжусь с вами !</h2>
<!--					<img class="status__img" src="assets/img/good.png" alt="good">-->
				</div>`);
                    //$('#myModal').modal('show') // для бутстрапа
                },
                error:	 function() {
                    form.find('.status').html(`<div class="status_body">
					 <h2 class="text-white">Ошибка сервера нажмите F5</h2>
<!--					 <img class="status__img" src="assets/img/bad.png" alt="bad">-->
				 </div>`);
                }
            });
        }
    });


});