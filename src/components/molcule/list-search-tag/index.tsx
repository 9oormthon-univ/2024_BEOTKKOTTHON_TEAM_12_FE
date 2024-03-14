import { searches } from 'src/data/shared';
import { BoxTag, Tag } from '@components/index';
import close from '@assets/icons/close_small.svg';

const ListSearchTag = () => {
  const handleClickSearch = (search: string) => {
    console.log(search);
  };

  const handleClickClose = () => {
    // 데이터에서 삭제하고 다시 올리기
  };

  return (
    <BoxTag>
      {searches.map((search, index) => (
        <Tag onClick={() => handleClickSearch(search)} key={index}>
          <p>{search}</p>
          <div className="close" onClick={handleClickClose}>
            <img src={close} alt="close" />
          </div>
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListSearchTag;
