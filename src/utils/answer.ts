import { MessageType } from "../components/Bot";

export const findAnswer = (question:string, data:MessageType[]) => {
    const answer = data.find((answer:MessageType) => answer.userInput === question);
    return answer?.response || "I don't know how to say";
}
