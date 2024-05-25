import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import userImage from 'assets/images/wear_profile.svg';
import defaultImg from 'assets/images/product-default-img.png';
import {
  BoxKebabList,
  Button,
  ButtonBack,
  ChatInput,
  ChatScreen,
  Header,
  ProductInfo,
  TextLabel,
} from 'components/index';
import kebab from 'assets/icons/kebab.svg';
import productImage from 'assets/images/product-default-img.png';
import { useEffect, useRef, useState } from 'react';
import { levelUrlArr } from 'utils/levelUrlArr';
import { instance } from 'apis';

import SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

interface Message {
  id: number;
  chat_rood_id: number;
  message: string | File;
  timestamp: string;
  isMine: boolean;
  profilePic: string;
}

interface ProductType {
  id: number;
  price: number;
  product_name: string;
  product_image: string;
}

interface CustomerInfo {
  id: number;
  nickname: string;
  level: string;
  profile_image: string;
}

const ChatDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, chatRoomId, isWear } = location.state;
  console.log(chatRoomId, productId);
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType>({
    id: productId,
    price: 15000,
    product_name: 'string',
    product_image: productImage,
  });
  const [otherUser, setOtherUser] = useState<CustomerInfo>({
    id: 1,
    nickname: '김스옹',
    level: '씨앗',
    profile_image: defaultImg,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  const curRoomId = 36;

  const WearMessage: Message[] = [
    {
      id: 1,
      chat_rood_id: 1,
      message:
        '안녕하세요, 등록하신 <ZARA 코트> 상품이\n 5일 동안 거래되지 않고 있어요.\n\n 웨어와 함께  필요한 곳에 기부하는건 어떨까요? 아래 기부하기 버튼을 누르시면 기부절차와 방법을 알려드릴게요🌱',
      timestamp: '10:00',
      isMine: false,
      profilePic: userImage,
    },
  ];
  return (
    <>
      {isWear ? (
        <div>
          {' '}
          <S.Container>
            <S.ChatFixedHeader>
              <Header>
                <ButtonBack className="left" />
                <S.NickNameContainer>
                  <TextLabel size={18} $weight={700}>
                    팀 WEAR
                  </TextLabel>
                </S.NickNameContainer>
              </Header>
            </S.ChatFixedHeader>
            <S.ChatScreenFixed>
              <ChatScreen messages={WearMessage} userImage={userImage} />
            </S.ChatScreenFixed>

            <S.FooterFixed>
              <Button
                width={'100%'}
                $padding={'16px 20px'}
                children={'기부하기'}
                $bgcolor={'var(--green-primary)'}
                color={'white'}
                handleOnClick={() => navigate('/donation')}
              />
            </S.FooterFixed>
          </S.Container>
        </div> // isWear가 true일 때 렌더링되는 내용
      ) : (
        <S.Container>
          <S.ChatFixedHeader>
            <Header>
              <ButtonBack className="left" />
              <S.NickNameContainer>
                <TextLabel size={18} $weight={700}>
                  {otherUser.nickname}
                </TextLabel>
                <img src={levelUrlArr(otherUser.level)} alt="level" />
              </S.NickNameContainer>
              <img
                src={kebab}
                className="right"
                alt="btn-back"
                onClick={() => {
                  setOpenKebab(() => !openKebab);
                  console.log('openKebab:', openKebab);
                }}
              />
            </Header>
            {openKebab && (
              <BoxKebabList>
                <p>차단하기</p>
                <p className="red">신고하기</p>
              </BoxKebabList>
            )}
            <ProductInfo
              imageUrl={product.product_image ? product.product_image : defaultImg}
              productName={product.product_name}
              price={product.price}
              onClick={() => {
                console.log('click');
              }}
            />
          </S.ChatFixedHeader>

          <S.Content>
            <S.SectionScroll>
              <ChatScreen messages={messages} userImage={otherUser.profile_image} />
            </S.SectionScroll>
          </S.Content>
          {/* <ChatInput handleImageChange={handleImageChange} handleSend={handleSend} /> */}
        </S.Container>
      )}
    </>
  );
};
export default ChatDetail;
