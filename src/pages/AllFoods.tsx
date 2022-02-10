import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface Food {
  _id: string;
  price: number;
  name: string;
  details: string;
}

interface CardProps {
  info: Food;
}

const AllFoods: FC = (): JSX.Element => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const { data } = await axios.get('http://localhost:5000/api/foods');
      setFoods(data);
    }
    fetchFoods();
  }, []);

  return (
    <section className='allfoods container'>
      {foods.map((food) => (
        <div key={food._id}>
          <Card info={food} />
        </div>
      ))}
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

export default AllFoods;
