import axios from 'axios';
import { FC, useRef } from 'react';
import { useParams } from 'react-router-dom';

const AddFood: FC = (): JSX.Element => {
  const { id } = useParams();
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  async function editFood(e: any) {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const price = priceRef?.current?.value;
    const details = descRef?.current?.value;
    const newFood = { name, price, details };
    const { data }: any = axios.patch(
      `http://localhost:5000/api/food/${id}`,
      newFood
    );
    alert('edited');
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
        <button className='btn mt' onClick={(e) => editFood(e)}>
          Edit
        </button>
      </form>
    </section>
  );
};

export default AddFood;
