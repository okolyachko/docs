//Custom JS

// Recolor - experiment

$(document).ready(function () {
    if ($("#green-background").length) {
		$("body").get(0).style.setProperty("--main-color", "#12A353");
		$("body").get(0).style.setProperty("--main-color-background", "#CAFFE2");
		$("body").get(0).style.setProperty("--link-background", "#12a35312");
		$(".main").addClass("main-green");
	} else if ($("#blue-background").length) {
		$("body").get(0).style.setProperty("--main-color", "#0266FF");
		$("body").get(0).style.setProperty("--main-color-background", "#D2E4FF");
		$("body").get(0).style.setProperty("--link-background", "#0066ff0d");
		$(".main").addClass("main-blue");
	} else if ($("#purple-background").length) {
		$("body").get(0).style.setProperty("--main-color", "#9246FF");
		$("body").get(0).style.setProperty("--main-color-background", "#E4D1FF");
		$("body").get(0).style.setProperty("--link-background", "#9447ff12");
		$(".main").addClass("main-purple");
	} else if ($("#orange-background").length) {
		$("body").get(0).style.setProperty("--main-color", "#FE5100");
		$("body").get(0).style.setProperty("--main-color-background", "#FFE9D6");
		$("body").get(0).style.setProperty("--link-background", "#FFE9D650");
		$(".main").addClass("main-orange");
		
	}
});

// Footer fixing

$(document).ready(function () {
    if ($(".no-toc").length) {
		$('.alan-footer').css('margin-right', '-3.5em');
	} 
});

// Main page width

$(document).ready(function () {
	 
    if ($("#wide-content").length) {
		if ($(window).width() > 1024 ) {
		($(".toc-drawer").removeClass("no-toc"));
		($(".toc-drawer").css("display", "none"));
		($(".content").width("61em"));
		$('.alan-footer').css('margin-right', '-3.5em');
		$('article').css('margin-right', '15em');
		$('.related-pages').css('margin-right', '15em');
    }
        		
	} else if ($("#main-page").length) {		
			($(".toc-drawer").removeClass("no-toc"));
			($(".toc-drawer").css("display", "none"));
			($(".content").width("61em"));
			$('.alan-footer').css('margin-right', '-3.5em');       		
	}
	 
});

// Cheatsheet 100% width

$(document).ready(function () {
	 
    if ($("#cheatsheet").length) {
		if ($(window).width() > 1024 ) {
		($(".toc-drawer").removeClass("no-toc"));
		($(".toc-drawer").css("display", "none"));
		($("h1").css("display", "none"));
		($(".sidebar-drawer").css("display", "none"));
		($(".header-new").css("display", "none"));
		($(".lower-header").css("display", "none"));
		($(".page").addClass("cheat-top"));
		($(".content").width("100%"));
		($(".content").css("margin-right", "auto"));
		($(".content").css("margin-left", "auto"));
		($(".container").addClass("no-space"));
		$('.alan-footer').css('margin-right', '-3.5em');
		$('.related-pages').css('margin-right', '15em');
    }   		
	}
	 
});

// Removing prev page from main page 

$(document).ready(function () {
    if ($("#title-no").length) {
		$('.prev-page').css('display', 'none');
	} 
});

// Fixing sticky header error

$(document).ready(function () {
    $(".headerlink").parent('h1, h2, h3, h4').addClass("anchor-fixed");
});


// Adding target to external links

$(document).ready(function () {
	$('a[href^="http://"], a[href^="https://"], a[href^="mailto:"]').not('a[class*=internal]').attr('target', '_blank');
});

// Expanding dropdowns on ctrl + f clicked

$(document).keydown(function(e) {
        if (e.keyCode == 70 && e.ctrlKey) {
            $(".dropdown").prop("open", true);
        }
    });
	
// Adding how-to headings to the right TOC

$(document).ready(function () {
    if ($("#how-to").length) {
		$("h3.anchor-fixed").addClass("how-to-anchor");
		$("h3.headerlink").css('color', '#fff');
		if(window.location.hash) {
           var hash = window.location.hash.substring(1);
		   $('#' + hash).children(".dropdown").prop("open", true);
         }
	}
});

// Expanding how-tos onclick

$(document).ready(function(){
	if ($("#how-to").length) {
    $('.toc-tree a').click(function(){
        var hash = $(this).attr('href');
		$('a.headerlink[href="'+hash+'"]').parent("h3").siblings(".dropdown").prop("open", true);
    });
	$('.typesense-docsearch-suggestion--content').click(function(){
        var hash = $(this).parent('.typesense-docsearch-suggestion a').attr('href');
		$('a.headerlink[href="'+hash+'"]').parent("h3").siblings(".dropdown").prop("open", true);
    });
	}
});

// search box click outside 

$(document).click(function(e) {

  if( e.target.id != 'algolia-autocomplete-listbox-0') {
    $("#algolia-autocomplete-listbox-0").hide();
  }
});

