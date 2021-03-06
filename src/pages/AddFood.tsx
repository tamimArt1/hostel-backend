import axios from 'axios';
import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFood: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  async function addFood(e: any) {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const price = priceRef?.current?.value;
    const details = descRef?.current?.value;
    const newFood = { name, price, details };
    const { data }: any = axios.post(
      'http://localhost:5000/api/newfood',
      newFood
    );
    navigate('/');
  }

  return (
    <section className='addfood container'>
      <form>
        <input type='text' ref={nameRef} placeholder='Name:' />
        <br />
        <input className='mt' type='text' ref={priceRef} placeholder='Price:' />
        <br />
        <input
          className='mt'
          type='text'
          ref={descRef}
          placeholder='Details:'
        />
        <br />
        <button className='btn mt' onClick={(e) => addFood(e)}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddFood;
