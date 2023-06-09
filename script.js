const articles = [
  {
    headline: "Kemunculan Babi Ngepet",
    source:
      "Pada video yang sempat viral di bawah, menunjukkan bahwa adanya babi ngepet yang berkeliaran dipemukiman warga, dan warga juga kerap kehilangan barang berharga mereka. setelah babi tersebut tertangkap warga meyakini bahwa babi tersebut adalah siluman. Menurut Kamu apakah berita dalam postingan ini hoaks atau fakta?",
    video: "content/babi ngepet.mp4",
    cek: "informasi ini hoaks",
    explain:
      "video di atas ternyata hoax (tidak benar). Karena babi yang di tangkap warga tersebut dibeli secara online dengan harga Rp 900.000, kemudian tokoh kampung daerah itu membuat sekenario seolah-olah itu adalah makhluk jadi-jadian.",
    answer: false,
  },
  {
    headline: "Anak Dikutuk Jadi Ikan Pari",
    source:
      "Pada vidio dibawah, terdapat suatu makhluk yang anggap dikutuk karena makhluk itu durhaka pada orang tuanya dan juga memiliki wajah yang mirip manusia. Menurut hal tersebut hoaks atau nyata?",
    video: "content/ikan pari.mp4",
    cek: "informasi ini hoaks",
    explain:
      "Wujudnya mungkin memang mirip seperti manusia, namun faktanya hewan itu bukanlah makhluk yang dikutuk seperti yang dikisahkan. Hewan viral itu adalah ikan pari jenis shovelnose Guitarfish",
    answer: false,
  },
  {
    headline: "Permen Narkoba",
    source:
      "Pada postingan tersebut, menjelaskan bahwa permen berbetuk seperti dot adalah bentuk baru dari narkoba dan sudah beredar di sekolah-sekolah SD. Menurut Kamu apakah postingan ini hoaks atau betul?",
    image: "content/permendot.jpg",
    cek: "informasi ini hoaks",
    explain:
      "Terkait hal tersebut, Kepala Badan Narkotika Nasional (BNN) Budi Waseso menyatakan, permen Dot negatif dari bahan yang mengandung narkotika. Permen Dot kami nyatakan negatif, clear dari bahan kimia narkotika. Ini sudah dibuktikan tiga instansi, BNN, Polisi dan Laboratorium POM, kata Budi Waseso di Kantor BNN, Jakarta Timur, Kamis (16/3/2017).",
    answer: false,
  },
  {
    headline: "Microchip di Vaksin Covid-19",
    source:
      "Pada gambar di bawah, akun Tik Tok @NETIZEN +62 membagikan postingan yang menyebut bahwa vaksin COVID-19 mengandung microchip untuk kepentingan pemerintah luar. Apakah hal tersebut merupakan berita fakta atau hoax?",
    image: "content/microchip.jpg",
    cek: "informasi ini hoaks",
    explain:
      "Berdasarkan penelusuran, klaim penanaman microchip ke tubuh seluruh penduduk dunia lewat vaksin Covid-19 adalah tidak benar. Disamping itu, tidak ada bukti yang menunjukkan bahwa vaksin ini akan memiliki chip Radio-Frequency-Identification (RFID).",
    answer: false,
  },
  {
    headline: "Beredarnya Telur Plastik",
    source:
      "pada video yang sempat viral di bawah, menunjukkan bahwa adanya selaput berwarna putih di cangkang telur tersebut yang dianggap plastik. Menurut Kamu apakah hal yang disampaikan dalam video tersebut memang benar?",
    video: "content/telur plastik.mp4",
    cek: "informasi ini hoaks",
    explain:
      "Bareskrim Polri menegaskan, video mengenai telur hoaks yang baru-baru saja beredar tidaklah benar. Dia mengatakan, informasi mengenai telur hoaks beredar di Indonesia adalah hoaks.",
    answer: false,
  },
  {
    headline: "Pesan Bantuan Sosial BPJS",
    source:
      "Foto di bawah menunjukkan pesan melalui WA (Whats App) yang meyebutkan BPJS memberi bantuan untuk biaya kesehatan sampai pembangunan rumah. Menurut kamu apakah informasi tersebut dapat dipercaya dan benar demikian?",
    image: "content/bantuanbpjs.jpg",
    cek: "informasi ini hoaks",
    explain:
      "Faktanya, BPJS Kesehatan melalui akun resminya menyatakan bahwa hal tersebut tidak benar atau hoaks. Sebab BPJS Kesehatan tidak pernah memberikan bantuan dana tunai kepada peserta JKN-KIS. Selain itu, BPJS Kesehatan juga mengimbau masyarakat agar selalu waspada terhadap segala informasi hoaks dan penipuan yang mengatasnamakan BPJS Kesehatan.",
    answer: false,
  },
  {
    headline: "Tabung Gas Berisi Air",
    source:
      "Pada vidio dibawah, terdapat dua orang pemuda yang membuang isi dari tabung gas 3 kg dan mereka berkata bahwa, Ini gas isinya air, bukan gas. ungkap pria dalam video. Menurut Kamu apakah pernyataan yang disampaikan dalam video tersebut dapat dipercaya dan kenyataan?",
    video: "content/LPG.mp4",
    cek: "informasi ini hoaks",
    explain:
      "Arti dari singkatan LPG adalah Liquefied Petroleum Gas, yang berarti gas yang dicairkan. Jadi isi dari LPG memang berbentuk seperti air. Dan tindakan dalam video merupakan hal yang berbahaya",
    answer: false,
  },
  {
    headline: "Timnas MLBB Women Juarai SEA Games 2023",
    source:
      "PBESI di akun instagramnya memposting berita yang berisi bahwa tim MLBB Women Indonesia berhfakta meraih medali emas di SEA Games 2023. Menurut Anda apakah postingan ini dapat dipercaya atau tidak?",
    image: "content/mlbb women.jpg",
    cek: "informasi ini fakta",
    explain:
      "Di SEA Games 2023, timnas MLBB Women Indonesia memeang berhasil membawa pulang medali emas usai mengalahkan timnas Filipina dalam laga Best of 5 (BO5) dengan skor tipis 3-2.",
    answer: true,
  },
  {
    headline: "Korupsi Menkominfo",
    source:
      "Postingan di bawah berisi berita yang mennyatakan bahwa Menkominfo Jhonny G PLate, menjadi tersangka atas tindak pidana kasus korupsi. Menurut anda apakah yang disampaikan dalam berita tersebut merupakan informasi fakta?",
    video: "content/jhonny yes papa.mp4",
    cek: "informasi ini fakta",
    explain:
      "Kejaksaan Agung resmi menetapkan Menteri Komunikasi dan Informatika Johnny Plate sebagai tersangka dugaan korupsi. Dia juga langsung ditahan selama 20 hari di Rutan Salemba Cabang Kejagung.",
    answer: true,
  },
  {
    headline: "Himbauan Krisis Pangan Akibat Elnino",
    source:
      "Video di bawah berita yang berisi himbauan Presiden Jokowi tentang resiko terjadinya kenaikan harga pangan akibat cuaca ekstream El Nino. Menurut anda apakah hal yang disampaikan memang nyata?",
    video: "content/elnino.mp4",
    cek: "informasi ini fakta",
    explain:
      "Hal yang disampaikan memang nyata. Badai Elnino memang dapat menyebabkan resiko krisis pangan di Indonesia.",
    answer: true,
  },
  {
    headline: "Pengrajin Sepatu Bordir dengan Omset Belasan Juta",
    source:
      "Pada portal berita lensaIndonesia.com memposting berita yang berisi bahwa seorang prngrajin sepatu dapat meraup untung Rp 15 juta per bulan hanya karena iseng. Menurut Anda apakah hal tersebut fakta?",
    image: "content/pengrajin sepatu.jpg",
    cek: "informasi ini fakta",
    explain:
      "Usaha Ida Yudha yang diteruskan oleh generasi kedua (Victoria) ini memang sudah menembus pasar dunia. Ida Yudha Kusuma Dewi sukses hasilkan ribuan sepatu bordir dan rajut dengan meraup omset rata-rata Rp. 15 juta / bulan.",
    answer: true,
  },
  {
    headline: "Perbaikan Jalan Lampung",
    source:
      "Pada portal berita news.republika.com memposting berita yang berisi pemerintahan Lampung gencar memperbaiki beberapa titik jalan rusak dikarenakan viral dan juga kunjungan Presiden jokowi.",
    image: "content/lampung.jpg",
    cek: "informasi ini fakta",
    explain:
      "Perbaikan jalan rusak di Lampung gencar dilakukan karena beredar info pada pekan tersebut, Presiden Joko Widodo (Jokowi) akan meninjau jalan rusak di Lampung, sehingga pemerintah daerah pun bergerak cepat melakukan perbaikan.",
    answer: true,
  },
  {
    headline: "Indonesia VS Argentina",
    source:
      "Video di bawah berisi informasi bahwa Timnas Indonesia akan bertanding melawan Timnas Argentina di Jakarta. Apakah hal tersebut dapat dipercaya dan merupakan informasi fakta? ",
    video: "content/argentina.mp4",
    cek: "informasi ini fakta",
    explain:
      "Timnas Indonesia memang akan bertanding dengan Timnas Indonesia di Jakarta pada 19 Juni 2023 dan telah dikonfirmasi oleh Menteri Olahraga Erick Thohir.",
    answer: true,
  },
  {
    headline: "Aldi Taher Nyaleg",
    source:
      "Video di bawah menunjukkan seorang artis yakni Aldi Taher mencalonkan dirinya sebagai calon legislatif dengan diusung oleh 2 partai ternama. Menurut anda apakah informasi tersebut memang benar?",
    video: "content/aldi taher.mp4",
    cek: "informasi ini fakta",
    explain:
      "Informasi tersebut memang benar. Aldi Taher sendiri telah mengonfirmasi hal tersebut dalam siaran langsung dirinya dengan salah satu acara saluran televisi TV One",
    answer: true,
  },
];