// style for voice script caption

$(document).ready(function () {
    $(".highlight-alan").prev(".code-block-caption").addClass("alan-caption");
});

// GA instant search

var debounce;
$('.sidebar-search').on('keyup keypress', function (e) {
    clearTimeout(debounce);
    debounce = setTimeout( 
      function () { 
		gtag('config', window.location.hostname === "alan.app" ? 'G-QTCQV2T397' : 'G-H4F9QS7RMX', {
			'page_title' : 'Search requests: ' + $('.sidebar-search').val()
		});		
      }, 2000
    );
});


// Version and platform dropdowns
 $(document).ready(function () {
        // Toggle dropdown visibility
        $('.dropdown button').click(function () {
            $(this).next('.dropdown-content').toggle();
        });

        // Handle item selection, update the button text, and close the dropdown
        $('#version a').click(function () {
            var version = $(this).text();
            $(this).closest('.dropdown').find('button').text(version);
            
            // Close the dropdown
            $(this).closest('.dropdown-content').hide();
			
			// Save selected value to local storage
			localStorage.setItem('version', version);
			
			// Load the selected version
			var url = window.location.href;
			if (url.indexOf('4.1') > 0 || url.indexOf('3.x') >= 0) {
				url = url.split("docs/" )[1].slice(3);
			} else {url = url.split("docs")[1]};
			if (version === '4.2') {
				newUrl = window.location.protocol + "//" + window.location.host +  "/docs" + url;
			  } else {
				newUrl = window.location.protocol + "//" + window.location.host +  "/docs/" + version + url;
			  }
		    window.location.href = newUrl;
        });
		
		// Handle item selection, update the button text, and close the dropdown
        $('#platform a').click(function () {
            var option = $(this).text();
            $(this).closest('.dropdown').find('button').text(option);
			
			// Close the dropdown
            $(this).closest('.dropdown-content').hide();
			
			// Save selected value to local storage			
			$('.goto').css('display', 'inline-block');
			localStorage.setItem('framework', option);
			let value = localStorage.framework;
			$('.tabbed-label:contains("' + value + '")').prev().prop('checked', true);
			setLink(value);
			$(".docs-tooltip").html("Open " + value + " docs");
			var initPosition = $('div.section.active').offset().top - $(document).scrollTop();
			var currentPosition = $('div.section.active').offset().top;
			$(window).scrollTop(currentPosition - initPosition); 
        });

        // Close dropdowns when clicking outside
        $(document).click(function (event) {
            if (!$(event.target).closest('.dropdown').length) {
                $('.dropdown-content').hide();
            }
        });
    });

// Set the docs link
function setLink(value) {
  switch(value) {
		  case "Web (React, Angular, etc.)":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/web/web-api/");
			break;
		  case "Objective-C":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/ios/ios-api/");
			break;
		  case "Swift":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/ios/ios-api/");
			break;
		  case "Java":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/android/android-api/");
			break;
		  case "Kotlin":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/android/android-api/");
			break;
		  case "Flutter":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/cross-platform/flutter/");
			break;
		  case "Ionic":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/cross-platform/ionic/");
			break;
		  case "React Native":
			$("a.docs-tooltip-link").prop("href", window.location.protocol + "//" + window.location.host +  "/docs/client-api/cross-platform/react-native/");
			break;
		  default:
			console.log(value);
		}
}
	
// Load version and platform from localStorage
$(document).ready(function () {
	if ("framework" in localStorage) {
		$('#platform button').html(localStorage.framework);
		$('.goto').css('display', 'inline-block');
		let value = localStorage.framework;
		setLink(value);
		$(".docs-tooltip").html("Open " + value + " docs");
		$('.tabbed-label:contains("' + value + '")').prev().prop('checked', true);
	}
});

// Scroll to the selected tab
$(document).ready(function() {
  $('.tabbed-label').click(function(e) {
	var tabPosition = $(e.target).offset().top - $(document).scrollTop();
	var tab = $(e.target).text();
	$('.tabbed-label:contains("' + tab + '")').prev().prop('checked', true);
	var tabPosition2 = $(e.target).offset().top;
	$(window).scrollTop(tabPosition2 - tabPosition);
  });
});


// Resource lib
$('.res-btn').click(function() {
  
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  
  var selEl =  [];
  $('.res-group').find('.res-btn.active').each(function (idx, el) {
      selEl.push('.' + el.id);
  });
  selEl = selEl.join('');
  
  $('.card').not('.' + this.id).parent().addClass('res-hidden');
  if ($(selEl).parent().hasClass('res-hidden')) {
    $(selEl).parent().removeClass('res-hidden');
  }
  $(".section > .section").show();
  $(".section > .section")
    .filter(function(){
        return $(this).find("div.d-flex:visible").length == 0;
    })
    .hide();
});

$('.platform > .res-btn').click(function() {
  $('.framework > .res-btn').show();
  $('.framework > .res-btn').not('.' + this.id).hide();
});