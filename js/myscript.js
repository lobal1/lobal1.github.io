function load() {
    var content = document.getElementById('tracknumber').value;
    var mydata = JSON.parse(data);
    var my = JSON.parse(data1);
    var my1 = JSON.parse(data2);
    var my2 = JSON.parse(data3);
    var my3 = JSON.parse(data4);
    var my4 = JSON.parse(data5);
    var my5 = JSON.parse(data6);
    var my6 = JSON.parse(data7);
    var my7 = JSON.parse(data8);
    var my8 = JSON.parse(data9);
    var i = 0;
 while(i < 1){
if (content !="" && content === mydata[i].code || content === my[0].code || content === my1[0].code || content === my2[0].code || content === my3[0].code || content === my4[0].code || content === my5[0].code || content === my6[0].code || content === my7[0].code || content === my8[0].code){
     
    switch(content){

	case my[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my[0].status+"</p></td></tr></table>");
        break;

        case mydata[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+mydata[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+mydata[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+mydata[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+mydata[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+mydata[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+mydata[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+mydata[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+mydata[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+mydata[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+mydata[0].status+"</p></td></tr></table>");
         break;

        case my1[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my1[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my1[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my1[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my1[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my1[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my1[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my1[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my1[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my1[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my1[0].status+"</p></td></tr></table>");
         break;

        case my2[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my2[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my2[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my2[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my2[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my2[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my2[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my2[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my2[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my2[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my2[0].status+"</p></td></tr></table>");
         break;

        case my3[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my3[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my3[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my3[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my3[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my3[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my3[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my3[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my3[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my3[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my3[0].status+"</p></td></tr></table>");
         break;

        case my4[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my4[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my4[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my4[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my4[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my4[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my4[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my4[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my4[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my4[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my4[0].status+"</p></td></tr></table>");
         break;

        case my5[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my5[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my5[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my5[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my5[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my5[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my5[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my5[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my5[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my5[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my5[0].status+"</p></td></tr></table>");
         break;

        case my6[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my6[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my6[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my6[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my6[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my6[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my6[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my6[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my6[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my6[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my6[0].status+"</p></td></tr></table>");
         break;

        case my7[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my7[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my7[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my7[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my7[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my7[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my7[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my7[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my7[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my7[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my7[0].status+"</p></td></tr></table>");
         break;

        case my8[0].code: $("#tracknumber").replaceWith("<table class=\"style31\"><tr><td><p>Tracking Number : </p></td><td><p>"+my8[0].code+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Shipment Date :</p></td><td><p>"+my8[0].packed+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Delivery Date :</p></td><td><p>"+my8[0].eta+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Postal Product :</p></td><td><p>"+my8[0].mode+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Content :</p></td><td><p>"+my8[0].content+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Name :</p></td><td><p>"+my8[0].name+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Receiver's Address :</p></td><td><p>"+my8[0].addr+"</p></td></tr><tr></tr><tr></tr><tr><p><td><p>Receiver's Contact :</p></p></td><td><p>"+my8[0].tel+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Package Location :</p></td><td><p>"+my8[0].loc+"</p></td></tr><tr></tr><tr></tr><tr><td><p>Status :</p></td><td><p>"+my8[0].status+"</p></td></tr></table>");
         break;
}

	$( "#submitbutton" ).replaceWith("<input type=\"button\" onclick=\"location.href=\'tracking.html\';\" value=\"Close\" />");
	$("#legend").remove();
    
}
else{
    alert("Tracking code is invalid!");
   
}
	i++;
}

}
