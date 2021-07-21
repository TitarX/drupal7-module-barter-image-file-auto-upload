/*
 * Behavior for the automatic file upload
 */

(function ($) {
	Drupal.behaviors.autoUpload = {
		attach: function(context, settings) {
			if($('.form-item button.form-submit[value=Закачать]').length)
			{
				$('.form-item button.form-submit[value=Закачать]', context).hide();
				$('.form-item input.form-file', context).change(function() {
					$parent = $(this).closest('.form-item');

					//setTimeout to allow for validation
					//would prefer an event, but there isn't one
					setTimeout(function() {
						if(!$('.error', $parent).length) {
							$('button.form-submit[value=Закачать]', $parent).mousedown();
						}
					}, 100);
				});
			}
			else if($('.form-item button.form-submit[value=Upload]').length)
			{
				$('.form-item button.form-submit[value=Upload]', context).hide();
				$('.form-item input.form-file', context).change(function() {
					$parent = $(this).closest('.form-item');

					//setTimeout to allow for validation
					//would prefer an event, but there isn't one
					setTimeout(function() {
						if(!$('.error', $parent).length) {
							$('button.form-submit[value=Upload]', $parent).mousedown();
						}
					}, 100);
				});
			}
			else if($('.form-item input.form-submit[value=Закачать]').length)
			{
				$('.form-item input.form-submit[value=Закачать]', context).hide();
				$('.form-item input.form-file', context).change(function() {
					$parent = $(this).closest('.form-item');

					//setTimeout to allow for validation
					//would prefer an event, but there isn't one
					setTimeout(function() {
						if(!$('.error', $parent).length) {
							$('input.form-submit[value=Закачать]', $parent).mousedown();
						}
					}, 100);
				});
			}
			else if($('.form-item input.form-submit[value=Upload]').length)
			{
				$('.form-item input.form-submit[value=Upload]', context).hide();
				$('.form-item input.form-file', context).change(function() {
					$parent = $(this).closest('.form-item');

					//setTimeout to allow for validation
					//would prefer an event, but there isn't one
					setTimeout(function() {
						if(!$('.error', $parent).length) {
							$('input.form-submit[value=Upload]', $parent).mousedown();
						}
					}, 100);
				});
			}
			
			if($('.form-item span.input-group-btn').length)
			{
				$('.form-item span.input-group-btn', context).hide();
			}
		}
	};
})(jQuery);
