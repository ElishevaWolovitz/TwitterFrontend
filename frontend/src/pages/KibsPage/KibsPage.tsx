import Navbar from '../../components/Navbar';
import List from '../../components/List';


const mockKibs = [ 'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'pineapple', 'strawberry' ];
const mockKibFunc = (item: string) => {return `${item}`;}


const KibsPage = () => {
  const handleEdit = (item: string) => {
    console.log(`Edit item: ${item}`); 
  }
  const handleDelete = (item: string) => {
    console.log(`Delete item: ${item}`);
  }; 
  return (
    <>
      <Navbar />
      <h1>Kibs Page</h1>
      <List 
        items={mockKibs}
        printItems={mockKibFunc}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
    </>
  )
}

export { KibsPage }