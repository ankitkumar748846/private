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
                                    <a href="https://tsctup.com/teacher/login.php" class="btn" style="background-color: #673AB7;">Login</a>
                                </div>
</div>
<div class="row" style="padding: 10px;overflow: hidden;">
    <div class="col-lg-2 col-sm-2 col-xs-3" style="text-align:right;z-index:5;">
        <a href="https://tsctup.com/"><img src="https://tsctup.com/img/main-logo.png" alt="" class="logo_img" /></a>
    </div>
    <div class="col-lg-6 col-sm-7 col-xs-9" style="z-index:5;">
        <a href="https://tsctup.com/" class="head1" >Teachers Self Care Team – Uttar Pradesh</a>
        <h3 class="head2">आज का सहयोग कल का सहारा</h3>
    </div>
        <div class="col-lg-4 col-sm-3 reg_button" style="margin-top: 10px;">
        
        <a href="https://tsctup.com/register.php" class="btn btn-success">Registration</a> 
         
    </div>
    </div>
<div class="row" style="overflow: hidden;">
    <div class="navbar">
        
            <a class="navlink a1"  href="https://tsctup.com" >HOME</a>
            <a class="navlink a2"  href="https://tsctup.com/about.php" >ABOUT US</a>
            <a class="navlink a3"  href="https://tsctup.com/teacher_list.php">TEACHER'S LIST</a>
            <a class="navlink a4"  href="https://tsctup.com/sahayogsuchi_list.php">SAHYOG LIST</a>
            <a class="navlink a5"  href="https://tsctup.com/vyawasthashulk_list.php">VYAWASTHA LIST</a>
            <a class="navlink a6"  href="https://tsctup.com/niyamwali.php">NIYAMAWALI</a>
            <a class="navlink a7"  href="https://tsctup.com/blog.php">BLOG</a>
            <a class="navlink a8"  href="https://tsctup.com/contact.php">CONTACT</a>
        
    </div>
</div>
</div>    <div class="container mt-5" style="max-width: 700px">
        <form action="" method="post" class="m-5">
            <h3 class="text-center mb-5">Teacher Registration Form</h3><br/>
                        
                        
            <p class="text-center bg-danger" >
                नोट- जिन शिक्षकों ने पूर्व में रजिस्ट्रेशन कर लिया है, उन्हें नए रजिस्ट्रेशन की आवश्यकता नही है, लॉगिन करके अपना विवरण जोड़ या परिवर्तित कर सकते हैं।

                
                </p><br/><br/>

                        
            <div class="form-group">
                <label>Ehrms कोड *</label>
                <input type="text" class="form-control" name="ehrms_code" id="ehrms_code" required />

                            </div>

            <div class="form-group">
                <label>पासवर्ड बनाये *</label>
                <input type="password" class="form-control" name="password" id="password" style="display: inline;" required />
  <i class="fa fa-eye-slash" onclick="hideshowpassword();" id="togglePassword" style="    margin-left: -31px;
    cursor: pointer;
    margin-top: 9px;
    position: absolute;"></i>

                            </div>
            <div class="form-group">
                <label>कन्फर्म पासवर्ड *</label>
                <input type="password" class="form-control" name="confirm_password" id="confirm_password" style="display: inline;" required />
 <i class="fa fa-eye-slash" onclick="hideshowpassword1();" id="toggleconfirmpassword" style="    margin-left: -31px;
    cursor: pointer;
    margin-top: 9px;
    position: absolute;"></i>
                            </div>
            <div class="form-group">
                <label>नाम *</label>
                <input type="text" class="form-control" name="name" id="name" required />
            </div>
             <div class="form-group">
                <label>डेट ऑफ बर्थ *</label>
                <input type="date" class="form-control" name="dob" id="dob" required />
            </div>
            <div class="form-group">
                <label>ईमेल *</label>
                <input type="email" class="form-control" required name="email" id="email" />
            </div>
            <div class="form-group">
                <label> जेंडर *</label>
                <select class="form-control" name="gender" id="gender" required>
                    <option value="" disabled selected >Select Gender</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                </select>
            </div>
            <div class="form-group">
                <label>blood group *</label>
                <select class="form-control" name="blood_group" id="blood_group" required>
                    <option value="" disabled selected>Select Blood group</option>
                    <option value="na">Don't know</option>
                    <option value="ap">A+</option>
                    <option value="an">A-</option>
                    <option value="bp">B+</option>
                    <option value="bn">B-</option>
                    <option value="op">O+</option>
                    <option value="on">O-</option>
                    <option value="abp">AB+</option>
                    <option value="abn">AB-</option>
                </select>
            </div>
            <div class="form-group">
                <label>डिपार्टमेंट *</label>
                <select class="form-control" name="department" id="department" required>
                    <option value="" disabled selected>Select Department</option>
                    
                                        <option value="Basic">BASIC</option>
                                        <option value="Madhyamic">MADHYAMIC</option>
                                        <option value="TRAINING">TRAINING</option>
                                        <option value="HIGHER EDUCATION">HIGHER EDUCATION
