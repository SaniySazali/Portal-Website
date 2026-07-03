function openModal(){

    document.getElementById("loginModal").style.display="block";

}

function closeModal(){

    document.getElementById("loginModal").style.display="none";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;
let msg=document.getElementById("message");

if(user==="admin" && pass==="1234"){

msg.style.color="green";
msg.innerHTML="✓ Login Successful";

}else{

msg.style.color="red";
msg.innerHTML="✗ Invalid Username or Password";

}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

let athleteCount=0;
let coachCount=0;
let eventCount=0;

setInterval(function(){

if(athleteCount<350){
athleteCount+=5;
document.getElementById("athleteCount").innerHTML = athleteCount + "+";
}

if(coachCount<80){
coachCount+=2;
document.getElementById("coachCount").innerHTML = coachCount + "+";
}

if(eventCount<50){
eventCount++;
document.getElementById("eventCount").innerHTML = eventCount + "+";
}

},50);

let visit=localStorage.getItem("visit");

if(visit==null){
visit=1;
}else{
visit++;
}

localStorage.setItem("visit",visit);

document.getElementById("visitorCounter").innerHTML=visit;

// NEWS SLIDER

let slides=document.querySelectorAll(".slide");

let current=0;

setInterval(function(){

if(slides.length>0){

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

}

},3000);


// FAQ

let faq=document.querySelectorAll(".faq");

faq.forEach(item=>{

item.addEventListener("click",function(){

let answer=this.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

window.onload = function(){

    document.getElementById("loginBtn").addEventListener("click", function(e){

        e.preventDefault();

        openModal();

    });

}

window.onclick=function(event){

    let modal=document.getElementById("loginModal");

    if(event.target==modal){
        closeModal();
    }

}

function showSport(sport){

if(sport=="badminton"){

document.getElementById("sportsGridMenu").style.display = "none";

   
        document.getElementById("sportContent").innerHTML = `
        
     
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>

<div class="sports-grid">

<div class="sport-card">
<img src="Datuk Wira Lee Chong Wei.jpg">
<h3>Datuk Wira Lee Chong Wei</h3>
<p>Men's Singles</p>
<p><strong>Status:</strong> Retirement (2019)</p>
</div>

<div class="sport-card">
<img src="Datuk Misbun Sidek.jpg">
<h3>Datuk Misbun Sidek</h3>
<p>Men's Singles</p>
<p><strong>Status:</strong> Retirement (1989)</p>
</div>

<div class="sport-card">
<img src="Rashid Sidek.jpg">
<h3>Rashid Sidek</h3>
<p>Men's Singles</p>
<p><strong>Status:</strong> Retirement (1997)</p>
</div>

<div class="sport-card">
<img src="Wong Mew Choo.jpg">
<h3>Wong Mew Choo</h3>
<p>Women's Singles</p>
<p><strong>Status:</strong> Retirement (2011)</p>
</div>

<div class="sport-card">
<img src="Lee Zii Jia.jpg">
<h3>Lee Zii Jia</h3>
<p>Men's Singles</p>
<p><strong>Status:</strong> Active</p>
</div>

<div class="sport-card">
<img src="Ng Tze Yong.jpg">
<h3>Ng Tze Yong</h3>
<p>Men's Singles</p>
<p><strong>Status:</strong> Active</p>
</div>

<div class="sport-card">
<img src="Aaron Chia & Soh Wooi Yik.jpg">
<h3>Aaron Chia & Soh Wooi Yik</h3>
<p>Men's Doubles</p>
<p><strong>Status:</strong> Active</p>
</div>

<div class="sport-card">
<img src="Goh Sze Fei & Nur Izzuddin.jpg">
<h3>Goh Sze Fei & Nur Izzuddin</h3>
<p>Men's Doubles</p>
<p><strong>Status:</strong> Active</p>
</div>

<div class="sport-card">
<img src="Pearly Tan & M. Thinaah.jpg">
<h3>Pearly Tan & M. Thinaah</h3>
<p>Women's Doubles</p>
<p><strong>Status:</strong> Active</p>
</div>

<div class="sport-card">
<img src="Chen Tang Jie & Toh Ee Wei.jpg">
<h3>Chen Tang Jie & Toh Ee Wei</h3>
<p>Mixed Doubles</p>
<p><strong>Status:</strong> Active</p>
</div>

</div>
`;

}
// KATEGORI BARU: FOOTBALL (Tambah bahagian ini)
    else if(sport == "football"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai pemain bola sepak
        document.getElementById("sportContent").innerHTML = `
                    
                    <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

               <div class="sport-card">
                    <img src="arif aiman hanapi.jpg" alt="arif aiman hanapi">
                    <h3>Arif Aiman Hanapi</h3>
                    <p>Forward / Winger</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="faisal halim.jpg" alt="faisal halim">
                    <h3>Faisal Halim</h3>
                    <p>Forward / Winger</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="safee sali.jpg" alt="safee sali">
                    <h3>Safee Sali</h3>
                    <p>Striker</p>
                    <p><strong>Status:</strong> Retirement 2023</p>
                </div>

                <div class="sport-card">
                    <img src="mokhtar dahari.jpg" alt="mokhtar dahari">
                    <h3>Mokhtar Dahari</h3>
                    <p>Striker</p>
                    <p><strong>Status:</strong> Retirement 1986</p>
                </div>

            <div class="sport-card">
                    <img src="zainal abidin hassan.jpg" alt="zainal abidin hassan">
                    <h3>Zainal Abidin Hassan</h3>
                    <p>Defender</p>
                    <p><strong>Status:</strong> Retirement 1999</p>
                </div>

            <div class="sport-card">
                    <img src="shukor adan.jpg" alt="shukor adan">
                    <h3>Shukor Adan</h3>
                    <p>Midfielder / Defender</p>
                    <p><strong>Status:</strong> Retirement 2021</p>
                </div>

            <div class="sport-card">
                    <img src="safiq rahim.jpg" alt="safiq rahim">
                    <h3>Safiq Rahim</h3>
                    <p>Midfielder</p>
                    <p><strong>Status:</strong> Retirement 2025</p>
                </div>

            <div class="sport-card">
                    <img src="farizal marlias.jpg" alt="farizal marlias">
                    <h3>Farizal Marlias</h3>
                    <p>Goalkeeper</p>
                    <p><strong>Status:</strong> Retirement 2025</p>
                </div>

            <div class="sport-card">
                    <img src="syihan hazmi.jpg" alt="syihan hazmi">
                    <h3>Syihan Hazmi</h3>
                    <p>Goalkeeper</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="safawi rashid.jpg" alt="safawi rashid">
                    <h3>Safawi Rashid</h3>
                    <p>Forward / Winger</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }

    // KATEGORI BARU: CYCLING (Contoh jika nak tambah lagi sukan lain nanti)
    else if(sport == "cycling"){
        document.getElementById("sportsGridMenu").style.display = "none";
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">
                
               <div class="sport-card">
                    <img src="azizulhasni awang.jpg" alt="azizulhasni awang">
                    <h3>Datuk Azizulhasni Awang</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

             <div class="sport-card">
                    <img src="rosman alwi.jpg" alt="rosman alwi">
                    <h3>Rosman Alwi</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Retirement 1988</p>
                </div>

             <div class="sport-card">
                    <img src="josiah ng.jpg" alt="josiah ng">
                    <h3>Josiah Ng</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Retirement 2015</p>
                </div>

             <div class="sport-card">
                    <img src="mohd rizal tisin.jpg" alt="mohd rizal tisin">
                    <h3>Mohd Rizal Tisin</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Retirement 2012</p>
                </div>

             <div class="sport-card">
                    <img src="fatehah mustapa.jpg" alt="fatehah mustapa">
                    <h3>Fatehah Mustapa</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Retirement 2020</p>
                </div>

             <div class="sport-card">
                    <img src="muhammad shah firdaus sahrom.jpg" alt="muhammad shah firdaus sahrom">
                    <h3>Muhammad Shah Firdaus Sahrom</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

             <div class="sport-card">
                    <img src="nurul izzah izzati mohd asri.jpg" alt="nurul izzah izzati mohd asri">
                    <h3>Nurul Izzah Izzati Mohd Asri</h3>
                    <p>Track Cycling</p>
                    <p><strong>Status:</strong> Active</p>
                </div>
            </div>
        `;
    }
// KATEGORI BARU: swimming (Tambah bahagian ini)
    else if(sport == "swimming"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai swimming
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="nurul huda abdullah.jpg" alt="nurul huda abdullah">
                    <h3>Nurul Huda Abdullah</h3>
                    <p>Freestyle / Individual Medley</p>
                    <p><strong>Status:</strong> Retirement 1989</p>
                </div>

                <div class="sport-card">
                    <img src="alex lim keng liat.jpg" alt="alex lim keng liat">
                    <h3>Alex Lim Keng Liat</h3>
                    <p>backstroke </p>
                    <p><strong>Status:</strong> Retirement 2006</p>
                </div>

                <div class="sport-card">
                    <img src="khoo cai lin.jpg" alt="khoo cai lin">
                    <h3>Khoo Cai Lin</h3>
                    <p>long distance freestyle</p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

                <div class="sport-card">
                    <img src="daniel bego.jpg" alt="daniel bego">
                    <h3>Daniel Bego</h3>
                    <p>freestyle & butterfly</p>
                    <p><strong>Status:</strong> Retirement 2017</p>
                </div>

            <div class="sport-card">
                    <img src="khiew heo yean.jpg" alt="khiew heo yean">
                    <h3>Khiew Heo Yean</h3>
                    <p>freestyle & backstroke specialist</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="bryan leong.jpg" alt="bryan leong">
                    <h3>Bryan Leong</h3>
                    <p>Butterfly & Freestyle</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="andrew goh.jpg" alt="andrew goh">
                    <h3>Andrew Goh</h3>
                    <p>long distance freestyle</p>
                    <p><strong>Status:</strong> Active</p>
                </div>
            `;
    }

// KATEGORI BARU: hockey (Tambah bahagian ini)
    else if(sport == "hockey"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player hockey
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="sarjit singh.jpg" alt="sarjit singh">
                    <h3>Sarjit Singh</h3>
                    <p>Midfielder</p>
                    <p><strong>Status:</strong> Retirement 1993</p>
                </div>

                <div class="sport-card">
                    <img src="mirnawan nawawi.jpg" alt="mirnawan nawawi">
                    <h3>Mirnawan Nawawi</h3>
                    <p>Forward</p>
                    <p><strong>Status:</strong> Retirement 2002</p>
                </div>

                <div class="sport-card">
                    <img src="s. kuhan.jpg" alt="s. kuhan">
                    <h3>S. Kuhan</h3>
                    <p>Defender</p>
                    <p><strong>Status:</strong> Retirement 2007</p>
                </div>

                <div class="sport-card">
                    <img src="hafizuddin othman.jpg" alt="hafizuddin othman">
                    <h3>Hafizuddin Othman</h3>
                    <p>Goalkeeper</p>
                    <p><strong>Status:</strong>Active</p>
                </div>

            <div class="sport-card">
                    <img src="razie rahim.jpg" alt="razie rahim">
                    <h3>Razie Rahim</h3>
                    <p>Defender</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="marhan jalil.jpg" alt="marhan jalil">
                    <h3>Marhan Jalil</h3>
                    <p>Midfielder</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="farizal saari.jpg" alt="farizal saari">
                    <h3>Farizal Saari</h3>
                    <p>Forward</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }
// KATEGORI BARU: archery (Tambah bahagian ini)
    else if(sport == "archery"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player 
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Mon Redee Sut Txi.jpg" alt="Mon Redee Sut Txi">
                    <h3>Mon Redee Sut Txi</h3>
                    <p>Women's Recurve</p>
                    <p><strong>Status:</strong> Retirement 2005</p>
                </div>

                <div class="sport-card">
                    <img src="Cheng Chu Sian.jpg" alt="Cheng Chu Sian">
                    <h3>Cheng Chu Sian</h3>
                    <p>Men's Recurve</p>
                    <p><strong>Status:</strong> Retirement 2014</p>
                </div>

                <div class="sport-card">
                    <img src="Wan khalmizam Wan Abd Aziz.jpg" alt="Wan khalmizam Wan Abd Aziz">
                    <h3>Wan khalmizam Wan Abd Aziz</h3>
                    <p>Men's Recurve</p>
                    <p><strong>Status:</strong> Retirement 2010</p>
                </div>

                <div class="sport-card">
                    <img src="Haziq Kamarudin.jpg" alt="Haziq Kamarudin">
                    <h3>Haziq Kamarudin</h3>
                    <p>Men's Recurve</p>
                    <p><strong>Status:</strong> Retirement 2021</p>
                </div>

            <div class="sport-card">
                    <img src="khairul anuar Mohamad.jpg" alt="khairul anuar Mohamad">
                    <h3>khairul Anuar Mohamad</h3>
                    <p>Men's Recurve</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="syaqiera mashayikh.jpg" alt="syaqiera mashayikh">
                    <h3>Syaqiera Mashayikh</h3>
                    <p>Women's Recurve</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Ariana nur Diana Mohamad zairi.jpg" alt="Ariana nur Diana Mohamad zairi">
                    <h3>Ariana Nur Diana Mohamad Zairi</h3>
                    <p>Women's Recurve</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Mohd juwaidi Mazuki.jpg" alt="Mohd juwaidi Mazuki">
                    <h3>Mohd Juwaidi Mazuki</h3>
                    <p>Men's Compound</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }

// KATEGORI BARU: sepak takraw (Tambah bahagian ini)
    else if(sport == "sepak takraw"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Mohammad Syahir Mohd Rosdi.jpg" alt="Mohammad Syahir Mohd Rosdi">
                    <h3>Mohammad Syahir Mohd Rosdi</h3>
                    <p>Tekong</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Muhammad Azlan Alias.jpg" alt="Muhammad Azlan Alias">
                    <h3>Muhammad Azlan Alias</h3>
                    <p>Killer</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Khairol Zaman Hamir Akhbar.jpg" alt="Khairol Zaman Hamir Akhbar">
                    <h3>Khairol Zaman Hamir Akhbar</h3>
                    <p>Killer</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

               <div class="sport-card">
                    <img src="Adnan Saidin.jpg" alt="Adnan Saidin">
                    <h3>Adnan Saidin</h3>
                    <p>Killer</p>
                    <p><strong>Status:</strong> Retirement 1990</p>
                </div>

            <div class="sport-card">
                    <img src="Norshahruddin Mad Ghani.jpg" alt="Norshahruddin Mad Ghani">
                    <h3>Norshahruddin Mad Ghani</h3>
                    <p>Killer</p>
                    <p><strong>Status:</strong> Retirement 2013</p>
                </div>

            </div>
        `;
    }

// KATEGORI BARU: squash (Tambah bahagian ini)
    else if(sport == "squash"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player 
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="eain yow.jpg" alt="eain yow">
                    <h3>Eain Yow</h3>
                    <p>Men's Singles</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Sanjay Jeeva.jpg" alt="Sanjay Jeeva">
                    <h3>Sanjay Jeeva</h3>
                    <p>Men's Singles</p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

            <div class="sport-card">
                    <img src="Sanjay Singh Chal.jpg" alt="Sanjay Singh Chal">
                    <h3>Sanjay Singh Chal</h3>
                    <p>Men's Singles</p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

                <div class="sport-card">
                    <img src="Datuk Nicol Ann David.jpg" alt="Datuk Nicol Ann David">
                    <h3>Datuk Nicol Ann David</h3>
                    <p>Women's Singles</p>
                    <p><strong>Status:</strong> Retirement 2019</p>
                </div>

               <div class="sport-card">
                    <img src="S. Sivasangari.jpg" alt="S. Sivasangari">
                    <h3>S. Sivasangari</h3>
                    <p>Women's Singles</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Addeen Idrakie.jpg" alt="Addeen Idrakie">
                    <h3>Addeen Idrakie</h3>
                    <p>Men's Singles</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

              <div class="sport-card">
                    <img src="Rachel Arnold.jpg" alt="Rachel Arnold">
                    <h3>Rachel Arnold</h3>
                    <p>Women's Singles</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }

// KATEGORI BARU: silat (Tambah bahagian ini)
    else if(sport == "silat"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player 
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Mohd Al-Jufferi Jamari.jpg" alt="Mohd Al-Jufferi Jamari">
                    <h3>Mohd Al-Jufferi Jamari</h3>
                    <p>Class F / Class G</p>
                    <p><strong>Status:</strong> Retirement 2022</p>
                </div>

                <div class="sport-card">
                    <img src="Muhammad Robial Sobri.jpg" alt="Muhammad Robial Sobri">
                    <h3>Muhammad Robial Sobri</h3>
                    <p> Class I </p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Siti Rahmah Mohamed Nasir.jpg" alt="Siti Rahmah Mohamed Nasir">
                    <h3>Siti Rahmah Mohamed Nasir</h3>
                    <p>Class E</p>
                    <p><strong>Status:</strong> Retirement 2022</p>
                </div>

                <div class="sport-card">
                    <img src="Nor Farah Mazlan.jpg" alt="Nor Farah Mazlan">
                    <h3>Nor Farah Mazlan</h3>
                    <p>Class A / Class B</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Merrywati Manuil.jpg" alt="Merrywati Manuil">
                    <h3>Merrywati Manuil</h3>
                    <p>Women's Singles</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }

// KATEGORI BARU: aquatic (Tambah bahagian ini)
    else if(sport == "aquatic"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player 
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Ooi Tze Liang.jpg" alt="Ooi Tze Liang">
                    <h3>Ooi Tze Liang</h3>
                    <p>Men's 3m Springboard / 10m Platform</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Bertrand Rhodict Lises.jpg" alt="Bertrand Rhodict Lises">
                    <h3>Bertrand Rhodict Lises</h3>
                    <p>Men's 10m Platform </p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Datuk Pandelela Rinong Pamg.jpg" alt="Datuk Pandelela Rinong Pamg">
                    <h3>Datuk Pandelela Rinong Pamg</h3>
                    <p>Women's 10m Platform / Synchronised </p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                 <div class="sport-card">
                    <img src="Bryan Nickson Lomas.jpg" alt="Bryan Nickson Lomas">
                    <h3>Bryan Nickson Lomas</h3>
                    <p>Men's 10m Platform / 3m Springboard </p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

             <div class="sport-card">
                    <img src="Nur Dhabitah Sabri.jpg" alt="Nur Dhabitah Sabri">
                    <h3>Nur Dhabitah Sabri</h3>
                    <p> Women's 3m Springboard / 10m Platform</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

             <div class="sport-card">
                    <img src="Cheong Jun Hoong.jpg" alt="Cheong Jun Hoong">
                    <h3>Cheong Jun Hoong</h3>
                    <p>Women's 10m Platform / Synchronised</p>
                    <p><strong>Status:</strong> Retirement 2022</p>
                </div>
            </div>
        `;
    }

// KATEGORI BARU: weightlifting (Tambah bahagian ini)
    else if(sport == "weightlifting"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player hockey
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Aniq Kasdan.jpg" alt="Aniq Kasdan">
                    <h3>Aniq Kasdan</h3>
                    <p>Category 55kg / 61kg Men's</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Muhamad Aznil Bidin.jpg" alt="Muhamad Aznil Bidin">
                    <h3>Muhamad Aznil Bidin</h3>
                    <p>Category 61kg / 67kg Men's</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Nurul Syasya Khairina Mohd Asri.jpg" alt="Nurul Syasya Khairina Mohd Asri">
                    <h3>Nurul Syasya Khairina Mohd Asri</h3>
                    <p>Women's Category</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Mohd Amirul Hamizan Ibrahim.jpg" alt="Mohd Amirul Hamizan Ibrahim">
                    <h3>Mohd Amirul Hamizan Ibrahim</h3>
                    <p>Category 56kg Men's</p>
                    <p><strong>Status:</strong> Retirement 2005</p>
                </div>

            <div class="sport-card">
                    <img src="Siti Aisyah Md Rosli.jpg" alt="Siti Aisyah Md Rosli">
                    <h3>Siti Aisyah Md Rosli</h3>
                    <p>Women's Category</p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

            </div>
        `;
    }

// KATEGORI BARU: e-sport (Tambah bahagian ini)
    else if(sport == "e-sports"){
        // 1. Sorokkan menu kategori utama
        document.getElementById("sportsGridMenu").style.display = "none";

        // 2. Masukkan senarai player hockey
        document.getElementById("sportContent").innerHTML = `
        
        <button onclick="backToSportsMenu()" style="margin-bottom: 20px; background: linear-gradient(135deg, #ff9944, #ff5500); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold; transition: background 0.3s ease;">
            <i class="fas fa-arrow-left"></i> Return to Category
        </button>
            
            <div class="sports-grid">

                <div class="sport-card">
                    <img src="Muhammad Dhiya Ulhaq Bin Mohd Arasz.jpg" alt="Muhammad Dhiya Ulhaq Bin Mohd Arasz ">
                    <h3>Muhammad Dhiya Ulhaq Bin Mohd Arasz </h3>
                    <p>Rusher / Fragger</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Abdul Azim Ikromi Bin Abdul Rashid.jpg" alt="Abdul Azim Ikromi Bin Abdul Rashid">
                    <h3>Abdul Azim Ikromi Bin Abdul Rashid</h3>
                    <p>In-Game Leader (IGL) / Scout</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

                <div class="sport-card">
                    <img src="Mohd Fuad Bin Razali.jpg" alt="Mohd Fuad Bin Razali ">
                    <h3>Mohd Fuad Bin Razali </h3>
                    <p>Rusher</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Mohammad Zul Hisham Bin Mohd Noor.jpg" alt="Mohammad Zul Hisham Bin Mohd Noor ">
                    <h3>Mohammad Zul Hisham Bin Mohd Noor </h3>
                    <p>Roamer / Multirole</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Muhammad Danial Bin Mohamad Fuad.jpg" alt="Muhammad Danial Bin Mohamad Fuad ">
                    <h3>Muhammad Danial Bin Mohamad Fuad</h3>
                    <p>Goldlaner</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            <div class="sport-card">
                    <img src="Faris Zakaria.jpg" alt="Faris Zakaria  ">
                    <h3>Faris Zakaria </h3>
                    <p>Jungler</p>
                    <p><strong>Status:</strong> Retirement 2018</p>
                </div>

             <div class="sport-card">
                    <img src="Muhammad Haqqullah Bin Ahmad Shahrul Zaman.jpg" alt="Muhammad Haqqullah Bin Ahmad Shahrul Zaman ">
                    <h3>Muhammad Haqqullah Bin Ahmad Shahrul Zaman </h3>
                    <p>Jungler</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

             <div class="sport-card">
                    <img src="Hazziq Danish Bin Mohamad Rizwan.jpg" alt="Hazziq Danish Bin Mohamad Rizwan">
                    <h3>Hazziq Danish Bin Mohamad Rizwan</h3>
                    <p>Midlaner</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

             <div class="sport-card">
                    <img src="Muhammad Qayyum Ariffin Bin Mohd Suhairi .jpg" alt="Muhammad Qayyum Ariffin Bin Mohd Suhairi ">
                    <h3>Muhammad Qayyum Ariffin Bin Mohd Suhairi </h3>
                    <p>Roamer</p>
                    <p><strong>Status:</strong> Active</p>
                </div>

            </div>
        `;
    }



}


function backToSportsMenu() {
    document.getElementById("sportsGridMenu").style.display = "grid";
    document.getElementById("sportContent").innerHTML = "";
}