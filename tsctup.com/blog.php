
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="TSCT UP | Teachers Self Care Team - Uttar Pradesh | TSCTUP">
    <title>TSCT UP | Teachers Self Care Team - Uttar Pradesh | TSCTUP</title>
    <link rel="icon" type="image/x-icon" href="../img/main-logo.png">
    <!--<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565453290804249"-->
    <!-- crossorigin="anonymous"></script>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="responsive.css">
    <link href="css/addcss.css" rel="stylesheet" media="all">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	
	<style>
.btn{
    border:none;padding:9px 33px;text-transform:capitalize;border-radius:30px;cursor:pointer;color:#fff;display:inline-block;font-size:15px;box-shadow:0px 7px 21px 0px rgba(0,0,0,0.12);background-image:linear-gradient(to right, #66D17C 0%, #66D17C 51%, #66D17C 100%);background-position:right;background-size:100%;
}
/*.btn:hover i{left:0px}.btn:hover{background-position:left}*/
/*.btn.focus,.btn:focus{outline:0;box-shadow:none}*/
	
    .my-form {
        color: #305896;
    }
    .my-form .btn-default {
        background-color: #305896;
        color: #fff;
        border-radius: 0;
    }
    .my-form .btn-default:hover {
        background-color: #4498C6;
        color: #fff;
    }
    .my-form .form-control {
        border-radius: 0;
    }
    
    .gallery_img {
        height:400px;
        width:400px;
        margin:20px;
        border: 1px solid #BFBFBF;
        box-shadow: 10px 10px 5px #aaaaaa;
        padding:20px;
    }
    
    
    
    
       
        .newsheading {
            font-size: 5em;
            font-family: serif;
            color: yellow;
            text-align: center;
            animation: animate 
                1.5s linear infinite;
        }
  
        @keyframes animate {
            0% {
                opacity: 0;
            }
  
            50% {
                opacity: 0.7;
            }
  
            100% {
                opacity: 0;
            }
        }
</style>

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript">
    jQuery(function ($) {
        // Google Maps setup
        var googlemap = new google.maps.Map(
            document.getElementById('googlemap'),
            {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        );
    });
    
   
function get_tc_id(){
    var tcid=document.getElementById("tc_id");
    tcid.innerHTML="<label>यदि हां तो tc id हो तो लिखें।</label><input type='number' id='tcid' name='tcid' class='form-control' /><br><label>पूर्व में किये गए रजिस्ट्रेशन की तिथि</label><input type='datetime-local' id='registered_date' name='registered_date' class='form-control' />";
}

function clear_tc_id(){
    var tcid=document.getElementById("tc_id");
    tcid.innerHTML="";
}
</script>
</head>
<body>
        <div class="wrapper">
<style>
* {box-sizing: border-box}
body {font-family: Arial, Helvetica, sans-serif;}

.navbar {
  width: 100%;
  background-color: #3F3F97;
  overflow: auto;
  animate: none;
}

.head1:hover{
    background-color: white;
    color: #3F3F97;
}
.head1{
    background-color: white;
    color: #3F3F97;
    font-weight: 700;
    font-size:26px;
    animate:none;
}

.navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  /*width: 12.5%; */
  text-align: center;
}

.navbar a:hover {
  background-color: white;
  color: #3F3F97;
}

.navbar a.active {
  background-color: #04AA6D;
}