</option>
                                        <!--<option value="Basic" selected>BASIC</option>-->
                    <!--<option value="Madhyamic">MADHYAMIC</option>-->
                    <!--<option value="LT">LT</option>-->
                    <!--<option value="Diet">Diet</option>-->
                    <!--<option value="GIC">GIC</option>-->
                    <!--<option value="diet">DIET</option>-->
                </select>
            </div>
            <div class="form-group">
                <label>पदनाम *</label>
                <select class="form-control" name="post" id="post" required>
                    <option value="" disabled selected>Select Post</option>
                    
                    <!--<option value="AT PS">AT PS</option>-->
                    <!--<option value="HT PS">HT PS</option>-->
                    <!--<option value="AT UPS">AT UPS</option>-->
                    <!--<option value="HT UPS">HT UPS</option>-->
                    <!--<option value="Lecturer">Lecturer</option>-->
                    <!--<option value="TGT Teacher">TGT Teacher</option>-->
                    <!--<option value="PRINCIPAL">Principal</option>-->
                    <!--<option value="BEO">BEO</option>-->
                </select>
            </div>
            
            <div class="form-group">
                <label name="subpostlabel" id="subpostlabel" > उप पदनाम *</label>
                <select class="form-control" name="subpost" id="subpost" >
                    <option value="" disabled selected>Select sub Post</option>
                    
                </select>
            </div>

            <div class="form-group">
                <label>विद्यालय / आफिस  का नाम *</label>
                <input type="text" class="form-control" name="school_name_with_nprc" id="school_name_with_nprc" required />
            </div>
            <div class="form-group">
                <label>पोस्टिंग ब्लाक *</label>
                <input type="text" class="form-control" name="block" id="block" required />
            </div>
            <div class="form-group">
                <label>प्रदेश *</label>
                <select class="form-control" name="state" id="state" required >
                <option value="" disabled selected>Select State</option>
                <option value='AP'>Andhra Pradesh</option><option value='AR'>Arunachal Pradesh</option><option value='AS'>Assam</option><option value='BR'>Bihar</option><option value='CT'>Chhattisgarh</option><option value='GA'>Goa</option><option value='GJ'>Gujarat</option><option value='HR'>Haryana</option><option value='HP'>Himachal Pradesh</option><option value='JK'>Jammu & Kashmir</option><option value='JH'>Jharkhand</option><option value='KA'>Karnataka</option><option value='KL'>Kerala</option><option value='MP'>Madhya Pradesh</option><option value='MH'>Maharashtra</option><option value='MN'>Manipur</option><option value='ML'>Meghalaya</option><option value='MZ'>Mizoram</option><option value='NL'>Nagaland</option><option value='OR'>Odisha</option><option value='PB'>Punjab</option><option value='RJ'>Rajasthan</option><option value='SK'>Sikkim</option><option value='TN'>Tamil Nadu</option><option value='TR'>Tripura</option><option value='UK'>Uttarakhand</option><option value='UP'>Uttar Pradesh</option><option value='WB'>West Bengal</option>                </select>
            </div>

            <div class="form-group">
                <label>पोस्टिंग जिला *</label>
                <select class="form-control" name="district" id="district" required >
                <option value="" disabled selected>Select District</option>
                        
                </select>
            </div>
            
            <div class="form-group">
                <label>होम एड्रेस *</label>
                <input type="text" class="form-control" name="home_address" id="home_address" required />
            </div> 
            <div class="form-group">
                <label>होम डिस्ट्रिक्ट *</label>
                <select class="form-control" name="home_district" id="home_district" required >
                    <option value="" disabled selected>Select Home District</option>
                <option value='Agra'>Agra</option><option value='Aligarh'>Aligarh</option><option value='Ambedkar Nagar'>Ambedkar Nagar</option><option value='Amethi'>Amethi</option><option value='Amroha'>Amroha</option><option value='Auraiya'>Auraiya</option><option value='Ayodhya (Faizabad)'>Ayodhya (Faizabad)</option><option value='Azamgarh'>Azamgarh</option><option value='Bagpat'>Bagpat</option><option value='Bahraich'>Bahraich</option><option value='Balarampur'>Balarampur</option><option value='Ballia'>Ballia</option><option value='Banda'>Banda</option><option value='Barabanki'>Barabanki</option><option value='Bareilly'>Bareilly</option><option value='Basti'>Basti</option><option value='Bijnor'>Bijnor</option><option value='Budaun'>Budaun</option><option value='Bulandshahr'>Bulandshahr</option><option value='Chandauli'>Chandauli</option><option value='Chitrakoot'>Chitrakoot</option><option value='Deoria'>Deoria</option><option value='Etah'>Etah</option><option value='Etawah'>Etawah</option><option value='Farrukhabad'>Farrukhabad</option><option value='Fatehpur'>Fatehpur</option><option value='Firozabad'>Firozabad</option><option value='Gautam Buddha Nagar'>Gautam Buddha Nagar</option><option value='Ghaziabad'>Ghaziabad</option><option value='Ghazipur'>Ghazipur</option><option value='Gonda'>Gonda</option><option value='Gorakhpur'>Gorakhpur</option><option value='Hamirpur'>Hamirpur</option><option value='Hapur'>Hapur</option><option value='Hardoi'>Hardoi</option><option value='Hathras'>Hathras</option><option value='Jalaun'>Jalaun</option><option value='Jaunpur'>Jaunpur</option><option value='Jhansi'>Jhansi</option><option value='Kannauj'>Kannauj</option><option value='Kanpur Dehat'>Kanpur Dehat</option><option value='Kanpur Nagar'>Kanpur Nagar</option><option value='Kasganj'>Kasganj</option><option value='Kaushambi'>Kaushambi</option><option value='Kushinagar'>Kushinagar</option><option value='Lakhimpur Kheri'>Lakhimpur Kheri</option><option value='Lalitpur'>Lalitpur</option><option value='Lucknow'>Lucknow</option><option value='Maharajganj'>Maharajganj</option><option value='Mahoba'>Mahoba</option><option value='Mainpuri'>Mainpuri</option><option value='Mathura'>Mathura</option><option value='Mau'>Mau</option><option value='Meerut'>Meerut</option><option value='Mirzapur'>Mirzapur</option><option value='Moradabad'>Moradabad</option><option value='Muzaffarnagar'>Muzaffarnagar</option><option value='Pilibhit district'>Pilibhit district</option><option value='Pratapgarh'>Pratapgarh</option><option value='Prayagraj'>Prayagraj</option><option value='Raebareli'>Raebareli</option><option value='Rampur'>Rampur</option><option value='Saharanpur'>Saharanpur</option><option value='Sambhal'>Sambhal</option><option value='Sant Kabir Nagar'>Sant Kabir Nagar</option><option value='Sant Ravidas Nagar'>Sant Ravidas Nagar</option><option value='Shahjahanpur'>Shahjahanpur</option><option value='Shamli'>Shamli</option><option value='Shravasti'>Shravasti</option><option value='Siddharthnagar'>Siddharthnagar</option><option value='Sitapur'>Sitapur</option><option value='Sonbhadra'>Sonbhadra</option><option value='Sultanpur'>Sultanpur</option><option value='Unnao'>Unnao</option><option value='Varanasi'>Varanasi</option>                </select>
            </div>
            <div class="form-group">
                <label>नामिनी 1 *</label>
                <input type="text" class="form-control" name="first_nominee_name" id="first_nominee_name" required />
            </div>
            <div class="form-group">
                <label>नामिनी से सम्बन्ध *</label>
                <input type="text" class="form-control" name="first_nominee_relation" id="first_nominee_relation" required />
            </div>
            <div class="form-group">
                <label> नामिनी 1 का मोबाइल *</label>
                <input type="text" class="form-control" name="first_nominee_mobile" id="first_nominee_mobile" title="Enter mobile Number" pattern="[0-9]{10}"  required  />
            </div>
            <div class="form-group">
                <label>( नामिनी 2 )</label>
                <input type="text" class="form-control" name="second_nominee_name" id="second_nominee_name"  />
            </div>
            <div class="form-group">
                <label>( नामिनी 2 से सम्बन्ध )</label>
                <input type="text" class="form-control" name="second_nominee_relation" id="second_nominee_relation" />
            </div>
            <div class="form-group">
                <label>( नामिनी 2 का मोबाइल )</label>
                <input type="text" class="form-control" name="second_nominee_mobile" id="second_nominee_mobile" title="Enter mobile Number" pattern="[0-9]{10}" />
            </div>
            <div class="form-group">
                <label> बीमारी (यदि कोई हो तो) *</label>
                <input type="text" class="form-control" name="disease" id="disease" required />
            </div>
            <div class="form-group">
                <label> बीमारी का विवरण(कब से है, अन्य की स्थिति में बीमारी का नाम भी लिखें)) *</label>
                <input type="text" class="form-control" name="couse_of_illness" id="couse_of_illness" required />
            </div>
            <div class="form-group">
                <label>क्या पूर्व में रजिस्ट्रेशन कर चुके हैं? हां/नही *</label> 
                <div>
                    <input type="radio" name="registered" id="no" value="NA" onclick="clear_tc_id()"/>
                    <label for="no"> नही</label>
                </div>
                <div>
                    <input type="radio" name="registered" id="yes" value="yes" onclick="get_tc_id()" />
                    <label for="yes"> हा</label>
                </div>
            </div>
            <div class="form-group" id="tc_id" name="tc_id">
               
            </div>
            <div class="form-group">
                <label>मोबाइल * ( For Login ID )</label>
                <input type="text" class="form-control" name="mobile" id="mobile" title="Enter mobile Number" pattern="[0-9]{10}" required />
            </div>
            <div class="form-group">
                <label>मोबाइल होम </label>
                <input type="text" class="form-control" name="mobile_home" id="mobile_home" title="Enter mobile Number" pattern="[0-9]{10}" />
            </div>
            <div class="form-group">
                <span>
                    <label for="checkbox">घोषणा</label>
                </span><br>
                <span>
                <input type="checkbox" name="declaration" id="declaration" required style="height:20px; width:20px;" />
                
                
                    मैंने TSCT से जुड़ने, सहयोग करने सम्बधी जानकारी प्राप्त कर ली है। मैंने वेबसाइट पर नियमावली को पढ़ लिया है, मैं सभी नियम एवं शर्तो से सहमत हूं। मै आधिकारिक टेलीग्राम ग्रुप से जुड़कर सप्ताह मे कम से कम दो बार अवश्य विज़िट करके जानकारी से अपडेट रहूँगा। यदि TSCT द्वारा बनाए गए नियमों के अंतर्गत मै सहयोग नहीं करता हूँ तो मेरे नॉमिनी द्वारा सहयोग प्राप्त करने का दावा नहीं किया जाएगा।
                </span>
            </div>
            <button type="submit" name="submit" id="submit" class="btn btn-primary btn-lg btn-block">
                Register
            </button>
        </form>
            </div><br/><br/>
