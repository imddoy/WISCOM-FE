class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleInfoOptions = () => {
    const message = this.createChatbotMessage('정보를 선택하세요:', { widget: 'infoOptions' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleTestOptions = () => {
    const message = this.createChatbotMessage('테스트를 선택하세요:', { widget: 'testOptions' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleInfoDetails = () => {
    const message = this.createChatbotMessage('다음 정보를 확인하세요:', { widget: 'infoDetails' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };

  handleTestDetails = () => {
    const message = this.createChatbotMessage('테스트 옵션을 선택하세요:', { widget: 'testDetails' });
    this.setState((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
  };
}

export default ActionProvider;
