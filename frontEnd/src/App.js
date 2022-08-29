import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation/Navigation.components';
import Directory from './components/directory/Directory.component';
import Shop from './pages/shop/Shop.components'
import Collections from './pages/Collections.component';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />} >
          <Route path="/" element={<Directory />} />
          <Route path="/all/shop" element={<Shop />} />
          <Route path="/shop/:categoryName" element={<Collections />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;

