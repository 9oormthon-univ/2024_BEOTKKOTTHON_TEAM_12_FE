import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
} from "components/index";
import * as S from "./style";
import { placeList, priceList, salesData } from "data/shared";
import Button from "components/atom/button-trade";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { transformPrice } from "utils/transformPrice";
import { useFormData, useFormDataActions, useShowImages } from "store/formData";
import { useEffect } from "react";
import { instance } from "apis";

const FormTrade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const formData = useFormData();
  const showImages = useShowImages();
  const { setFormData, receiveData, resetFormData } = useFormDataActions();

  const isEdit = location.pathname.includes("edit");

  useEffect(() => {
    resetFormData();

    if (isEdit) {
      // edit 페이지
      // 서버에서 데이터 받아와서 receivedData에 저장
      receiveData(salesData[Number(id) - 1]);
    }
  }, []);

  // const [files, setFiles] = useState<FileList | null>(null);
  const files = [
    "https://i.pinimg.com/564x/0c/d4/28/0cd428a2882445d366bd88df08a7b3b2.jpg",
    "https://i.pinimg.com/564x/0c/d4/28/0cd428a2882445d366bd88df08a7b3b2.jpg",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendformData = new FormData();

    // if (files) {
    //   //request로 보내야할 데이터를 formData에 넣어서 보냈다.
    //   for (let i = 0; i < files.length; i++) {
    //     sendformData.append('product_image', files[i]);
    //   }
    // }

    sendformData.append("product_image", files[0]);
    sendformData.append("product_name", formData.product_name);
    sendformData.append("category_name", formData.category);
    sendformData.append("product_status", formData.product_status);
    sendformData.append("product_content", formData.product_content);
    sendformData.append("price", formData.price.toString());
    sendformData.append("place", formData.place);

    const test = {
      product_image: files[0],
      product_name: formData.product_name,
      category_name: formData.category,
      product_status: formData.product_status,
      product_content: formData.product_content,
      price: formData.price,
      place: formData.place,
    };
    // for (const [key, value] of sendformData.entries()) {
    //   console.log(key, value);
    // }

    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // };

    try {
      await instance
        .post(`products/new/1`, test)
        // .post(`http://43.201.189.171:8080/api/products/new/1`, sendformData, config)
        .then(function (response) {
          // 성공한 경우 실행
          console.log("성공", response);
        });
    } catch (e) {
      console.log("실패", e);
      console.log(...sendformData);
    }

    console.log(formData);
    resetFormData();
    navigate("/product");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup $imglen={showImages.length}>
        <p className="label">
          이미지 업로드 (<span className="sub">{showImages.length}</span>/5)
        </p>
        <ListImage />
        {/* <ListImage setFiles={setFiles} /> */}
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input
            name="product_name"
            value={formData.product_name}
            onChange={(e) => setFormData("product_name", e.target.value)}
            placeholder="제목을 입력해주세요."
          />
        </BoxInput>
      </FormGroup>

      <FormGroup>
        <p className="label">분류</p>
        <ListTag isform={true} />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 상태</p>
        <FormRadio />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 설명</p>
        <S.TextArea
          name="product_content"
          value={formData.product_content}
          placeholder="상품에 대한 설명을 써주세요."
          onChange={(e) => setFormData("product_content", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">판매 가격</p>
        <S.InputNum>
          <input
            name="price"
            value={transformPrice(formData.price as number)}
            onChange={(e) =>
              setFormData("price", Number(e.target.value.replace(/,/g, "")))
            }
          />
          <p>원</p>
        </S.InputNum>
        <ListTradeForm list={priceList} type={"price"} />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput>
          <input
            name="place"
            value={formData.place}
            placeholder="위치를 입력해주세요."
            onChange={(e) => setFormData("place", e.target.value)}
          />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm list={placeList} type={"place"} />
      </FormGroup>

      {isEdit ? (
        <Button color="primary">수정 완료</Button>
      ) : (
        <Button>등록하기</Button>
      )}
    </form>
  );
};

export default FormTrade;
