var output = document.querySelector('#output');
var subtitle = document.querySelector('#subtitle');
var message;

function criptografia(){
    var msgc = document.getElementById('mensagem');
    var vmsgc = msgc.value;
    var a = vmsgc;
    message = '';
    for(var index = 0; index < a.length; index++){
        var crip = a.codePointAt(index);
        var NCrip = crip + 10;
        var MsgCrip = String.fromCodePoint(NCrip); 
        message = message.concat(MsgCrip);
    }
    output.innerHTML = message;
    subtitle.innerHTML = "Sua mensagem é:"
}

function descriptografia(){
    var msgd = document.getElementById('mensagem')
    var vmsgd = msgd.value;
    var b = vmsgd;
    message = '';
    for(var index = 0; index < b.length; index++){
        var dscrip = b.codePointAt(index);
        var ndscrip = dscrip - 10;
        var MsgDsCrip = String.fromCodePoint(ndscrip);
        message = message.concat(MsgDsCrip);
    }
    output.innerHTML = message;
    subtitle.innerHTML = "Sua mensagem é:"
}

function copiar() {
    if (message) {
        navigator.clipboard.writeText(message)
            .then(() => {
                alert("Texto copiado para a área de transferência");
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    } else {
        alert("Não há texto para copiar");
    }
}

function limpar(){
    var clear = '';
   output.innerHTML = clear;
}