import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { mockShmoozers } from './mockShmoozers';
import { printShmoozer } from './functions';


const ShmoozersPage = () => {
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
