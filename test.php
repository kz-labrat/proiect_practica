<!-- filepath: d:\_backup_\Desktop\proiect -->
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica de inițiere RC-241</title>
    <style>
        nav {
            background-color: lightblue;
            padding: 10px;
            text-align: center;
            position: relative;
        }
        nav .corner {
            position: absolute;
            top: 0;
            font-size: 12px;
        }
        nav .corner.left {
            left: 10px;
        }
        nav .corner.right {
            right: 10px;
        }
        footer {
            background-color: lightblue;
            padding: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        footer .corner {
            position: absolute;
            bottom: 0;
            font-size: 12px;
        }
        footer .corner.left {
            left: 10px;
        }
        footer .corner.right {
            right: 10px;
        }
        .container {
            display: flex;
            justify-content: space-around;
            margin: 50px 0;
        }
        .box {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid blue;
            border-radius: 10px;
        }
        .box input, .box select {
            width: 90%;
        }
    </style>
</head>
<body>
    <?php include 'navbar.html'; ?>

    <?php include 'content.html'; ?>
    
    <?php include 'footer.html'; ?>
</body>
</html>