.a1{
    width: 10%;
}
.a2{
    width: 12%;
}
.a3{
    width: 15%;
}
.a4{
    width: 15%;
}
.a5{
    width: 15%;
}
.a6{
    width: 12%;
}
.a7{
    width: 10%;
}
.a8{
    width: 11%;
}
.logo_img{
    width: 80px;
}
@media screen and (max-width: 600px) {

.navbar{
    padding-left: 15px;
    background-color:white;
}
  .navbar a {
    /*float: none;*/
    display: block;
    width: 47%;
    text-align: center;
    padding: 1%;
    border: 2px solid red;
    margin: 2px;
    background-color: #3F3F97;
  }
  .logo_img{
    width: 60px;
  }
  .head1,.head2{
    font-size: 18px;
  }
  .tophead1{
    font-size: 12px;
    margin-top: -10px;
  }
  .tophead2{
    font-size: 12px;
    margin-top: -25px;
    margin-bottom: -5px;
  }
  .side_login_button{
    padding-bottom: 5px;
  }
  .reg_button{
    text-align: center;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1024px)  {
    .navbar a {
        float: none;
        display: block;
        width: 100%;
        text-align: center;
        padding: 1px;
  }
  .logo_img{
    width: 80px;
  }
  .head1,.head2{
    font-size: 24px;
  }
  .tophead1{
    font-size: 18px;
    
  }
  .tophead2{
    font-size: 18px;
    /*margin-top: -25px;*/
    margin-bottom: -5px;
  }
  .side_login_button{
    margin-top: -25px;
    padding-bottom: 5px;
  }
  .reg_button{
    text-align: center;
  } 
  }
</style>   

   <div style="overflow: hidden;">
<div class="row" style="padding-top: 4px;padding-bottom: 0px;padding-left: 5px; background-color:#3F3F97; text-align:center;">
    <div class="col-lg-2 col-sm-5 col-xs-12" >
        <p style="color:white;padding-top: 5px;" class="tophead1">Helpline No.- 7007087337</p>
    </div>
    <div class="col-lg-5 col-sm-7 col-xs-12">
        <p style="color:white;padding-top: 5px;" class="tophead2">पंजीकरण संख्याा :- ALL / 04988/2020-21 टीचर्स सेल्फ केयर समिति</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-xs-6">
        <a href="https://www.facebook.com/tsctup/"><i style="color:white; margin-top:5px;font-size:25px;" class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i style="color:white; margin-top:5px; margin-left:20px;font-size:25px;" class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://youtube.com/channel/UCqp7sU05ql-n3ElLUplX2gg"><i style="color:white; margin-top:5px; margin-left:20px;font-size:25px;" class="fa fa-youtube" aria-hidden="true"></i></a>
        <a href="https://t.me/joinchat/UZcQ8K8dM-FfyRIz"><i style="color:white; margin-top:5px; margin-left:20px;font-size:25px;" class="fa fa-telegram" aria-hidden="true"></i></a>
    </div>
    <div class="col-lg-2 col-sm-6 col-xs-6 side_login_button" style="padding-top: 2px;">
                                    <a href="teacher/login.html" class="btn" style="background-color: #673AB7;">Login</a>
                                </div>
</div>
<div class="row" style="padding: 10px;overflow: hidden;">
    <div class="col-lg-2 col-sm-2 col-xs-3" style="text-align:right;z-index:5;">
        <a href=""><img src="img/main-logo.png" alt="" class="logo_img" /></a>
    </div>
    <div class="col-lg-6 col-sm-7 col-xs-9" style="z-index:5;">
        <a href="" class="head1" >Teachers Self Care Team – Uttar Pradesh</a>
        <h3 class="head2">आज का सहयोग कल का सहारा</h3>
    </div>
        <div class="col-lg-4 col-sm-3 reg_button" style="margin-top: 10px;">
        
        <a href="register.html" class="btn btn-success">Registration</a> 
         
    </div>
    </div>
<div class="row" style="overflow: hidden;">
    <div class="navbar">
        
            <a class="navlink a1"  href="https://tsctup.com" >HOME</a>
            <a class="navlink a2"  href="about.html" >ABOUT US</a>
            <a class="navlink a3"  href="teacher_list.html">TEACHER'S LIST</a>
            <a class="navlink a4"  href="sahayogsuchi_list.html">SAHYOG LIST</a>
            <a class="navlink a5"  href="vyawasthashulk_list.html">VYAWASTHA LIST</a>
            <a class="navlink a6"  href="niyamwali.html">NIYAMAWALI</a>
            <a class="navlink a7"  href="blog.html">BLOG</a>
            <a class="navlink a8"  href="contact.html">CONTACT</a>
        
    </div>
</div>
</div>        <div class="container">
            

            <div class="row" style="overflow:hidden;">
                                <div class="col-lg-4">
                    <a href="blog.html?url=samuhik bima kataouti" style="margin:0;padding:0;"><img src="admin/blog/B1_1630516605.jpg" width="90%" style="object-fit: contain;"></a>
                    <a href="blog.html?url=samuhik bima kataouti"><h4 style="text-align:center;padding-top:10px;">Welcome To TSCT Blog</h4></a>
                </div>
                                <div class="col-lg-4">
                    <a href="blog.html?url=2oct_pbh_program" style="margin:0;padding:0;"><img src="admin/blog/B1_1649394569.jpg" width="90%" style="object-fit: contain;"></a>
                    <a href="blog.html?url=2oct_pbh_program"><h4 style="text-align:center;padding-top:10px;">Click here for details</h4></a>
                </div>
                            </div>


                    </div>
        <br/>
        <br/>
</div>
    <script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>
<a href="https://api.whatsapp.com/send?phone=+917007087337&text=Hello TSCT" class="btn-whatsapp-pulse" target="_blank" style="z-index:1000">
	<i class="fa fa-whatsapp" style="font-size:48px;color:white"></i>
</a>

<a href="tel:7007087337" class="btn-whatsapp-pulse btn-whatsapp-pulse-border" target="_blank" style="z-index:1000">
	<i class="fa fa-phone"></i>
</a>

<footer class="footer" style="background-color: #3F3F97;">
            <div class="container" >
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4 col-sm-5">
                                <div class="footer-text one">
                                    <h3>RECENT Activity</h3>
                                    <ul ><li><a href="privacy_policy.html" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Privacy Policy</a></li>
                                        <li><a href="niyamwali.html" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Niyamawali</a></li>
                                        <li><a href="teacher_list.html" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Teachers List</a></li>
                                        <li><a href="contact.html" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-3">
                                <div class="footer-text two">
                                    <h3>USEFUL LINKS</h3>
                                    <ul>
                                        <li><a href="gallery.html" style="color:white;">Gallery</a></li>
                                        <li><a href="about.html" style="color:white;">About Us</a></li>
                                    <li><a href="user/login.html" style="color:white;">District Level Login</a></li>
                                        <li><a href="register.html" style="color:white;">Register</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="footer-text one">
                                    <h3>CONTACT US</h3>
                                    <ul>
                                        <!--<li><a href="#"><i class="material-icons">location_on</i>1 Street, derby, FL 2147, USA</a></li>-->
                                        <li><a href="#" style="color:white;"><i class="material-icons" style="color:white;">email</i>tsctcare@gmail.com</a></li>
                                        <li><a href="#" style="color:white;"><i class="material-icons" style="color:white;">call</i>Helpline No.- 7007087337</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <p style="background-color: #311B92;">Copyright @ 2021 <a href="https://tsctup.com">TSCT</a> | All Rights Reserved </p>
            </div>
        </footer>
    </div>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/animationCounter.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/active.js"></script>

    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
    </script>
</body>

</html>