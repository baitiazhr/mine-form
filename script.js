// Fungsi untuk berpindah ke pertanyaan selanjutnya
function nextQuestion(questionNumber) {
    const current = document.querySelector('.question.active');
    current.classList.remove('active');
  
    const next = document.getElementById(`question-${questionNumber}`);
    next.classList.add('active');
  }
  
  // Fungsi untuk menampilkan respon jika siap jadi support system
  function showResponse(response) {
    const responseDiv = document.getElementById('summary');
    const responseText = document.getElementById('summary-text');
    
    if (response === 'Not ready 😢') {
      responseText.innerHTML = "It's okay, maybe it's not the right time yet... 😔";
    } else {
      responseText.innerHTML = "Yay! You're ready to be my support system! 🥰";
    }
  
    const current = document.querySelector('.question.active');
    current.classList.remove('active');
    responseDiv.classList.add('active');
  }
  
  // Fungsi untuk menampilkan ringkasan jawaban dan kirim ke Google Form
  function showSummary() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const idealType = document.getElementById('idealType').value;
    const rate = document.getElementById('rate').value;
    const hope = document.getElementById('hope').value;
  
    // URL Google Form (ganti sesuai link form kamu)
    const googleFormURL = "https://forms.gle/aSzcVbZdyEn1J6Mm7_URL";  // Ganti dengan URL Google Form kamu
  
    // Data untuk dikirim ke Google Form
    const formData = new FormData();
    formData.append("entry.XXXXXX", name);         // Ganti XXXXXX dengan ID dari setiap pertanyaan
    formData.append("entry.YYYYYY", description);
    formData.append("entry.ZZZZZZ", idealType);
    formData.append("entry.AAAAAA", rate);
    formData.append("entry.BBBBBB", hope);
  
    // Kirim data ke Google Form
    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        // Tampilkan jawaban di halaman web
        const summaryText = `
          Name: ${name} <br>
          Description: ${description} <br>
          Ideal Type of Girl: ${idealType} <br>
          Readiness Rate: ${rate}/10 <br>
          Message: ${hope}
        `;
        document.getElementById('summary-text').innerHTML = summaryText;
  
        const current = document.querySelector('.question.active');
        current.classList.remove('active');
  
        const summaryDiv = document.getElementById('summary');
        summaryDiv.classList.add('active');
      })
      .catch((error) => {
        console.error("Error submitting the form: ", error);
      });
  }
  
  // Fungsi untuk memulai ulang form
  function restart() {
    const current = document.querySelector('.question.active');
    current.classList.remove('active');
  
    const firstQuestion = document.getElementById('question-1');
    firstQuestion.classList.add('active');
  }  