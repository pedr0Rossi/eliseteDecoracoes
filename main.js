
const imglist = [
    '          <video class="bdr enteranimation6" autoplay loop muted src="img/v1.mp4" style="transition: .5s;height: 470px;; border-radius: 4px;position: relative; z-index: 4">\n' +
    '            <source src="img/v1.mp4" type="video/mp4">\n' +
    '          </video>',
    '        <img src="img/2.png" class="bdr enteranimation6" style="transition: .5s;height: 100%; border-radius: 4px;position: relative; z-index: 4">\n',
    '        <img src="img/3.png" class="bdr enteranimation6" style="transition: .5s;height: 100%; border-radius: 4px;position: relative; z-index: 4">\n'

]

const underimglist = [
    'img/1.png',
    'img/2.png',
    'img/3.png'
]

const imglist2 = [
    '          <video class="bdr enteranimation6" autoplay loop muted src="img/v2.mp4" style="transition: .5s;height: 470px;; border-radius: 4px;position: relative; z-index: 4">\n' +
    '            <source src="img/v2.mp4" type="video/mp4">\n' +
    '          </video>',
    '        <img src="img/5.png" class="bdr enteranimation6" style="transition: .5s;height: 100%; border-radius: 4px;position: relative; z-index: 4">\n',
    '        <img src="img/6.png" class="bdr enteranimation6" style="transition: .5s;height: 100%; border-radius: 4px;position: relative; z-index: 4">\n'

]

const underimglist2 = [
    'img/4.png',
    'img/5.png',
    'img/6.png'
]

function Welcome(){

    let time = 1
    setTimeout(function (){
        removeLoader()
        document.title = "Elisete Decorações"
        //document.getElementById('title').classList.add("animate-charcter")
        document.getElementById('anim1').classList.remove('enteranimation1')
        document.getElementById('anim2').classList.remove('enteranimation1')
        document.getElementById('anim3').classList.remove('enteranimation3')
        setTimeout(function (){
            var script = document.createElement('script')
            script.src = "https://www.instagram.com/embed.js"
            document.getElementById('igm').innerHTML = '    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/elisete_decoracoes/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:undefinedpx;height:undefinedpx;max-height:100%; width:undefinedpx;">\n' +
                '      <div style="padding:16px;">\n' +
                '        <a id="main_link" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;">\n' +
                '          <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>\n' +
                '          <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">\n' +
                '          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;">\n' +
                '\n' +
                '          </div>\n' +
                '          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;">\n' +
                '\n' +
                '          </div>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '          <div style="padding: 19% 0;">\n' +
                '\n' +
                '        </div>\n' +
                '          <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\n' +
                '            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">\n' +
                '              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                <g transform="translate(-511.000000, -20.000000)" fill="#000000">\n' +
                '                  <g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div>\n' +
                '          </div>\n' +
                '          <div style="padding: 12.5% 0;">\n' +
                '\n' +
                '          </div>\n' +
                '          <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">\n' +
                '            <div>\n' +
                '              <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;">\n' +
                '            <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;">\n' +
                '\n' +
                '            </div>\n' +
                '            <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="institutocrescernoesporte" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Shared post</a>\n' +
                '        on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;">Time</time>\n' +
                '      </p>\n' +
                '      </div>\n' +
                '    </blockquote>'
            document.getElementById('igm').style.display='flex'
            document.getElementsByTagName('head')[0].appendChild(script);
        },5000)
    },time)

}
function removeLoader(){

    setTimeout(()=>{
            let loader = document.getElementById('loader');

            // hide the loader
            loader.style = 'display: none;';
        },
        1);
}

