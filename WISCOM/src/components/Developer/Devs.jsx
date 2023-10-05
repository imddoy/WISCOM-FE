import * as D from './DevsStyle';
import DeveloperProfile from '../Project/DeveloperProfile.jsx';

import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';

/* 슨생님덜 지송합니다.. 일단 저의 구현 목표를 설명해보자면...
[ for 색상 랜덤을 위해 ]
backgroundImages1 에서 순서 랜덤으로 3개 뽑아서 정렬하고 (25%씩, 75%)
backgroundImages2 에서 svg 하나 랜덤하게 추출해서 4번째에 넣어서
랜덤 색상의 4개가 svg가 들어있는 한 줄을 구현하려고 하였으나...
아직 방법을 찾지 못햇나이다 ㅠㅠ....
오기 생겨서 계속 찾는 중.. 꼭 구현하고 싶슴다...

DeveloperProfile은 만들어져있는 거 가져다 썼슴다.. 감사함다...
*/

const backgroundImages1 = [BackGreen, BackBlue, BackYellow];
const backgroundImages2 = [BackGreen, BackBlue, BackYellow];

const Developer = () => {
    return (
      <D.DevWrapper>
        <D.Box>
        {backgroundImages1.map((bg, index) => (
          <DeveloperProfile key={index} bg={bg} />
        ))}
        <div>
            backgroundImages2.slice(random())
        </div>
        </D.Box>
      </D.DevWrapper>
    );
  };
  
  export default Developer;