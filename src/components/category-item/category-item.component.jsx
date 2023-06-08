import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { ImageUrl, title} = category;
    return (
      <div class= 'category-continer'>
        <div
         class= 'background-image'
        style={{
          backgroundImage: `url(${ImageUrl})`,
        }}
        />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );

};

export default CategoryItem