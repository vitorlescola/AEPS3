function header(v){
    if(v==="0"){
        document.getElementById("header").innerHTML=`
       <nav class="navbar navbar-expand-lg navbar-light cor fixed-top mb-5" style="background-color: #F49208;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-0 mt-2 mt-lg-0">
             <li class="nav-item">
              <a class="navbar-brand" href="/index.html"><img src="/img/logo.png" width="100px" height="100px" alt="WebEdu"></a>
             </li>
            <li class="nav-item align-self-center">
                <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link" href="#">Contato</a>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/html/login.html">Fazer login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/html/login.html">Criar conta</a>
            </li>
            </ul>
        </div>
       </nav>`
    }else{
        document.getElementById("header").innerHTML=`
       <nav class="navbar navbar-expand-lg navbar-light cor fixed-top mb-5" style="background-color: #F49208;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-0 mt-2 mt-lg-0">
             <li class="nav-item">
              <a class="navbar-brand" href="/index.html"><img src="/img/logo.png" width="100px" height="100px" alt="WebEdu"></a>
             </li>
            <li class="nav-item align-self-center">
                <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item align-self-center">
                <a class="nav-link" href="#">Contato</a>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/html/quiz.html">Level</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Medalhas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Usuario</a>
            </li>
            </ul>
        </div>
       </nav>`
    }
}

header(document.getElementById("a").value);