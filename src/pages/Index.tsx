import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Food } from './AllFoods';

interface CardProps {
  info: Food;
}

const Index: FC = (): JSX.Element => {
  const [skip, setSkip] = useState<number>(0);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const { data } = await axios.get(
        `http://localhost:5000/api/newfoods?skip=${skip}`
      );
      setFoods(data);
    }
    fetchFoods();
  }, [skip]);

  return (
    <section className='index container'>
      <h1>Latest 6 food</h1>
      <div className='grid mt'>
        {foods.map((food) => (
          <div key={food._id}>
            <Card info={food} />
          </div>
        ))}
      </div>
      {skip > 0 && (
        <button
          style={{ marginRight: '13px' }}
          className='btn'
          onClick={() => setSkip((p) => p - 1)}
        >
          Previous
        </button>
      )}
      <button className='btn mt' onClick={() => setSkip((p) => p + 1)}>
        Next
      </button>
    </section>
  );
};

const Card: FC<CardProps> = ({ info }): JSX.Element => {
  const { name, price, _id } = info;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/food/${_id}`);
  }
  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <h4 className='mt'>Price: ${price}</h4>
      <button className='btn mt' onClick={handleClick}>
        Details
      </button>
    </div>
  );
};

export default Index;
