function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    //Lógica para mudar o tema do site baseado na class
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }
    // else{
    //     html.classList.add('light')
    // }

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //alterar imagem de acordo com o tema
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    }
    else{
        img.setAttribute('src', './assets/avatar.png')
    }   
}