import axios, { AxiosResponse } from 'axios';
import {
  MouseEvent,
  FC,
  ReactElement,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Food } from './AllFoods';

interface IEditResponse {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId?: any;
  upsertedCount: number;
  matchedCount: number;
}

const EditFood: FC = (): ReactElement => {
  const { id } = useParams();
  const [food, setFood] = useState<Food>();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFood() {
      const { data }: AxiosResponse<Food> = await axios.get(
        `http://localhost:5000/api/food/${id}`
      );
      setFood(data);
    }
    fetchFood();
  }, []);

  async function editFood(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const price = priceRef?.current?.value;
    const details = descRef?.current?.value;
    const newFood = { name, price, details };
    const { data }: AxiosResponse<IEditResponse> = await axios.put(
      `http://localhost:5000/api/food/${id}`,
      newFood
    );
    if (nameRef !== null && nameRef.current !== null) {
      nameRef.current.value = '';
    }
    if (priceRef !== null && priceRef.current !== null) {
      priceRef.current.value = '';
    }
    if (descRef !== null && descRef.current !== null) {
      descRef.current.value = '';
    }
    if (data.acknowledged) {
      navigate('/editfood');
    }
  }

  return (
    <section className='addfood container'>
      <form>
        <input type='text' ref={nameRef} placeholder={food?.name} />
        <br />
        <input
          className='mt'
          type='text'
          ref={priceRef}
          placeholder={String(food?.price)}
        />
        <br />
        <input
          className='mt'
          type='text'
          ref={descRef}
          placeholder={food?.details}
        />
        <br />
        <button className='btn mt' onClick={editFood}>
          Edit
        </button>
      </form>
    </section>
  );
};

export default EditFood;
