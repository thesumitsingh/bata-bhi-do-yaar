// import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    1: {
      message: "Kaisi thi date yaar bata do",
      submessage: "Thoda feedback to de hi do",
      left: "meh!",
      right: "theek thaak",
      leftid: 1.5,
      rightid: 3
    },
    1.5: {
      message: "Thoda boring to hoon hi mai",
      submessage: "I know",
      left: "To interesting bano thoda",
      right: "Jab pata hai to kyon poocha",
      leftid: 1.6,
      rightid: 1.6
    },
    1.6: {
      message: "Thoda specific me batao kya improve karoon",
      submessage: "Pehli baar date pe gaya tha. Kuchh to gadbad hona hi tha.",
      left: "Nahi bataungi",
      right: "Mai bahut busy hoon",
      leftid: 2,
      rightid: 2
    },
    2: {
      message: "Chalo theek hai",
      submessage: "Aage badhte hain",
      left: "Okay",
      right: "Ufff! okay",
      leftid: 5,
      rightid: 5
    },
    3: {
      message: "Tab phir ghost kyon kar diya",
      submessage: "",
      left: "Maine kab kiya",
      right: "Tum boring ho",
      leftid: 4,
      rightid: 5
    },
    4: {
      message: "Mere message ka reply nahi kiya",
      submessage: "Insta pe upar wala message dekho",
      left: "Oh achha",
      right: "Are mai busy thi",
      leftid: 4.5,
      rightid: 4.5
    },
    4.5: {
      message: "Insta story daalne ke liye time tha",
      submessage: "Haan dekh liya maine flight wala status",
      left: "Shut up",
      right: "Tumhare message ke liye time nahi tha",
      leftid: 2,
      rightid: 2
    },
    5: {
      message: "Ek chance aur milega?",
      submessage: "",
      left: "Only if you take me to a bar/club",
      right: "Bhaad me ja",
      leftid: 0.1,
      rightid: 2
    },
    0.1: {
      message: "Nashe karne hain?",
      submessage: "",
      left: "Yes",
      right: "Hell yes!",
      leftid: 0,
      rightid: 0
    },
    0: {
      message: "WhatsApp pe connect karen?",
      submessage: "",
      left: "Yes",
      right: "Are yaar! chalo theek hai",
      leftid: "whatsapp",
      rightid: "whatsapp",
      whatsapptext: "desperate ladkon wali harkate kar rahe ho"
    },
  }
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get('id') ? params.get('id') : 1;
  // var id = location.search.id;
  // if (id == null) id = 1;
  // idn=Number(id);
  console.log(data[id]);
  return (
    <div className="App">
      <div class="card">
        <div class="info__padding">
          <h3>{data[id].message}</h3>
          <p>
            {data[id].submessage ? data[id].submessage : ""}
          </p>
        </div>
        <div class="button__group">
          {data[id].leftid === "whatsapp" ?
            <>
              <a href={"https://wa.me/918291474891?text=desperare ladkon wali harkate kar rahe ho"}><button id="left">{data[id].left}</button></a>
              <a href={"https://wa.me/918291474891?text=dobara pareshan kiya to block kar dungi"}><button id="right">{data[id].right}</button></a>
            </>

            :
            <>
              <a href={"?id=" + data[id].leftid}><button id="left">{data[id].left}</button></a>
              <a href={"?id=" + data[id].rightid}><button id="right">{data[id].right}</button></a>
            </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
