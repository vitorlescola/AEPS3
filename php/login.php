<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="http://localhost/AEPS3//css/login.css">
    <link rel="shortcut icon" href="http://localhost/AEPS3//img/logo.png" type="image/x-icon">

    <?php
        include("C:/xampp\htdocs\AEPS3\server\dataBase.php");
    ?>
</head>
<body>

    <nav id="header"></nav>
    <input id="a" value=0 class="d-none">

    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="login p-5">
            <h1 class="text-center">LOGIN</h1>
            <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control rounded-4 border-dark" id="email" placeholder="Email" name="email" >
            </div>
            <div class="mb-3">
                <label for="senha" class="form-label">Senha:</label>
                <input type="password" class="form-control rounded-4 border-dark" id="senha" placeholder="Senha" name="senha" s>
            </div>
            <div class="text-center">
                <a href="http://localhost/AEPS3//html/menu.html"><input type="submit" class="btn btn-success border-dark" value="Entrar"></input></a>
            </div>

            <?php
                if($_SERVER["REQUEST_METHOD"]=="POST"){
                    $email=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
                    $senha=filter_input(INPUT_POST,"senha",FILTER_SANITIZE_SPECIAL_CHARS);

                    if(empty($email)){
                        echo"Email vazio!";
                    }else if(empty($senha)){
                        echo"Senha vazia!";
                    }else{
                        $hash=password_hash($senha,PASSWORD_DEFAULT);
                        $sql="INSERT INTO usuarios (email,senha) VALUES ('$email','$hash')";
                        
                        try{
                            mysqli_query($conn,$sql);
                            echo"conta criada com sucesso!";

                                    session_start();

                                     $_SESSION["email"]=$email;
                                     $_SESSION["password"]=$senha;

                            header("Location: http://localhost/AEPS3//html/menu.html");
                            exit;
                        }catch(mysqli_sql_exception){
                            echo"email já utilizado!";
                        }
                    }
                }
            ?>

            </form>
        </div>
    </div>


    <footer id="footer"></footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="http://localhost/AEPS3//js/header.js"></script>
    <script src="http://localhost/AEPS3//js/footer.js"></script>
</body>
</html>

<?php
    mysqli_close($conn);
?>