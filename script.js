check = 0;
b = 1000;

const message1 = document.getElementById("msg1");
const message2 = document.getElementById("msg2");
const count1 = document.getElementById("count1");
const msg = document.querySelector('.message');
function changeword(check, a, msg1, msg2) {
  if (check == a) {
    msg.classList.remove('show');
    msg.classList.add('notshow');
    setTimeout(function() {
      message1.textContent = msg1;
      message2.textContent = msg2;
      msg.classList.remove('notshow');
      msg.classList.add('show');
    }, 200)
  }
}
document.getElementById('surpriseBtn').addEventListener('click', function() {
  const music = document.getElementById('bgMusic');
  music.play();
  music.volume = 0.5;
  const sound = document.getElementById('clickSound');
  sound.play(); // เล่นเสียงเมื่อกดปุ่ม
  check += 1;
  count1.textContent = check + "/" + b + " ครั้ง";
  changeword(check, 1, "กดทำมัย", "")
  changeword(check, 10, "ใครอะ", "เพง : เพงเองจ้า")
  changeword(check, 20, "เคร แต่ไม่อยากรู้จักอะ", "เพง : แลวแต่มึง")
  changeword(check, 30, "หยอก 55565", "เพง : 53453275684")
  changeword(check, 40, "เพง : วันนี้วันไร", "วันเสาร์")
  changeword(check, 50, "เพง : เค เลิกคุยว่ะ", "อ้อ วันเกิดๆ 5555546")
  changeword(check, 60, "แฮปธรรมดาเดี๋ยวมึงไม่จำ", "กดให้ครบ 1000 รอบสิ้ เดี๋ยวแฮป")
  changeword(check, 70, "เพง : ได้เลย", "(อย่าหนี กดให้ครบ 55556656)")
  changeword(check, 80, "สุ้ๆ เหลืออีกแค่ 900 กว่ารอบเอง", " ")
  changeword(check, 100,"เหนื่อยยัง","เพง : ยังเลย แต่นิ้วจะหักละ")
  changeword(check, 110,"65756765456","งั้นเดี๋ยวลดจำนวนครั้งให้เอาไหม")
  changeword(check, 120,"ทำไมมึงไม่ตอบเพงง 555656","เลิกดองแชทดิ้ งอนว่ะ")
  changeword(check, 150,"เพง : กุตอบไม่ได้ 34355436","ไม่เชื่ออ่ะ สรุปจะให้ลดให้ไหม45654654")
  changeword(check, 160,"ตอบหน่อย อย่าดอง เดี๋ยวไม่ให้ค่าขนมนะ " ,"เพง : ลดให้หน่อย ไอ่สัด")
  changeword(check, 170,"อย่ารุนแรงดิ้เพง 55656566" ,"เพง : มึงเปนคนพิมพ์ให้กุหนิ 56565655")
  changeword(check, 180,"อ่อ 556565" ,"ลดเหลือ 300 พอละกัน")
  if(check == 180){
    b = 300;
  }
  changeword(check, 190,"สุ้ๆเว้ย" ,"ใกล้แระ ยาวไปเรย")
  changeword(check, 270,"ใกล้ๆ" ,"")
  changeword(check, 280,"เหลืออีกแค่ 20 รอบ" ,"ชะลอๆหน่อย")
  changeword(check, 290,"อีก 10" ,"นิดเดวๆ")
  changeword(check, 295,"5" ,"")
  changeword(check, 296,"4" ,"")
  changeword(check, 297,"3" ,"")
  changeword(check, 298,"2" ,"")
  changeword(check, 299,"1" ,"")
  if(check == 299){
    b = 355;
  }
  changeword(check, 300,"🎉SSWG แฮปๆ ขอให้ร่ำๆรวยๆ🎉" ,"มีผัวหล่อๆดูแลมึงได้ 565656 การงานมั่นคง สาธุ 10 ครั้ง")
  changeword(check, 310,"หยุดกดๆ" ,"มันไม่มีไรแล้ว ไม่เชื่อก็ลอง")
  changeword(check, 320,"กดอีกก็ไม่มีไร" ,"")
  changeword(check, 350,"เครมี ก้ได้" ,"")
  changeword(check, 355,"แค่จะบอกว่าจิงๆกุจำวันเกิดมึงไม่ได้ รุ้แค่ว่าอายุน้อยกว่า 🙏🥳" ,"วันหลังจะใส่ใจมากกว่านี้นะค่าบ 56566565")
  if(check==355){
    check = 354;
  }
});

const container = document.querySelector('.balloon-container');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // สุ่มตำแหน่ง X และสี
  balloon.style.left = Math.random() * 100 + '%';
  balloon.style.backgroundColor = getRandomColor();

  container.appendChild(balloon);

  // เอาออกเมื่อมันลอยพ้นจอ
  setTimeout(() => {
    balloon.remove();
  }, 6000); // ต้องตรงกับเวลาของ animation
}

function getRandomColor() {
  const colors = ['#ff6b81', '#feca57', '#48dbfb', '#1dd1a1', '#5f27cd'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ปล่อยลูกโป่งทุก 500ms
setInterval(createBalloon, 500);
