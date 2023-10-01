import React, { useState } from 'react';
import './App.css';
import carsdata from './carsdata';
import CarList from './carList';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

function App() {
  const { page } = useParams();
  const initialPage = page ? parseInt(page, 10) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const carsPerPage = 6;

  // Calculate the range of cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;


  const [searchQuery, setSearchQuery] = useState('');
  const currentCars = carsdata.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div className="App">
<div className='search'>
        <input
        className='col-6 mx-4'
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      <div className='col-6 text-end'>
       <a href='#'>  <span className='mx-4'>Relevence <i class="fa-solid fa-angle-down"></i></span></a>
        <a href='#'> <span className='mx-4'>All brands  <i class="fa-solid fa-angle-down"></i></span></a>

      </div>
      </div>
      <CarList cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;