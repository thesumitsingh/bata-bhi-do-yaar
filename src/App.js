// import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    1: {
      message: "What do you think about my profile?",
      submessage: "Hope you'll atleast give some feedback",
      left: "meh!",
      right: "it's acceptable",
      leftid: 1.5,
      rightid: 3
    },
    1.5: {
      message: "I could have been better",
      submessage: "I know",
      left: "Then try to improve yourself",
      right: "If you know, then why are you asking",
      leftid: 1.6,
      rightid: 1.6
    },
    1.6: {
      message: "Can you please tell me in detail",
      submessage: "I'm really excited for this job.",
      left: "Won't tell",
      right: "I'm too busy",
      leftid: 2,
      rightid: 2
    },
    2: {
      message: "It's okay, I mean I can't pressurise you",
      submessage: "Let's move ahead",
      left: "Okay",
      right: "Ufff! okay",
      leftid: 5,
      rightid: 5
    },
    3: {
      message: "Then why aren't you picking me for this job!!",
      submessage: "",
      left: "I haven't even rejected yet",
      right: "You're really bad",
      leftid: 4,
      rightid: 5
    },
    4: {
      message: "You haven't mailed me yet.",
      submessage: "What's stopping you from sending me a 'Join Us PLEASE!!' mail?",
      left: "I will bro",
      right: "Dude are you kidding me?",
      leftid: 4.5,
      rightid: 4.5
    },
    4.5: {
      message: "You have gotten quite far",
      submessage: "Most potential employers don't even spend a few seconds on a candidate",
      left: "Shut up",
      right: "I don't have time for this",
      leftid: 2,
      rightid: 2
    },
    5: {
      message: "Would you give me a chance to prove myself?",
      submessage: "",
      left: "Only if you pass the interview",
      right: "Go to hell",
      leftid: 0.1,
      rightid: 2
    },
    0.1: {
      message: "Soooo????",
      submessage: "Should we fix an interview?",
      left: "Yes",
      right: "Hell yes!",
      leftid: 0,
      rightid: 0
    },
    0: {
      message: "Let's connect on mail?",
      submessage: "",
      left: "Yes",
      right: "Ummm, okay",
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
              <a href={"mailto:thesumitsingh@gmail.com?subject=Your resume won my heart"}><button id="left">{data[id].left}</button></a>
              <a href={"mailto:thesumitsingh@gmail.com?subject=Your resume won my heart"}><button id="right">{data[id].right}</button></a>
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
