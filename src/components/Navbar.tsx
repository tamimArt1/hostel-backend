import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <section className='navbar container'>
      <h1>YoodaHostel</h1>
      <div className='links'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='link'>Home</span>
        </Link>
        <Link to='/allfoods' style={{ textDecoration: 'none' }}>
          <span className='link'>AllFoods</span>
        </Link>
        <Link to='/addfood' style={{ textDecoration: 'none' }}>
          <span className='link'>AddFood</span>
        </Link>
        <Link to='/editfood' style={{ textDecoration: 'none' }}>
          <span className='link'>EditFood</span>
        </Link>
        <Link to='/deletefood' style={{ textDecoration: 'none' }}>
          <span className='link'>DeleteFood</span>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
