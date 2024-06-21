function calc(){
    var fac = window.document.getElementById('fac');
    var num = window.document.getElementById('num');
    if(fac.value.length == 0 || num.value.Length == 0){
        window.alert('[ERRO] CONFIRA OS DADOS INFORMADOS!!')
    }

    else{
        var x = Number(fac.value);
        var y = Number(num.value);
        var i = 0
        var r = '';

        var res = window.document.getElementById('resposta');
        res.innerHTML = `A tabuada de ${x} é:<br> `
    
    
        do{ 
            r = x * i;
            res.innerHTML += `${i} X ${x} = ${r} <br>`;
         i++;

        }while(i <= y)
    }
}