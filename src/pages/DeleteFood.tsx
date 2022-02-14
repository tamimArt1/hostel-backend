import { FC, useState, useEffect, ReactElement } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Food } from './AllFoods';

interface CardProps {
  info: Food;
}

interface AxiosType {
  acknowledged: boolean;
  deletedCount: number;
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

const Card: FC<CardProps> = ({ info }): ReactElement => {
  const { name, price, _id } = info;
  async function handleClick() {
    const { data }: AxiosResponse<AxiosType> = await axios.delete(
      `http://localhost:5000/api/food/${_id}`
    );
    if (data.acknowledged === true) {
      alert('deleted');
    }
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
