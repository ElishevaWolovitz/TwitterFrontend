import Navbar from '../../components/Navbar';
import List from '../../components/List';

const mockShmoozers = [ 'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry' ];
const mockShmoozerFunc = (item: string) => {return `${item}`;}
const ShmoozersPage = () => {
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={mockShmoozers}
        printItem={mockShmoozerFunc}
        />

    </>
  )
}

export { ShmoozersPage }
