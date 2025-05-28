import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { printKib, editKib, deleteKib } from './functions';
import { mockKibs } from './mockKibs';


const KibsPage = () => {
  return (
    <>
      <Navbar />
      <h1>Kibs Page</h1>
      <List 
        items={mockKibs}
        printItems={printKib}
        onEdit={editKib}
        onDelete={deleteKib}
        />
    </>
  )
}

export { KibsPage }