let userName = "";

function sendMessage() {
  const recipientNameInput = document.getElementById("recipient-name");
  const recipientName = recipientNameInput.value;

  if (recipientName.trim() === "") {
    // Jika nama kosong, tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
    alert("Please enter your name");
    return;
  }

  // Simpan nama pengguna dalam variabel global
  userName = recipientName;

  // Panggil fungsi continueToQuiz()
  continueToQuiz();

  // Tutup modal
  const modal = document.getElementById("exampleModal");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();

  document.getElementById("start").style.display = "none";
  document.getElementById("end").style.display = "block";
}

let score = 0;
let remainingIndexes = [];
const totall = 10;

// Function to initialize the remainingIndexes array with totall random indexes
function initializeRemainingIndexes() {
  const totalArticles = articles.length;
  const randomIndexes = [];

  while (randomIndexes.length < totall) {
    const randomIndex = Math.floor(Math.random() * totalArticles);

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  remainingIndexes = randomIndexes;
}

// Function to shuffle the remainingIndexes array
function shuffleRemainingIndexes() {
  for (let i = remainingIndexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remainingIndexes[i], remainingIndexes[j]] = [
      remainingIndexes[j],
      remainingIndexes[i],
    ];
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const divider = document.querySelector(".divider");

  if (window.scrollY > 0) {
    header.classList.add("shrink");
    divider.style.display = "block";
  } else {
    header.classList.remove("shrink");
    divider.style.display = "none";
  }
});

