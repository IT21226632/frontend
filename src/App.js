import './Nav.css';
import './footer.css';




import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Quote_Form from './component/Quote_form';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Req_Form from './component/requirement'
import AdminDashboard from './component/adminDashboard'
import AdminQuote from './component/AdminQuote'
import NewQuotation from './component/NewQuotation';
import AllQuotes from './component/listQuoteAdmin';
import AllRequirements from './component/listReqAdmin';
import AllQuotations from './component/listQuotationAdmin';
import UpdateQuote from './component/UpdateQuote';
import UpdateQuotation from './component/UpdateQuotations';
import DashboardAdmin from './component/DashboardAdmin';
import QuotationManagement from './component/QuotationManagement';
import UpdateRequirement from './component/UpdateRequirement'
import ReportQuotes from './component/QuoteReport';
import QuoteLocation from './component/QuoteLoacation';
import HomePage from './component/HomePage';
import HomePageQuotations from './component/HomePageQuotations';



import AddEmployee from './component/pages/AddEmployee';
import AllEmployee from './component/pages/AllEmployee';
import AddCandidate from './component/pages/AddCandidate';
import AllCandidate from './component/pages/AllCandidate';
import UpdateCandidate from './component/pages/UpateCandidate';
import AddJob from './component/pages/AddJob';
import AllJob from './component/pages/AllJob';
import Jobs from './component/pages/jobs';

import UpdateJob from './component/pages/UpdateJob';
import UpdateEmployee from './component/pages/updateEmployee';
import Table from './component/pages/Table';

import EmployeeList from './component/pages2/schedules-list';
import EditEmployee from './component/pages2/edit-schedule';
import CreateSchedule from './component/pages2/create-schedule';
import ViewEmployee from './component/pages2/view-schedule';



function App() {
  return (

    
    <BrowserRouter>
      
      <Nav></Nav>

    

      <Routes>
      <Route path = '/' exact Component={QuotationManagement}></Route>

      <Route path = '/quote' exact Component={AllQuotes}></Route>
      <Route path = '/quotations' exact Component={AllQuotations}></Route>
      <Route path = '/requirements' exact Component={AllRequirements}></Route>
      <Route path = '/quote/add' exact Component={Quote_Form}></Route>
      <Route path = '/quotations/add' exact Component={NewQuotation}></Route>
      <Route path = '/requirements/add' exact Component={Req_Form }></Route>
      <Route path = '/quote/update/:id' exact Component={UpdateQuote}></Route>
      <Route path = '/quotation/update/:id' exact Component={UpdateQuotation}></Route>
      <Route path = '/requirements/update/:id' exact Component={UpdateRequirement}></Route>
      <Route path = '/quote/generate' exact Component={ReportQuotes}></Route>
      <Route path = '/quote/location' exact Component={QuoteLocation}></Route>
      
      <Route exact path='/AllEmployee' element={<AllEmployee />} />
          <Route path='/AllEmployee/AddEmployee' element={<AddEmployee />} />
          <Route path='/AllEmployee/updateEmployee/:id' element={<UpdateEmployee />} />
          <Route path='/AllEmployee/AddCandidate' element={<AddCandidate />} />
          <Route path='/AllEmployee/AllCandidate' element={<AllCandidate />} />
          <Route path='/AllEmployee/UpdateCandidate/:id' element={<UpdateCandidate />} />
          <Route path='/AllEmployee/AddJob' element={<AddJob />} />
          <Route path='/AllEmployee/AllJob' element={<AllJob />} />
          <Route path='/AllEmployee/UpdateJob' element={<UpdateJob />} />
          <Route path='/AllEmployee/Jobs' element={<Jobs />} />
          <Route path='/AllEmployee/Table' element={<Table />} />

          <Route exact path='/schedule' element={<EmployeeList />} />
          <Route exact path='/schedule/edit/:id' element={<EditEmployee/>} />
          <Route exact path='/schedule/create' element={<CreateSchedule/>} />
          <Route exact path='/schedule/view/:id' element={<ViewEmployee/>} />

          


      
     </Routes>
     <Footer></Footer>
     
    </BrowserRouter>
  
    
  );
}

export default App;
