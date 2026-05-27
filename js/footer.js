function footer(){
    document.getElementById("footer").innerHTML=`
    <footer class="text-light sticky-bottom" style="background-color: #F49208;>
        <div class="container">
            <div class="row">

            <div class="col-md-3 mb-4">
                <img src="/img/logo.png" alt="Logo" class="img-fluid mb-3" style="max-width: 150px;">
                <p class="small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo alias molestias saepe explicabo accusantium.
                </p>
            </div>

            <div class="col-md-3 mb-4">
                <h5>Entre em contato</h5>
                <ul class="list-unstyled">
                <li>Email: email@email.com</li>
                <li>Telefone: 1234-5678</li>
                <li>Twitter: <a class="text-reset text-decoration-none" href="https://www.youtube.com/@viniccius13">@X</a></li>
                <li>Instagram: <a class="text-reset text-decoration-none" href="https://www.youtube.com/@viniccius13">@aaaa</a></li>
                <li>Youtube: <a class="text-reset text-decoration-none" href="https://www.youtube.com/@viniccius13">canal</a></li>
                </ul>
            </div>

            <div class="col-md-3 mb-4">
                <h5>Sobre</h5>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum sapiente temporibus ipsum officia commodi, incidunt nam iste labore perferendis accusantium id facilis sed architecto. Architecto, corporis atque? Deserunt, distinctio.
                </p>
            </div>

            <div class="col-md-3 mb-4">
                <h5>navegação</h5>
                <ul class="list-unstyled">
                <li><a href="/index.html" class="text-light text-decoration-none">Home</a></li>
                <li><a href="#" class="text-light text-decoration-none">Sobre</a></li>
                <li><a href="/html/login.html" class="text-light text-decoration-none">Login</a></li>
                </ul>
            </div>

            </div>

            <hr class="border-secondary">

            <div class="text-center small">
            &copy; 2026 WebEdu.
            </div>
        </div>
    </footer>`
}

footer();