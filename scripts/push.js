
sourceURL="http://conapep.org/capreader.php";

    if(typeof(EventSource)!=="undefined"){
       //navigator.notification.beep(2);
        //navigator.notification.vibrate(1);
       // alert();
        var source = new EventSource(sourceURL);
        
        source.onopen = function(event) {
        	//alert( "O:");
        };
        source.onerror = function(event) {
        	//alert( "E:"+sourceURL);
        };
      
        source.onmessage = function(event) {
      //      navigator.notification.vibrate(1);
        //	navigator.notification.beep(2);
            alert(event.data);
            location.reload();
        };
    }else{

    }
