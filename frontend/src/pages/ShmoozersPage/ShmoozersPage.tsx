import Navbar from '../../components/Navbar';
import List from '../../components/List';

const mockData = [ 'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry' ];
const mockDataFunc = (item: string) => {return `${item}`;}
const ShmoozersPage = () => {
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <List 
        items={mockData}
        printItems={mockDataFunc}
        />

    </>
  )
}

export { ShmoozersPage }