<script>
function hideshowpassword(){
        var x=document.getElementById("password");
        if(x.type=='text'){
            x.type='password';
document.getElementById('togglePassword').classList.remove('fa-eye');
            document.getElementById('togglePassword').classList.add('fa-eye-slash');            
        }else{
            x.type='text';
document.getElementById('togglePassword').classList.remove('fa-eye-slash');
            document.getElementById('togglePassword').classList.add('fa-eye');
        }
    }       
function hideshowpassword1(){
        var x=document.getElementById("confirm_password");
        if(x.type=='text'){
            x.type='password';
document.getElementById('toggleconfirmpassword').classList.remove('fa-eye');
            document.getElementById('toggleconfirmpassword').classList.add('fa-eye-slash');            
        }else{
            x.type='text';
document.getElementById('toggleconfirmpassword').classList.remove('fa-eye-slash');
            document.getElementById('toggleconfirmpassword').classList.add('fa-eye');
        }
    }       
</script>
<script>

$(document).ready(function(){
    $("#subpost").hide();
    $("#subpostlabel").hide();
    
     $("#department").change(function(){
        var departpost = $(this).val();
        
        $.get('https://tsctup.com/teacher/post_list_as_per_department.php?departpost='+departpost, function(data, status){
              var data1 = jQuery.parseJSON(data); 
              var len = data1.length;
              $("#post").empty();
              $("#post").append("<option value='' disabled selected>Select Post</option>");
              for( var i = 0; i<len; i++){
                    // var post = data1[i];
                    $("#post").append("<option value='"+data1[i]['code']+"'>"+data1[i]['value']+"</option>");

                }
          });
    });
    
    $("#post").change(function(){
        var departpost = $(this).val();
        
        if(departpost=='CLERK' || departpost=='CLERK MADHYAMIK'){
        
        $.get('https://tsctup.com/teacher/sub_post_list_as_per_department.php?departpost='+departpost, function(data, status){
              var data1 = jQuery.parseJSON(data); 
              var len = data1.length;
              $("#subpost").empty();
              $("#subpostlabel").show();
              $("#subpost").show();
              $('#subpost').prop("required", true);
              $("#subpost").append("<option value='' disabled selected>Select Sub Post</option>");
              for( var i = 0; i<len; i++){
                    // var post = data1[i];
                    $("#subpost").append("<option value='"+data1[i]['code']+"'>"+data1[i]['value']+"</option>");

                }
          });
        }else{
          $("#subpost").empty();
          $('#subpost').prop("required", false);
          $("#subpost").hide();
          $("#subpostlabel").hide();
        }
    });
    

    $("#state").change(function(){
        var stname = $(this).val();

        $.ajax({
            url: 'state_city.php',
            type: 'post',
            data: {state:stname},
            dataType: 'json',
            success:function(result){
                var rs=typeof(result);
                //alert(rs);
               // var jsondata=JSON.parse(result);
                var len = result.length;

                $("#district").empty();
                for( var i = 0; i<len; i++){
                    //var id = jsondata[i]['id'];
                    var district = result[i];
                    
                    $("#district").append("<option value='"+district+"'>"+district+"</option>");

                }
            }
        });
    });
    

});

