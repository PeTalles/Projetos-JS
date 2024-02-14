function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique suas informações') 
    }else{
        var fsex = window.document.getElementsByName('rsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var img = window.document.getElementById('imagem')
        img.setAttribute('id','foto')
        
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade>=0 && idade<=10){
                //criança
                img.src = 'ch.png'
            }else if(idade<18){ 
                //adolecente
                img.src = 'jh.png'
            }else if(idade<60){ 
                //adulto
                img.src = 'ah.png'
            }else if(idade>= 60){
                //idoso
                img.src = 'ih.png'
            }
                
         }else{
            genero = 'Mulher'
            if(idade>=0 && idade<=10){
                //criança
                img.src = 'cm.png'
            }else if(idade<18){ 
                //adolecente
                img.src = 'jm.png'
            }else if(idade<60){
                //adulto
                img.src = 'am.png'
            }else if(idade>= 60){
                //idoso
                img.src = 'im.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
        
    }
    

}
