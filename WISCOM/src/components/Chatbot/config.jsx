import { createChatBotMessage } from 'react-chatbot-kit';
import Header from './Header';

const config = (toggleChatbot) => ({
  initialMessages: [
    createChatBotMessage(
      '안녕하세요! 덕성여자대학교 컴퓨터공학전공 제 33회 WISCOM 홈페이지입니다. 아래에서 옵션을 선택해 주세요:',
      { widget: 'infoOptions' },
    ),
  ],

  widgets: [
    {
      widgetName: 'infoOptions',
      widgetFunc: (props) => (
        <div>
          <button onClick={() => props.actionProvider.handleInfoDetails()}>1. 정보 원해</button>
          <button onClick={() => props.actionProvider.handleTestDetails()}>2. 테스트 하기</button>
        </div>
      ),
    },
    {
      widgetName: 'infoDetails',
      widgetFunc: (props) => <div>1. 몇시까지 하나요 2. 어디서 하나요</div>,
    },
    {
      widgetName: 'testDetails',
      widgetFunc: (props) => <div>1. 어어 2. 머머ㅓ머 3. ...</div>,
    },
  ],
  customComponents: {
    header: () => <Header toggleChatbot={toggleChatbot} />,
  },
});

export default config;