</script>
<script>
    function get_detail(){
        if (document.getElementById("knowusdropdown").value == "1"){
        var tcid=document.getElementById("tc_detail");
        tcid.innerHTML="";
    }     
    else{
        var tcid=document.getElementById("tc_detail");
    tcid.innerHTML="<label>पदाधिकारी का नाम</label><input type='text' id='post_person_name' name='post_person_name' required class='form-control' /><br><label>पदाधिकारी का पद</label><input type='text' id='post_person_post' name='post_person_post' required class='form-control' /><br><label>पदाधिकारी का जिला</label><input type='text' id='post_person_district' name='post_person_district' required class='form-control' />";
    } 
}
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
                                    <ul ><li><a href="https://tsctup.com/privacy_policy.php" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Privacy Policy</a></li>
                                        <li><a href="https://tsctup.com/niyamwali.php" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Niyamawali</a></li>
                                        <li><a href="https://tsctup.com/teacher_list.php" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Teachers List</a></li>
                                        <li><a href="https://tsctup.com/contact.php" style="color:white;"><i class="material-icons" style="color:white;">keyboard_arrow_right</i> Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-3">
                                <div class="footer-text two">
                                    <h3>USEFUL LINKS</h3>
                                    <ul>
                                        <li><a href="https://tsctup.com/gallery.php" style="color:white;">Gallery</a></li>
                                        <li><a href="https://tsctup.com/about.php" style="color:white;">About Us</a></li>
                                    <li><a href="https://tsctup.com/user/login.php" style="color:white;">District Level Login</a></li>
                                        <li><a href="https://tsctup.com/register.php" style="color:white;">Register</a></li>
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