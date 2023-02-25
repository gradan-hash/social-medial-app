import { format } from "timeago.js";
import "./message.css";
export default function Message({ message, own }) {
  return (
    <div className={own ? "messageown" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="assets/bitch3.jpg" alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
