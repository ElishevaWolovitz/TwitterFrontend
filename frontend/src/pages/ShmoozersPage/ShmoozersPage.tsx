import Navbar from '../../components/Navbar';
import BasicList from '../../components/List/BasicList';

const mockData = [ 'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry' ];
const mockDataFunc = (item: string) => {return `${item}`;}
const ShmoozersPage = () => {
  return (
    <>
      <Navbar />
      <h1>Shmoozers Page</h1>
      <BasicList 
        items={mockData}
        printItems={mockDataFunc}
        />

    </>
  )
}

export { ShmoozersPage }
