import { useState } from "react";
import classes from "./LiveChat.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import TelegramIcon from "@mui/icons-material/Telegram";

function LiveChat() {
  const [isShow, setIsShow] = useState(false);
  function handlePopup() {
    setIsShow(!isShow);
  }
  return (
    <div>
      <div className={classes.PopupIcon} onClick={handlePopup}>
        <svg
          viewBox="0 0 28 28"
          alt=""
          className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
          fill="currentColor"
          height="20"
          width="20"
        >
          <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
        </svg>
      </div>
      {isShow && (
        <div className={classes.Popup}>
          <div className={classes.PopupHead}>
            <p className={classes.PopupTitle1}>Customer Support</p>
            <p className={classes.PopupTitle2}>Let's Chat App</p>
          </div>
          <div className={classes.PopupContent}></div>
          <div className={classes.PopupFooter}>
            <AccountCircleIcon sx={{ fontSize: 20 }} />
            <input type="text" placeholder="Enter Message!" />
            <AttachFileIcon sx={{ fontSize: 20 }} />
            <EmojiEmotionsIcon sx={{ fontSize: 20 }} />
            <TelegramIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveChat;
