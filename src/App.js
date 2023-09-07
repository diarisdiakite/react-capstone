import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
// import NavBar from './components/NavBar';
import Countries from './features/companies/Countries';
// import Map from './features/maps/Map';
// CountryMap from './features/maps/CountryMap';
import Companies from './features/companies/Companies';
import Sectors from './features/companies/Sectors';
import Country from './features/companies/Country';
import Company from './features/companies/Company';
import Sector from './features/companies/Sector';
import UsersList from './features/users/UsersList';
import User from './features/users/User';
import NotFoundPage from './components/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import './assets/css/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        {' '}
        <Route path="/companies">
          <Route index element={<Companies />} />
          <Route path=":companySymbol" element={<Company />} />
        </Route>
        <Route path="/countries">
          <Route index element={<Countries />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path="/maps">
          {/* <Route index element={<Map />} /> */}
          {/* <Route path=":country" element={<Country />} /> */}
        </Route>
        <Route path="/sectors">
          <Route index element={<Sectors />} />
          <Route path=":sector" element={<Sector />} />
        </Route>
        <Route path="/users">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
