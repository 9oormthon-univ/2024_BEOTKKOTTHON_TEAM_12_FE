import { searches } from 'src/data/shared';
import { BoxTag, Tag } from '@components/index';
import close from '@assets/icons/close_small.svg';
import { useSearchActions } from 'src/store/search';

const ListSearchTag = () => {
  const { changeSearchData } = useSearchActions();

  const handleClickClose = () => {
    // 데이터에서 삭제하고 다시 올리기
  };

  return (
    <BoxTag>
      {searches.map((search, index) => (
        <Tag onClick={() => changeSearchData(search)} key={index}>
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
