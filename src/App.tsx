import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddFood from './pages/AddFood';
import AllFoods from './pages/AllFoods';
import DeleteFood from './pages/DeleteFood';
import EditFood from './pages/EditFood';
import Index from './pages/Index';
import SingleFood from './pages/SingleFood';
import Edit from './pages/Edit';

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/allfoods' element={<AllFoods />} />
        <Route path='/addfood' element={<AddFood />} />
        <Route path='/editfood' element={<EditFood />} />
        <Route path='/deletefood' element={<DeleteFood />} />
        <Route path='/food/:id' element={<SingleFood />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;