function cekScore() {
  if (score >= (totall * 80) / 100) {
    petasan();
  } else {
    snow();
  }
}

function displayArticle() {
  const headlineSection = document.getElementById("headline");
  const headerHeight = document.querySelector("header").offsetHeight;
  const offset = headlineSection.getBoundingClientRect().top - headerHeight;
  const explanationSection = document.getElementById("explanation");
  explanationSection.style.display = "none"; // Hide the explanation initially

  // Simpan posisi scroll saat ini sebelum mengubah konten headline
  const scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  // Mengubah konten headline
  const currentIndex = remainingIndexes[0];
  const currentArticle = articles[currentIndex];
  document.getElementById("headline").textContent = currentArticle.headline;
  document.getElementById("source").textContent = currentArticle.source;
  document.getElementById("explain").textContent = currentArticle.explain;
  document.getElementById("cek").textContent = currentArticle.cek;

  // Mengatur gambar atau video
  const imageElement = document.getElementById("image");
  const videoElement = document.getElementById("video");
  if (!videoElement.paused) {
    videoElement.pause();
  }
  if (currentArticle.video) {
    videoElement.src = currentArticle.video;
    videoElement.style.display = "block";
    imageElement.style.display = "none";
    videoElement.addEventListener("loadeddata", function () {
      // Menggulirkan halaman ke posisi headline yang baru setelah video selesai dimuat
      window.scrollTo({ top: scrollPosition + offset, behavior: "smooth" });
    });
  } else {
    imageElement.src = currentArticle.image;
    imageElement.style.display = "block";
    videoElement.style.display = "none";
    // Menggulirkan halaman ke posisi headline yang baru
    window.scrollTo({ top: scrollPosition + offset, behavior: "smooth" });
  }
}

