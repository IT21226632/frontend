import './quote.css';
import './Nav.css';
import './footer.css';

import Quote_Form from './component/Quote_form';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Req_Form from './component/requirement'
import AdminDashboard from './component/adminDashboard'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Quote_Form></Quote_Form>
    
    </div>
  );
}

export default App;