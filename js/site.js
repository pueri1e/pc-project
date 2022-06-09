$(function() {
    /* 椤甸潰搴曢儴 TAG 鍒囨崲 */
    $(".tag-list li").click(function() {
        var menu = $(this).parent().children().index(this);
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        $(this).parent().next().children().hide().eq(menu).show();
    });
    /* 鍝嶅簲寮忓鑸� */
    var navigation = responsiveNav(".nav-collapse", {
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 284, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "after", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
        // openPos: "relative", // String: Position of the opened nav, relative or static
        navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
        navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
        jsClass: "js", // String: 'JS enabled' class which is added to <html> element
        init: function() {}, // Function: Init callback
        open: function() {}, // Function: Open callback
        close: function() {} // Function: Close callback
    });

    $(".tag-list li").click(function() {
        var menu = $(this).parent().children().index(this);
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        $(this).parent().next().children().hide().eq(menu).show();
    });
		
	function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}  
	$(".job-list  ul  li").click(function() {
        var id = $(this).attr("title");
     
        var bankList = $(".job-list div table tbody tr");
        $(this).addClass("current").siblings().removeClass("current");
        for (i = 0; i < bankList.length; i++) {
            var bankName = $(bankList[i]).attr("title");
						 if(  id==bankName) { 
							 $(bankList[i]).show();
						 }
						 if( id!=bankName) {
							 $(bankList[i]).hide();
						 }   
        }
    });
	
	$(".job-list  ul  li#all").click(function() {
       
        var bankList = $(".job-list div table tbody tr");
        $(this).addClass("current").siblings().removeClass("current");
        for (i = 0; i < bankList.length; i++) {
       
							 $(bankList[i]).show();
						  						   
        }
    });
	
	  $(".menu-class li").click(function() {
   
        $(this).addClass("current");
            $(".menu-class  a  ").children().removeClass("current");
      
    });
	
    $(".menu-class li").click(function() {
        var id = $(this).attr("title");
        // alert(id);
        var bankList = $(".case-list div");
        $(this).addClass("current").siblings().removeClass("current");
        for (i = 0; i < bankList.length; i++) {
           var bankName = $(bankList[i]).attr("title");
           var newsTab = new Array; 
            
				 			 newsTab=	bankName.split(',');

						 if(contains(newsTab, id)) {
					
                $(bankList[i]).show();
            }
						
						 if(!contains(newsTab, id)) {
						 	
                $(bankList[i]).hide();
            }
						  
        }
    });
  });