// Function to update and display the score
function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

function continueToQuiz() {
  document.getElementById("continue-btn").style.display = "none";
  document.getElementById("quiz-buttons").style.display = "block";
  document.getElementById("score").style.display = "block";
  document.getElementById("progress-bar-container").style.display = "block";
  initializeRemainingIndexes();
  shuffleRemainingIndexes();
  displayArticle();
}

function nextArticle() {
  displayArticle();
  checkAnswerExecuted = false;
}

let checkAnswerExecuted = false;

function checkAnswer(userAnswer) {
  if (!checkAnswerExecuted) {
    const currentArticleIndex = remainingIndexes[0];
    const currentArticle = articles[currentArticleIndex];
    const isCorrect = userAnswer === currentArticle.answer;

    remainingIndexes.shift();
    shuffleRemainingIndexes();

    if (isCorrect) {
      score++;
      document.getElementById("cek").textContent =
        "✅Jawaban kamu benar, " + currentArticle.cek;
    } else {
      document.getElementById("cek").textContent =
        "❌Jawaban kamu salah, " + currentArticle.cek;
    }

    updateScore();

    const progress = Math.floor(
      ((totall - remainingIndexes.length) / totall) * 100
    );
    document.getElementById("progress-bar-fill").style.width = progress + "%";

    if (remainingIndexes.length === 0) {
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("end-btn").style.display = "block";
    }

    document.getElementById("explanation").style.display = "block";

    checkAnswerExecuted = true;
  }
}

function cekScore() {
  if (score >= (totall * 80) / 100) {
    petasan();
  } else {
    snow();
  }
}

function petasan() {
  document.getElementById("ucapan").textContent = "SELAMAT ATAS NILAI KAMU!!";
  document.getElementById("isi").textContent =
    "Selamat " +
    userName +
    ", kamu mendapat nilai " +
    score +
    " dalam quiz ini. Kamu adalah seseorang yang telah bisa membedakan berita hoax dan fakta serta dapat memanfaatkan informasi yang kamu dapat dari media sosial.";

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  var end = Date.now() + 15 * 1000;

  // go Buckeyes!
  var colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function snow() {
  document.getElementById("ucapan").textContent = "TETAP SEMANGAT!!";
  document.getElementById("isi").textContent =
    "Tetap semangat " +
    userName +
    ", nilai kamu saat ini masih sedikit kurang untuk lolos di quiz ini yaitu, " +
    score +
    " dalam quiz ini. Kamu masih harus belajar lagi agar bisa menjadi seseorang yang bisa membedakan berita hoax dan fakta serta dapat memanfaatkan informasi yang kamu dapat dari media sosial.";

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}
