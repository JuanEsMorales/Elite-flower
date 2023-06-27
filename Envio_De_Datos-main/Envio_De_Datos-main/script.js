function tabla(){
    var now = new Date();
    console.log(now)
    var seconds = (now.getSeconds()+2)
    var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:mm:'+seconds+'');
        // console.log(dateStringWithTime)

        $("#Prueba").append('<thead><tr><th>PLACA</th><th>TEMPERATURA</th><th>UBICACIÓN</th><th>HORA</th><th>ESTADO</th></tr></thead>');
        $("#Prueba").append("<tr>"
        +"<td>JUK232</td>"
        +"<td>8.6875 ℃</td>"
        +"<td>A 1495 m. de Sos Km0 Facatativá Madrid</td>"
        +"<td>"+dateStringWithTime+"</td>"
        // +"<td><label class='switch'><input type='checkbox' id='Activo "+salida[index].NOMBRE+"' onclick='if(this.checked) localStorage.setItem(this.id,this.name); else localStorage.removeItem (this.id);  if (this.checked){var value1 = this.value = 145} else {var value2 = this.value = 146};' name='"+salida[index].GPSUNITID+"'><div class='slider round'></div></label></td></tr>"
        +"<td><label class='switch'><input type='checkbox' id='Activo JUK232' onclick='if(this.checked) localStorage.setItem(this.id,this.value); else localStorage.removeItem (this.id);  if (this.checked){var value1 = this.value = 145} else {var value2 = this.value = 146};' name='543212345'><div class='slider round'></div></label></td></tr>"
    );   
}

tabla();

var userName = "wsuser";
var passWord = "xe0kVX";

function authenticateUser(user, password){
    var auth = user + ":" + password;    
    var hash = btoa(auth); 
    return "Basic " + hash;
}

function CallWebAPI() {  
    $(document).on('click', 'input[type="checkbox"]', function(event) {
        var evento = this.value;
        var esn = this.name;

        console.log(evento, name)

        var now = new Date();
        var seconds = (now.getSeconds()+2)
        var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:mm:'+seconds+'');

        var request = new XMLHttpRequest();
        var autenticate = authenticateUser(userName, passWord);
        // var data = "["+esn+"|"+dateStringWithTime+"|"+dateStringWithTime+"|"+salida[index].LATITUD+"|"salida[index].LONGITUD"|100|180|60|11|0|0|0|0|0|"+evento+"|0|25459220|14523|2500|6|225|80|24870|12875|3874|13100|960|22548000|90|21500|15|16]";
        var data = "["+esn+"|"+dateStringWithTime+"|"+dateStringWithTime+"|4.44448|-74.44449|100|180|60|11|0|0|0|0|0|"+evento+"|0|25459220|14523|2500|6|225|80|24870|12875|3874|13100|960|22548000|90|21500|15|16]";

        var dataURL = encodeURIComponent( data);

        // console.log(dataURL);
        request.open("post", "https://gps.coltrack.com/gps/rep?ver=1&data="+dataURL, false);	
        request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
        request.send();   
        // console.log(request.responseText);   	
    });
}

CallWebAPI();

function temporizador() {
    setInterval("location.reload()",240000);
}

temporizador();

for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    document.getElementById(key).checked = 1;
};