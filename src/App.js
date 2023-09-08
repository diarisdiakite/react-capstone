import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Countries from './features/companies/countries/Countries';
import Companies from './features/companies/companies/Companies';
import Sectors from './features/companies/sectors/Sectors';
import Industries from './features/companies/industries/Industries';
import Country from './features/companies/countries/Country';
import Company from './features/companies/companies/Company';
import Sector from './features/companies/sectors/Sector';
import Industry from './features/companies/industries/Industry';
import UsersList from './features/users/UsersList';
import User from './features/users/User';
import NotFoundPage from './components/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';

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
        <Route path="/industries">
          <Route index element={<Industries />} />
          <Route path=":industry" element={<Industry />} />
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
