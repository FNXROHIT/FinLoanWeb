
import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import ImportOffice from './bulkImports/ImportOffice';
import {createBrowserHistory} from 'history'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ImportEmployees from './bulkImports/ImportEmployees';
import ImportUsers from './bulkImports/ImportUsers';
import ImportClient from './bulkImports/ImportClient';
import ImportGroups from './bulkImports/ImportGroups';
import ImportCenter from './bulkImports/ImportCenter';
import ImportLoanAccounts from './bulkImports/ImportLoanAccounts';
import ImportLoanRepayments from './bulkImports/ImportLoanRepayments';
import ImportSavingsAccounts from './bulkImports/ImportSavingsAccounts';
import ImportSavingsTransactionsRepayments from './bulkImports/ImportSavingsTransactionsRepayments';
import ImportFixedDepositAccounts from './bulkImports/ImportFixedDepositAccounts';
import ImportFixedDepositTransactionsRepayments from './bulkImports/ImportFixedDepositTransactionsRepayments';
import ImportRecurringDepositAccounts from './bulkImports/ImportRecurringDepositAccounts';
import ImportRecurringDepositTransactions from './bulkImports/ImportRecurringDepositTransactions';
import ImportChartOfAccounts from './bulkImports/ImportChartOfAccounts';
import ImportJournalEntries from './bulkImports/ImportJournalEntries';
import ImportShareAccounts from './bulkImports/ImportShareAccounts';
import ImportGuarantors from './bulkImports/ImportGuarantors';
















const history = createBrowserHistory()
function App() {
  return (
     <Router history={history}>
       <Switch>
         <Route path='/importOffice' component={ImportOffice} />
      
         <Route path='/importEmployees' component={ImportEmployees} />
         <Route path='/importUsers' component={ImportUsers} />
         <Route path='/importClient' component={ImportClient} />
         <Route path='/importGroups' component={ImportGroups} />
         <Route path='/importCenter' component={ImportCenter} />
         <Route path='/importLoanAccounts' component={ImportLoanAccounts} />
         <Route path='/importLoanRepayments' component={ImportLoanRepayments} />
         <Route path='/importSavingsAccounts' component={ImportSavingsAccounts} />
         <Route path='/importSavingsTransactionsRepayments' component={ImportSavingsTransactionsRepayments} />
         <Route path='/importFixedDepositAccounts' component={ImportFixedDepositAccounts} />
         <Route path='/importFixedDepositTransactionsRepayments' component={ImportFixedDepositTransactionsRepayments} />
         <Route path='/importRecurringDepositAccounts' component={ImportRecurringDepositAccounts} />
         <Route path='/importRecurringDepositTransactions' component={ImportRecurringDepositTransactions} />
         <Route path='/importChartOfAccounts' component={ImportChartOfAccounts} />
         <Route path='/importJournalEntries' component={ImportJournalEntries} />
         <Route path='/importShareAccounts' component={ImportShareAccounts} />
         <Route path='/importGuarantors' component={ImportGuarantors} />
         
         

         
         
         
         

         
       </Switch>
     </Router>
  );
}

export default App;
