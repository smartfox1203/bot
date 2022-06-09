import React from "react";

import { BotProps } from "../Bot";
import { findAnswer } from "../../utils/answer";
import style from "./style.module.scss";

interface MessageProps extends BotProps {
  item: string;
}

const Message: React.FC<MessageProps> = ({ item, data }) => (
  <>
    {item && (
      <div className={style["wrapper"]}>
        <div className={style["question"]}>{item}</div>
        <div className={style["answer"]}>{findAnswer(item, data)}</div>
      </div>
    )}
  </>
);

export default Message;
