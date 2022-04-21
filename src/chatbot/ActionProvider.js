class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello");
      this.addMessageToState(message);
    };
  
    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
          "enter your name",
        {
          widget: "BOOKINGS",
        }
      );
  
      this.addMessageToState(message);
    };
    handleContact=()=>{
      const message2= this.createChatBotMessage(
        "contact us on ph - 8999448484  , email=vedprakash19982003@gmail.com",
        {
          widget: "OUR CONTACT"
        }
      );
      this.addMessageToState(message2);
    }
  
    addMessageToState = (message2) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message2],
      }));
    };
    
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;