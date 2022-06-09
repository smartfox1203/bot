import React, { ChangeEvent, useState } from "react";

import Message from "../Message";
import styles from "./style.module.scss";

export type MessageType = {
  userInput: string;
  response: string;
};

export interface BotProps {
  data: MessageType[];
  onDataChanged?: () => void;
}

const Bot: React.FC<BotProps> = ({ data, onDataChanged }) => {
  const [questions, setQuestions] = useState<string[]>([""]);
  const [input, setInput] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const question = e.target.value;
    setInput(question);
  };

  const sendQuestion = (event: React.SyntheticEvent) => {
    setQuestions((oldArray) => [...oldArray, input]);
    setInput("");
    if (onDataChanged) {
      onDataChanged();
    }
    event.preventDefault();
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["messagesBody"]}>
        {questions.map((item) => {
          return <Message item={item} data={data} />;
        })}
      </div>
      <form className={styles["form"]} onSubmit={(e) => sendQuestion(e)}>
        <input
          value={input}
          onChange={changeHandler}
          type="text"
          placeholder="Enter your message"
        />
        <button onClick={sendQuestion}>submit</button>
      </form>
    </div>
  );
};

export default Bot;
