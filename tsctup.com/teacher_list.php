
<style>
  @media screen and (max-width: 600px) {
    .search_box{
      width: 70% !important;
    }
    .search_button{
      width: 25% !important;
    }
  }
</style>

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
</div>
	
 <div class="container-fluid" style="margin-top:25px;">
        <!-- Begin Page Content -->
        <div class="container-fluid">
         
          <div class="card shadow mb-4">
            
            <div class="card-body ">
                <form class="example" action="" method="GET">
                    <div>
                        
                        <span>
                        <input class="form-control search_box" id="search" name="search" type="text" placeholder="Plz Search by Your Full Name or EHRMS CODE" style="width:67%;display:inline;border: 2px solid green;"/>
                        </span>
                        <select name="dropdown" id="dropdown" class="form-control" style="width:20%;display:inline;border: 2px solid green;margin-bottom:6px;">
                          <option value="all">All</option>
                          <option value="name">Name</option>
                          <option value="ehrms">Ehrms</option>
                          <option value="id">ID</option>
                          <option value="school">School / Office</option>
                          <option value="block">Block</option>
                          <option value="post">Post</option>
                          <option value="city">District</option>
                        </select>
                        <span>
                            <button type="submit" class="search_button" style="width:5%;display:inline;border-radius:10px;padding:2px;background-color: green;color: white;"><i class="fa fa-search"></i></button>
                        </span>
                   </div>
                </form>
                <br>
                <div style="overflow:scroll;"> 
                 <table class="table table-bordered table-striped" >
                    <thead style="color: red;">
                      <tr>
                          <th>#</th>
                         <th>TCID</th>
                          <th>EHRMS</th>
                          <th>Name</th>
                          <th>School Name / Office</th>
                          <th>BLOCK</th>
                          <th>POST</th>
                          <th>DISTRICT</th>
                          <th>DATE</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                                              <tr>
                            <td>1</td>
                          <td>0</td>
                          <td>275748</td>
                          <td>Satyabir singh </td>
                          <td>PS TAKHA </td>
                          <td>Takha</td>
                          <td>AT PS</td>
                          <td>Etawah</td>
                          <td>2024-01-18 09:16:58</td>
                        </tr>
                                                <tr>
                            <td>2</td>
                          <td>0</td>
                          <td>478787</td>
                          <td>SALINI SINGH</td>
                          <td>PS JAMKHURI</td>
                          <td>LAMBHUA</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Sultanpur</td>
                          <td>2024-01-18 09:15:24</td>
                        </tr>
                                                <tr>
                            <td>3</td>
                          <td>0</td>
                          <td>266625</td>
                          <td>Shashi Kanta </td>
                          <td>Primary Pathshala , alipur no-2 </td>
                          <td>Sardhana </td>
                          <td>AT PS</td>
                          <td>Meerut</td>
                          <td>2024-01-18 09:14:01</td>
                        </tr>
                                                <tr>
                            <td>4</td>
                          <td>0</td>
                          <td>860282</td>
                          <td>Amit kumar singh </td>
                          <td>Janta vikas inter College Mathana keelpur Aligarh up</td>
                          <td>Khair </td>
                          <td>LT GRADE TEACHER</td>
                          <td>Aligarh</td>
                          <td>2024-01-18 09:11:46</td>
                        </tr>
                                                <tr>
                            <td>5</td>
                          <td>0</td>
                          <td>577791</td>
                          <td>Sharda</td>
                          <td>Bhaiyapur</td>
                          <td>Maharajganj</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Raebareli</td>
                          <td>2024-01-18 09:11:13</td>
                        </tr>
                                                <tr>
                            <td>6</td>
                          <td>0</td>
                          <td>1062326</td>
                          <td>Manoj Kumar Kharwar </td>
                          <td>V.B.S Govt Degree College Campierganj, Gorakhpur </td>
                          <td>Campierganj </td>
                          <td>ASSISTANT PROFESSOR</td>
                          <td>Gorakhpur</td>
                          <td>2024-01-18 09:10:39</td>
                        </tr>
                                                <tr>
                            <td>7</td>
                          <td>0</td>
                          <td>953809</td>
                          <td>Sanjogata </td>
                          <td>UPS Alipur composite </td>
                          <td>kairana </td>
                          <td>ANUDESHAK</td>
                          <td>Shamli</td>
                          <td>2024-01-18 09:09:19</td>
                        </tr>
                                                <tr>
                            <td>8</td>
                          <td>0</td>
                          <td>314300</td>
                          <td>AMARPAL SINGH </td>
                          <td>P V Kheri Kalan </td>
                          <td>Sarurpur </td>
                          <td>AT PS</td>
                          <td>Meerut</td>
                          <td>2024-01-18 09:08:49</td>
                        </tr>
                                                <tr>
                            <td>9</td>
                          <td>0</td>
                          <td>2181954</td>
                          <td>Manish rao </td>
                          <td>P.S KALYANPUR </td>
                          <td>Chhibramau </td>
                          <td>AT PS</td>
                          <td>Kannauj</td>
                          <td>2024-01-18 09:05:08</td>
                        </tr>
                                                <tr>
                            <td>10</td>
                          <td>0</td>
                          <td>571426</td>
                          <td>Ramvir Singh </td>
                          <td>Ups Madiyadileepnagar  Nprc Fatehpura</td>
                          <td>Mahewa  </td>
                          <td>AT UPS</td>
                          <td>Etawah</td>
                          <td>2024-01-18 08:59:49</td>
                        </tr>
                                                <tr>
                            <td>11</td>
                          <td>0</td>
                          <td>88339</td>
                          <td>KIRAN SINGH </td>
                          <td>P.S.JAMEEN VELKUNDA </td>
                          <td>HARAIYA </td>
                          <td>AT PS</td>
                          <td>Azamgarh</td>
                          <td>2024-01-18 08:58:00</td>
                        </tr>
                                                <tr>
                            <td>12</td>
                          <td>0</td>
                          <td>2165567</td>
                          <td>DILIP KUMAR SINGH </td>
                          <td>Ps Semaraghat</td>
                          <td>PASGAWAN</td>
                          <td>AT PS</td>
                          <td>Lakhimpur Kheri</td>
                          <td>2024-01-18 08:57:32</td>
                        </tr>
                                                <tr>
                            <td>13</td>
                          <td>0</td>
                          <td>451098</td>
                          <td>Devendra Pratap </td>
                          <td>Composite vidyalaya ekaura vijaipur Fatehpur</td>
                          <td>Vijaypur</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Fatehpur</td>
                          <td>2024-01-18 08:57:29</td>
                        </tr>
                                                <tr>
                            <td>14</td>
                          <td>0</td>
                          <td>2176386</td>
                          <td>Sujeet kumar</td>
                          <td>Composite school Barai Patti </td>
                          <td>Pathar Deva </td>
                          <td>AT PS</td>
                          <td>Deoria</td>
                          <td>2024-01-18 08:53:34</td>
                        </tr>
                                                <tr>
                            <td>15</td>
                          <td>0</td>
                          <td>640947</td>
                          <td>Aishwarya Tripathi</td>
                          <td>PS RAMPUR BANDH NPRC SIRSIYA</td>
                          <td>SIRSIYA</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Shravasti</td>
                          <td>2024-01-18 08:45:47</td>
                        </tr>
                                                <tr>
                            <td>16</td>
                          <td>0</td>
                          <td>45238</td>
                          <td>Abhishek Shukla</td>
                          <td>Primary School Chaukhada</td>
                          <td>Bhanwapur</td>
                          <td>AT PS</td>
                          <td>Siddharthnagar</td>
                          <td>2024-01-18 08:43:39</td>
                        </tr>
                                                <tr>
                            <td>17</td>
                          <td>0</td>
                          <td>2219131</td>
                          <td>Dr.Sandeep kumar yadav</td>
                          <td>Pt DDU GMIC sikrohari Hardoi </td>
                          <td>Tadiyavan </td>
                          <td>PGT TEACHER</td>
                          <td>Hardoi</td>
                          <td>2024-01-18 08:41:10</td>
                        </tr>
                                                <tr>
                            <td>18</td>
                          <td>0</td>
                          <td>593538</td>
                          <td>Awadhesh Kumar</td>
                          <td>Prathmik Vidhyalay Rampur N 1</td>
                          <td>Nagar kshetra</td>
                          <td>AT PS</td>
                          <td>Ballia</td>
                          <td>2024-01-18 08:40:51</td>
                        </tr>
                                                <tr>
                            <td>19</td>
                          <td>0</td>
                          <td>411262</td>
                          <td>Gunja Singh</td>
                          <td>P.S. Sansarpur, block-Basti Sadar</td>
                          <td>Basti Sadar</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Basti</td>
                          <td>2024-01-18 08:38:12</td>
                        </tr>
                                                <tr>
                            <td>20</td>
                          <td>0</td>
                          <td>1022516</td>
                          <td>Ravi Kumar Maurya </td>
                          <td>P.S. SARAI INDRAWAT  </td>
                          <td>Bihar </td>
                          <td>AT PS</td>
                          <td>Pratapgarh</td>
                          <td>2024-01-18 08:37:49</td>
                        </tr>
                                                <tr>
                            <td>21</td>
                          <td>0</td>
                          <td>885788</td>
                          <td>Rajendra Singh </td>
                          <td>Atal Bihari I C Unnao </td>
                          <td>Unnao City </td>
                          <td>TGT TEACHER</td>
                          <td>Unnao</td>
                          <td>2024-01-18 08:36:35</td>
                        </tr>
                                                <tr>
                            <td>22</td>
                          <td>0</td>
                          <td>2168513</td>
                          <td>Mukesh Kumar </td>
                          <td>P S Madhaijot</td>
                          <td>Itiathok</td>
                          <td>AT PS</td>
                          <td>Gonda</td>
                          <td>2024-01-18 08:34:22</td>
                        </tr>
                                                <tr>
                            <td>23</td>
                          <td>0</td>
                          <td>861592</td>
                          <td>Monika</td>
                          <td>PS SANPLI </td>
                          <td>Nakur</td>
                          <td>AT PS</td>
                          <td>Saharanpur</td>
                          <td>2024-01-18 08:30:59</td>
                        </tr>
                                                <tr>
                            <td>24</td>
                          <td>0</td>
                          <td>475341</td>
                          <td>Shah Mohammad</td>
                          <td>P. S jamautiya </td>
                          <td>Dumariyaganj </td>
                          <td>HT PS</td>
                          <td>Siddharthnagar</td>
                          <td>2024-01-18 08:26:34</td>
                        </tr>
                                                <tr>
                            <td>25</td>
                          <td>0</td>
                          <td>328540</td>
                          <td>Anita </td>
                          <td>ps sabdalpur sharki</td>
                          <td>hasanpur </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Amroha</td>
                          <td>2024-01-18 08:26:29</td>
                        </tr>
                                                <tr>
                            <td>26</td>
                          <td>0</td>
                          <td>807673</td>
                          <td>Alpana Rajput </td>
                          <td>composite school kanshiram colony Sikanderpur Nigoh chhibramau Kannauj </td>
                          <td>Chhibramau </td>
                          <td>AT UPS</td>
                          <td>Kannauj</td>
                          <td>2024-01-18 08:23:34</td>
                        </tr>
                                                <tr>
                            <td>27</td>
                          <td>0</td>
                          <td>943822</td>
                          <td>Krishna Nand</td>
                          <td>Composite school jahuruddinpur</td>
                          <td>suithakala</td>
                          <td>AT PS</td>
                          <td>Jaunpur</td>
                          <td>2024-01-18 08:23:30</td>
                        </tr>
                                                <tr>
                            <td>28</td>
                          <td>0</td>
                          <td>266718</td>
                          <td>Ankush Agarwal</td>
                          <td>cups Kharowa second</td>
                          <td>nagar kestra</td>
                          <td>AT PS</td>
                          <td>Bareilly</td>
                          <td>2024-01-18 08:19:11</td>
                        </tr>
                                                <tr>
                            <td>29</td>
                          <td>0</td>
                          <td>406410</td>
                          <td>Ashish Kumar Chauhan</td>
                          <td>UPS Nagla Sundar</td>
                          <td>Jaithra</td>
                          <td>AT UPS</td>
                          <td>Etah</td>
                          <td>2024-01-18 08:18:54</td>
                        </tr>
                                                <tr>
                            <td>30</td>
                          <td>0</td>
                          <td>26160</td>
                          <td>Vandana Yadav</td>
                          <td>UPS Padraiya Composite </td>
                          <td>Soraon</td>
                          <td>AT UPS</td>
                          <td>Prayagraj</td>
                          <td>2024-01-18 08:17:38</td>
                        </tr>
                                                <tr>
                            <td>31</td>
                          <td>0</td>
                          <td>295484</td>
                          <td>Anil Kumar </td>
                          <td>U P S  Ghoraha Gyanpur Bhadohi</td>
                          <td>Gyanpur </td>
                          <td>AT UPS</td>
                          <td>Sant Ravidas Nagar</td>
                          <td>2024-01-18 08:17:19</td>
                        </tr>
                                                <tr>
                            <td>32</td>
                          <td>0</td>
                          <td>615290</td>
                          <td>Suneeta Gangwar </td>
                          <td>P.S.Lahiya</td>
                          <td>Vithari Chainpur </td>
                          <td>AT PS</td>
                          <td>Bareilly</td>
                          <td>2024-01-18 08:17:15</td>
                        </tr>
                                                <tr>
                            <td>33</td>
                          <td>0</td>
                          <td>259959</td>
                          <td>Mrs.Chhama Gupta</td>
                          <td>Composite U.P.S.Chinigran</td>
                          <td>Nagar Kshetra , Farrukhabad </td>
                          <td>AT UPS</td>
                          <td>Farrukhabad</td>
                          <td>2024-01-18 08:13:28</td>
                        </tr>
                                                <tr>
                            <td>34</td>
                          <td>0</td>
                          <td>289076</td>
                          <td>AJAY PRATAP SINGH</td>
                          <td>P S TODARPUR</td>
                          <td>RAMPUR SANGRAMGARH</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Pratapgarh</td>
                          <td>2024-01-18 08:05:14</td>
                        </tr>
                                                <tr>
                            <td>35</td>
                          <td>0</td>
                          <td>477849</td>
                          <td>Deepika Tripathi </td>
                          <td>Mathurasoolpur</td>
                          <td>Bhiyon</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Ambedkar Nagar</td>
                          <td>2024-01-18 08:05:02</td>
                        </tr>
                                                <tr>
                            <td>36</td>
                          <td>0</td>
                          <td>404067</td>
                          <td> PRIYANKA </td>
                          <td>CS GABBAPUR NPRC SIRSIYA </td>
                          <td>SIRSIYA </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Shravasti</td>
                          <td>2024-01-18 08:04:39</td>
                        </tr>
                                                <tr>
                            <td>37</td>
                          <td>0</td>
                          <td>629421</td>
                          <td>Ankita Mishra </td>
                          <td>UPS Hallaur</td>
                          <td>Dumariyaganj </td>
                          <td>ANUDESHAK</td>
                          <td>Siddharthnagar</td>
                          <td>2024-01-18 08:00:50</td>
                        </tr>
                                                <tr>
                            <td>38</td>
                          <td>0</td>
                          <td>550393</td>
                          <td>Jagannath Prasad vishwakarma </td>
                          <td>PS DHANJAI TWO </td>
                          <td>Dhanpatganj </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Sultanpur</td>
                          <td>2024-01-18 08:00:41</td>
                        </tr>
                                                <tr>
                            <td>39</td>
                          <td>0</td>
                          <td>630919</td>
                          <td>Kamlesh Kumar Maurya</td>
                          <td>C S Kantapur Nidur</td>
                          <td>Bhadohi</td>
                          <td>ANUDESHAK</td>
                          <td>Sant Ravidas Nagar</td>
                          <td>2024-01-18 07:54:37</td>
                        </tr>
                                                <tr>
                            <td>40</td>
                          <td>0</td>
                          <td>359390</td>
                          <td>Suresh Kumar</td>
                          <td>UPS GOREMAUKALA COMPSITE</td>
                          <td>Naraini</td>
                          <td>HT PS</td>
                          <td>Banda</td>
                          <td>2024-01-18 07:52:52</td>
                        </tr>
                                                <tr>
                            <td>41</td>
                          <td>0</td>
                          <td>347602</td>
                          <td>Suresh Prasad Bharati </td>
                          <td>P.S. Madhopur kot pratham ,block -Kashi Vidya Pith Varanasi Pin 221011 UP</td>
                          <td>Kashi Vidya Pith </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Varanasi</td>
                          <td>2024-01-18 07:49:16</td>
                        </tr>
                                                <tr>
                            <td>42</td>
                          <td>0</td>
                          <td>407377</td>
                          <td>RAGHUNATH VERMA </td>
                          <td>JAUNGLE BAKI TUKDA NO.14 SECOND </td>
                          <td>PANIYARA </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Maharajganj</td>
                          <td>2024-01-18 07:48:59</td>
                        </tr>
                                                <tr>
                            <td>43</td>
                          <td>0</td>
                          <td>472352</td>
                          <td>ESRAR AHMAD</td>
                          <td>PS Rasulpur Mo kuli </td>
                          <td>Allehpur</td>
                          <td>AT PS</td>
                          <td>Bijnor</td>
                          <td>2024-01-18 07:46:55</td>
                        </tr>
                                                <tr>
                            <td>44</td>
                          <td>0</td>
                          <td>940728</td>
                          <td>Rajendra Kumar </td>
                          <td>PS Reda</td>
                          <td>Oon</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Shamli</td>
                          <td>2024-01-18 07:46:48</td>
                        </tr>
                                                <tr>
                            <td>45</td>
                          <td>0</td>
                          <td>1404905</td>
                          <td>PRAMOD KUMAR </td>
                          <td>J I C KAURIA BAZAR GONDA</td>
                          <td>RUPAIDEEH</td>
                          <td>TGT TEACHER</td>
                          <td>Gonda</td>
                          <td>2024-01-18 07:45:54</td>
                        </tr>
                                                <tr>
                            <td>46</td>
                          <td>0</td>
                          <td>937285</td>
                          <td>RAKESH KUMAR YADAV </td>
                          <td>P S AURANGABAD </td>
                          <td>GHAZIPUR </td>
                          <td>AT PS</td>
                          <td>Ghazipur</td>
                          <td>2024-01-18 07:45:17</td>
                        </tr>
                                                <tr>
                            <td>47</td>
                          <td>0</td>
                          <td>541890</td>
                          <td>Dheeraj Kumar tripathi </td>
                          <td>composite school purjagir</td>
                          <td>kone</td>
                          <td>ANUDESHAK</td>
                          <td>Mirzapur</td>
                          <td>2024-01-18 07:44:28</td>
                        </tr>
                                                <tr>
                            <td>48</td>
                          <td>0</td>
                          <td>837353</td>
                          <td>Priyanka Thakur</td>
                          <td>Government Girls Inter College Atrauli </td>
                          <td>Atrauli </td>
                          <td>LT GRADE TEACHER</td>
                          <td>Aligarh</td>
                          <td>2024-01-18 07:42:07</td>
                        </tr>
                                                <tr>
                            <td>49</td>
                          <td>0</td>
                          <td>335022</td>
                          <td>Sanjeev Kumar Singh </td>
                          <td>PS RAIKARA NPRC DHAURAHA </td>
                          <td>RAJGARH </td>
                          <td>SHIKSHA MITRA</td>
                          <td>Mirzapur</td>
                          <td>2024-01-18 07:40:51</td>
                        </tr>
                                                <tr>
                            <td>50</td>
                          <td>0</td>
                          <td>626449</td>
                          <td>Zeba Khatoon </td>
                          <td>P S Bewa Mustafa</td>
                          <td>Domariaganj</td>
                          <td>SHIKSHA MITRA</td>
                          <td>Siddharthnagar</td>
                          <td>2024-01-18 07:40:29</td>
                        </tr>
                                            </tbody>
                  </table>
                </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

          <!-- Content Row -->
         

        </div>

        <div class="row"style="text-align: center;">
          <div class="col-lg-12">
            <h2 style="text-align:center">Page 1 out of 4809</h2>
            <div class="pagination">

              <!-- first -->
                <a href="teacher_list.html?page=1&search=&dropdown=">&laquo;</a>

                <!-- previous to active -->
                                  <a href="#">0</a>
                
              <!-- active -->
                <a class="active" href="#">1</a>

                <!-- next to active -->
                                <a href="teacher_list.html?page=2&search=&dropdown=">2</a>
                                  
                  <!-- last -->

                <a href="teacher_list.html?page=4809&search=&dropdown=">&raquo;</a>
                  </div>
                  <br>
                  <form action="#" method="GET" style = "display:inline">
                    
                  <input type="number" name="jump" placeholder="Page No." style="margin-left: 10px; padding: 5px; background-image: url('https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-8.png');background-repeat: no-repeat;background-size:15%; padding-left: 40px;margin-bottom: 30px;">
                </form>
              
          </div>
          Execution time 0.0592389107seconds          
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
 

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function takeme() {
  var nopge = prompt("Please enter Page Number");
  if (nopge != "" && isInt(nopge)) {
   window.location = "teacher_list.html?page="+nopge+"&search=";
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