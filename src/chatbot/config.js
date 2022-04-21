import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "MASTER BOT",
  initialMessages: [
    createChatBotMessage(`Hello,Let me help you`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "BOOKINGS",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
  //          question: "ENTER YOUR NAME",
           // answer:
             // "enter your name",
           // id: 1,
          },
          {
    //        question: "ENTER YOUR EMAIL",
           // answer:
             // "en",
            id: 2,
          },
        ],
      },
    },
  {  widgetName: "OUR CONTACT",
    widgetFunc: (props) => <Quiz {...props} />,
    props: {
      questions: [
        {
     //     question: "CONATCT US VIA PH=5686898484 , email=vedprakash19982003@gmail.com",
         // answer:
           // "enter your name",
          id: 1,
        },
        {
       //  question: "ENTER YOUR EMAIL",
         // answer:
         //id:2,
        },
      ],
    },
  }
  ],
};

export default config;