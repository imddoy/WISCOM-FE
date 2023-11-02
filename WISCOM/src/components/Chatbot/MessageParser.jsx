class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (['정보확인하기', '정보 확인'].includes(lowerCaseMessage)) {
      this.actionProvider.handleInfoOptions();
    } else if (['테스트하기', '테스트'].includes(lowerCaseMessage)) {
      this.actionProvider.handleTestOptions();
    }
  }
}

export default MessageParser;