var avaliacoes = [{
    "nome":"Mithillene Nascimento",
    "data":"uma semana atrás",
    "stars":5,
    "content":"Elisete além de ser profissional é uma pessoa humana , tem calma , ajuda bastante, tira todas as dúvidas.\n" +
        "Indico ela para todo mundo , atendimento de qualidade.\n" +
        "Produtos de qualidade , trabalha com amor , dedicação, carinho.\n" +
        "❤️ nota 10/10"
},
    {
        "nome":"Milena Borges",
        "data":"uma semana atrás",
        "stars":5,
        "content": "A melhor decoradora desse mundo!! Sou grata a Deus por eles terem feito parte do nosso maior sonho.. nosso casamento. Indicarei para todos, de olhos fechados 😍✨"
    },
    {
        "nome":"Alex Dias",
        "data":"4 meses atrás",
        "stars":5,
        "content":"Ótimos profissionais."
    },
    {
        "nome":"Keity Pistoni",
        "data":"uma semana atrás",
        "stars":5,
        "content":"A melhor decoradora de Piracicaba, trabalho enpecavel uma dedicação um atendimento sem igual. Amei minha decoração e super recomendo 🤩"
    },
    {
        "nome":"Duda no Espaço",
        "data":"3 anos atrás",
        "stars":5,
        "content":"Qualidade e Valor"
    },
    {
        "nome":"Monique P.",
        "data":"1 ano atrás",
        "stars":5,
        "content":"Sem palavras para agradecer tanto carinho e dedicação dessa equipe incrível.\n" +
            "Nosso casamento ficou simplesmente perfeito. A Elisete nos ouviu atentamente, e superou todas as expectativas.\n" +
            "Ficou tudo muito lindo, com a nossa cara.\n" +
            "Só temos a agradecer por tudo.\n" +
            "Pela pessoal e profissional incrível. ❤ Muito obrigada.\n" +
            "Temos certeza que fizemos as melhores escolhas pra esse dia tão especial."
    },
    {
        "nome":"E D.G",
        "data":"2 anos atrás",
        "stars":5,
        "content":"Especialista em decoração de casamento, aniversário e confraternização."
    },
    {
        "nome":"Eduardo Damaceno Gois",
        "data":"8 anos atrás",
        "stars":5,
        "content":"Excelente trabalho feito com amor, carinho, dedicação e capricho.\n"
    },

]

insertAvaliacoes()
function insertAvaliacoes(){
    var ul = document.getElementById('reviewul')
    for(let i = 0; i < 6; i++){
        if(i >= 6){ul = document.getElementById('reviewul3')}
        else if(i >= 3){ul = document.getElementById('reviewul2')}
        let div2 = document.createElement('img');
        div2.classList.add('imgreview')
        div2.src = 'img/reviewimages/'+(i+1)+'.png'
        ul.appendChild(div2)
        let div = document.createElement("div");
        var stars = '';
        var name = avaliacoes[i].nome;
        var content = avaliacoes[i].content;
        if(name.length >= 15){
            name = name.split(" ")[0] +" "+ name.split(" ")[1][0]+"."
        }
        if(content.length > 100){
            content = content.substring(0,97)+"..."
        }
        for(let j = 0; j < avaliacoes[i].stars; j++){
            stars += '<i class="fa-solid fa-star"></i>'
        }
        div.style.animationDelay = "0."+(i)+"s"
        div.classList = 'reviews reviewselisete'
        div.innerHTML= '    <div class="reviews rev" style="animation-delay: 0s;    display: inline-block;white-space: normal;float: left;position: relative;margin-right: 1.5%;margin-left: 1.5%; font-family: \'Open Sans\',serif; font-size: 90%; letter-spacing: 0px; width: 161px">' +
            '      <img src="img/profiles/'+(i+1)+'.png" style="width:  20%; float: left">' +
            '      <p style="width: 75%; float: left;margin-left: 5%; position: relative"><b>'+name+'</b><br>' +
            '        <span style="font-size: 80%; font-weight: 200; color: var(--small)">'+avaliacoes[i].data+'</span>' +
            '      </p>' +
            '      <p style="color: #F6BB06;width: 100%; display: inline-block; margin-top: 5%; position: relative;">' +
            '       ' + stars +
            '        <img src="img/google.svg" style="height: 100%; position: absolute; right: 0; top: 0">' +
            '' +
            '      </p>          <p style="width: 100%; display: inline-block; margin-top: 6%">' +
            '      '+content +
            '    </p></div>'
        ul.appendChild(div)
    }
}

function slider2(which, img){
    const bul = document.getElementById('b'+which)
    for(let i = 0; i < 3; i++){
        bul.children[i].classList.remove('op6')
    }
    bul.children[img].classList.add('op6')
    let mainimg = document.getElementById('slider'+which+'img1')
    let underimg = document.getElementById('slider'+which+'img2')
    mainimg.children[0].classList.add('enteranimation5')
    let n = img+1;
    if(n === 3){n = 0}
    underimg.src = underimglist2[n]
    setTimeout(function (){
        mainimg.innerHTML = imglist2[img]
        setTimeout(function (){
            mainimg.children[0].classList.remove('enteranimation6')
        },50)
    },600)
}

function slider1(which, img){
    const bul = document.getElementById('b'+which)
    for(let i = 0; i < 3; i++){
        bul.children[i].classList.remove('op6')
    }
    bul.children[img].classList.add('op6')
    let mainimg = document.getElementById('slider'+which+'img1')
    let underimg = document.getElementById('slider'+which+'img2')
    mainimg.children[0].classList.add('enteranimation5')
    let n = img+1;
    if(n === 3){n = 0}
    underimg.src = underimglist[n]
    setTimeout(function (){
        mainimg.innerHTML = imglist[img]
        setTimeout(function (){
            mainimg.children[0].classList.remove('enteranimation6')
        },50)
    },600)
}