import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { mockShmoozers } from './mockShmoozers';
import { printShmoozer } from './functions';
import type { ShmoozerPageProps } from './types';

//Q:Did i have to make type for ShmoozerPageProp here instead of the api just being of type string? 
const ShmoozersPage = ({api}: ShmoozerPageProps) => {
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={mockShmoozers}
        printItem={printShmoozer}
        />

    </>
  )
}

export { ShmoozersPage }
