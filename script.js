   const moodBtn = document.getElementById("moodBtn");
    const sec1 = document.getElementById("sec1");
    const sec2 = document.getElementById("sec2");
    const wrapper = document.getElementById("wrapper");
    const rsvpbtn = document.querySelector('.rsvp-btn');

    function openCard() {
      sec1.classList.add("classLeft");
      sec2.classList.add("classRight");

      sec2.addEventListener("animationend", () => {
        wrapper.innerHTML = `
        <!-- FONT AWESOME & GOOGLE FONTS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">

<div class="newContent">
  <h1 class="fade-in"><i class="fas fa-ring"></i> Bilal & Imagination's Royal Wedding Celebration</h1>

  <div class="leftBox fade-in-left">
    <p><i class="fas fa-map-marker-alt"></i> <strong>Venue:</strong> Royal Palm Garden, Lahore</p>
    <p><i class="fas fa-calendar-alt"></i> <strong>Date:</strong> <span class="highlight">Monday, July 28, 2025</span></p>
    <p><i class="fas fa-clock"></i> <strong>Time:</strong> 7:00 PM Sharp</p>
  </div>

  <div class="centerBox fade-in-up">
 <img 
  src="./bannerProject.png" 
  alt="Wedding Card" 
   />
      <p>
      <i class="fas fa-heart"></i> A magical evening awaits as we unite in love and tradition.<br />
      Let’s begin forever with love, elegance & joy.
    </p>
    <p class="follow" ><i class="fas fa-camera-retro"></i> <strong>Follow Our Journey:</strong><br />
      <span class="highlight">@bilal.bilal.wedding</span>
    </p>
  </div>

  <div class="rightBox fade-in-right">
    <p><i class="fas fa-phone"></i> <strong>Contact:</strong> +92 300 1234567</p>
    <p><i class="fas fa-user-tie"></i> <strong>Dress Code:</strong> Traditional Elegance / Formal</p>
    <p><i class="fas fa-hashtag"></i> <strong>Tag Moments:</strong>  #BilalAndBilal2025</p>
    <p><i class="fas fa-users"></i> <strong>Expected Guests:</strong>  200+ Family & Friends</p>
  </div>

  <div class="bottomBox fade-in">
    <p><i class="fas fa-gift"></i> Your presence is a blessing — join us to create cherished memories. 💖</p>
    <a href="#" class="rsvp-btn"><i class="fas fa-envelope"></i> Accept</a>
  </div>
</div>
        `;
      }, { once: true });
    }


    moodBtn.addEventListener("click", ()=>{
      openCard();
      document.querySelector('.notification').style.display = 'none';
    });

    setTimeout(() => {
      if (!sec1.classList.contains("classLeft")) openCard();
      document.querySelector('.notification').style.display = 'none';
    }, 5000);
// End OF JavaScript......FOr Card Functionality......!!!!!!!!!! Hope You EnJoy