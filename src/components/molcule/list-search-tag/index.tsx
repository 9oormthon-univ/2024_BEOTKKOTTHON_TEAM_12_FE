import { searches } from 'src/data/shared';
import { BoxTag, Tag } from '@components/index';
import close from '@assets/icons/close_small.svg';

const ListSearchTag = () => {
  const handleClick = (search: string) => {
    console.log(search);
  };

  return (
    <BoxTag>
      {searches.map((search, index) => (
        <Tag onClick={() => handleClick(search)} key={index}>
          <p>{search}</p>
          <div className="close">
            <img src={close} alt="close" />
          </div>
        </Tag>
      ))}
    </BoxTag>
  );
};

export default ListSearchTag;
