import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Food } from './AllFoods';

const SingleFood: FC = () => {
  const [food, setFood] = useState<Food>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchFood() {
      const { data } = await axios.get(`http://localhost:5000/api/food/${id}`);
      setFood(data);
    }
    fetchFood();
  }, []);

  return (
    <section className='singlefood container'>
      <h1>Details About {food?.name}</h1>
      <h4 className='mt'>{food?.details}</h4>
    </section>
  );
};

export default SingleFood;
