import Navbar from '../../components/Navbar';
import List from '../../components/List';
import SearchBar from '../../components/SearchBar';
import { printKib, editKib, deleteKib, filterKibs } from './functions';
import { mockKibs } from './mockKibs';


const KibsPage = () => {
  return (
    <>
      <Navbar />
      <h1>Kibs Page</h1>
      <SearchBar 
        items={mockKibs}
        filterItems={filterKibs}
        printItem={printKib}/>
      <List 
        items={mockKibs}
        printItem={printKib}
        onEdit={editKib}
        onDelete={deleteKib}
        />
    </>
  )
}

export { KibsPage }