import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Food } from './AllFoods';

interface CardProps {
  info: Food;
}

const DeleteFood: FC = (): JSX.Element => {
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
  async function handleClick() {
    const { data }: any = await axios.delete(
      `http://localhost:5000/api/food/${_id}`
    );
    alert('deleted');
  }
  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <h4 className='mt'>Price: ${price}</h4>
      <button className='btn mt' onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default DeleteFood;
