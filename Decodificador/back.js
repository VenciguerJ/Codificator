var output = document.querySelector('#output');
var textarea = document.querySelector('#mensagem');

function criptografia(){
    var msgc = document.getElementById('mensagem');
    var vmsgc = msgc.value;
    var a = vmsgc;
    output.innerHTML ='Sua mensagem criptografada é: ';
    message = ''
    for(var index = 0; index < a.length; index++){
        var crip = a.codePointAt(index);
        var NCrip = crip + 10;
        var MsgCrip = String.fromCodePoint(NCrip); 
        message = message.concat(MsgCrip);
    }
    output.innerHTML = `sua mensagem é:"${message}" `;
}

function descriptografia(){
    var msgd = document.getElementById('mensagem')
    var vmsgd = msgd.value;
    var b = vmsgd;
    output.innerHTML ='Sua mensagem desocriptografada é: ';
    message = '';
    for(var index = 0; index < b.length; index++){
        var dscrip = b.codePointAt(index);
        var ndscrip = dscrip - 10;
        var MsgDsCrip = String.fromCodePoint(ndscrip);
        message = message.concat(MsgDsCrip);
    }
    output.innerHTML = `sua mensagem é:"${message}" `;
}

function limpar(){
    var clear = '';
   output.innerHTML = clear;
   textarea.innerHTML = clear;
}
