
<html>
<body>
<p id="clock"></p>

<script>

var f ;

setInterval(function(){
    f = new Date();
    document.getElementById("clock").innerHTML = f.toLocaleTimeString();
},1000)
</script>

</body>
</html>