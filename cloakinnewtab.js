<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home - PowerUp</title>

    <!-- Favicon -->
    <link rel="icon" href="lexialogo.png" type="image/png">

    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: white;
        }
    </style>
</head>
<body>

<script>
(function () {
    var url = "/main.html";

    // Create iframe
    var iframe = document.createElement('iframe');

    // Same styles you had before
    iframe.style = "position:fixed;width:100vw;height:100vh;top:0;left:0;right:0;bottom:0;z-index:2147483647;background-color:white;border:none;";

    // Assign URL safely
    if (url.includes('https://') || url.includes('http://')) {
        iframe.src = url;
    } else {
        iframe.src = "https://" + url;
    }

    // Add iframe to current page
    document.body.appendChild(iframe);
})();
</script>

</body>
</html>
