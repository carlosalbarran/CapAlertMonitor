var url = "https://correo1.conagua.gob.mx/feedsmn";
//var proxyUrl="http://query.yahooapis.com/v1/public/yql?q=SELECT%20title%20FROM%20%20%20feednormalizer%20WHERE%20%20output%3D%22atom_1.0%22%20AND%20url%3D'"+encodeURIComponent(url)+"'%3B&diagnostics=true";
https://query.yahooapis.com/v1/public/yql?q=SELECT%20title%20FROM%20%20%20feednormalizer%20WHERE%20%20output%3D%22atom_1.0%22%20AND%20url%3D%22https%3A%2F%2Fcorreo1.conagua.gob.mx%2Ffeedsmn%2F%22%20AND%20msgType%3D%22Test%22&diagnostics=true
var proxyUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + encodeURIComponent(url) +"'";
var RSSDS = new kendo.data.DataSource({ 
     transport:{
         read:{
                 url: proxyUrl,
                 dataType: "xml"
             }
     },
     schema:{
         type:"xml",
         data:"query/results/feed/entry/content/alert/info",
         model:{
 
             fields:{
                 id: "id/text()",
                 fecha: "effective/text()",
                 event: "event/text()",
                 sender: "senderName/text()",
                 description: "description/text()",
                 headline: "headline/text()",
                 instruction: "instruction/text()"
        	 }
     	}
    }
});
RSSDS.read();



