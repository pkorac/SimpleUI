
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///
/// SIMPLE UI FRAMEWORK 
///
/// A lightweight html, css and javascript framework 
/// that makes creating mobile web-apps easier. 
/// SimpleUI gives you two things: 
/// standard slide and flip transitions between 
/// different screens and a css frame with a 
/// header bar, content box and footer bar.
///
/// The core idea of Simple UI is to provide you 
/// with a completely blank slate on top of which 
/// you can build your application. 
/// Rather than enhancing your markup with 
/// extra html bloat it leaves it untouched. 
/// Rather than having a complex stylesheet 
/// that you have to override to customise the look 
/// of your app it provides you with only 
/// the bare essential header, content, footer.
/// 
/// SimpleUI Framework by Peter Koraca 
/// is licensed under a Creative Commons Attribution 3.0 
/// Unported License
///
///
/// CSS animations were taken from jQuery and Jqtouch project 
/// Built by David Kaneda and maintained by Jonathan Stark.
/// The code was also influenced by Rodrigo Pinto's 
/// Fasw javascript library
///
////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// The SimplUI Object
//
function SimpleUI(){
	
	
	
//////////////////////////////////////////////////////////////
// Enhance function that adds the click/tap event handlers 
// to the links
//
	this.enhance = function(){		
		
	//////////////////////////////////////////////////////////////
	// Event Handler
	//
		$("a").click(function(e){
	
	
		//////////////////////////////////////////////////////////////
		// - Get the noajax attribute (it it exhists)
		// - Get the link's href
		// - slice it in half
		// - check if it links to an external page
		// - or a location on this page
		// Only transition, if href points to an external page
		// and there is no noajax attribute on the element
		// call the load function
			var noajax = $(this).attr("noajax");
			var href = $(this).attr("href");
			var hrefsplit = href.slice(0, 1);
			
			// href checker			
			if ( hrefsplit != "#" && noajax == undefined ){	
				
				// Prevent default behaviour
				e.preventDefault();
				
				// get the transiton attribute		
				var trans = $(this).attr("transition");
	
	
				// Call the load function
				SimpleUI.loadScreen( href, trans );
				
			} // href split
			
		}); // click handler
	
	};
	
//////////////////////////////////////////////////////////////
// LOADING function
// Load the linked page into the second screen container
//
	this.loadScreen = function( href_, trans_ ){
		var href = href_;
		var trans = trans_;

		// TRANSITION DURATION
		// If you've changed the duration in the css
		// change it here as-well
		var transDuration = 705;


		// get the first screen (this screen)
		// create the second screen holder (linked page)
		var firstScreen = $(".screen:first");
		var secondScreen = $("<div>");
		secondScreen.load( href+" .screen:first", function(){
			
		// unwrap the secondScreen container
			secondScreen = secondScreen.find(".screen").unwrap();

		// add the z-indexes
		// (important for animating)
			//firstScreen.css("z-index", "505");
			//secondScreen.css("z-index", "500");
			

		// append the secondScreen to the document
			$("body").append( secondScreen );

		//////////////////////////////////////////////////////////////
		// ANIMATION
		//
		// The main idea
		// If there's no transition specified on the link:
		// - simply remove the first screen
		// - run the enhance function again (adds click/tap handlers)
		// - trigger a screenLoaded event
		//
		// If there is a transition specified:
		// - set a timeout straight away
		//	(webkit stuff needs it)
		//		- add viewport-flip class to the body
		//		  (adds perspective for the flip animation
		//		   and the overflow: hidden attribute)
		//	 	- give the two screen containers appropriate classes
		//		  (for example "slide out" to the first screen and
		//	 	  "slide in" to the second screen)
		// - set a timeout after some time (default is 705ms) to
		//		- remove the first screen, 
		//		- remove the extra css from the second screen
		//		- remove the viewport flip from the body
		// 		- call the enhance function
		// 		- trigger the screenLoaded event
		//
			if ( trans != undefined ){

				setTimeout(function(){ 
					$("body").addClass("viewport-flip");
					firstScreen.addClass( trans + " out" );
					secondScreen.addClass( trans +" in" );
				}, 1);
								
				setTimeout( function(){ 
					firstScreen.remove();
					secondScreen.removeClass( trans +" in" );
					$("body").removeClass("viewport-flip");
					
					SimpleUI.enhance();
					$(document).trigger("screenLoaded");
				}, transDuration);
				
				
			} else {
			
				firstScreen.remove();
				SimpleUI.enhance();						
				$(document).trigger("screenLoaded");
				
			}
			
		
		} ); // end of ajax load
	}; // end of loadScreen
	
	
	// the first time the dom is ready
	// call the enhance function
	$( function() {
		
		SimpleUI.enhance();
						
	});	// document rady

	
}

// SimpleUI Object creation
// DO NOT RENAME
var SimpleUI = new SimpleUI();



// Have Fun