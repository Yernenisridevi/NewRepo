<!-- BEGIN LOADER FADE-OUT AND HTML SLIDE-DOWN -->
jQuery(window).load(function() {	

	/* fade out the loading icon */
	jQuery(".bonfire-pageloader-icon").addClass('bonfire-pageloader-icon-hide');

	/* after 250ms delay, fade out loader background */
	setTimeout(function(){

		/* fade out loader */
		jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-fade');

	},250);	
	
	/* after 1000ms delay, hide (not fade out) loader*/
	setTimeout(function(){

	/* hide loader after fading out*/
		jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');

	},1000);
	
});
<!-- END LOADER FADE-OUT AND HTML SLIDE-DOWN -->