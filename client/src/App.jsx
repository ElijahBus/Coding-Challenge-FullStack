import { useState } from 'react';

import './App.css';
import appHttpClient from './app-http-client.js';

function App() {
  const [reports, setReports] = useState([
    {
      id: '7848398493',
      state: 'Open',
      type: 'Spam',
      message: 'Some message here...',
    },
    {
      id: '8343hjhjs',
      state: 'Open',
      type: 'Spam',
      message: 'Some message here...',
    },
    {
      id: 'shj2333433',
      state: 'Open',
      type: 'Spam',
      message: 'Some message here...',
    },
    {
      id: '39433here',
      state: 'Open',
      type: 'Spam',
      message: 'Some message here...',
    },
  ]);

  const updateTicketStatus = async (reportId, ticketState) => {
    try {
      await appHttpClient.put(`/reports/${reportId}`, {
        ticketState: ticketState,
      });

      alert('Ticket resolved');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="title">Reports</h1>

        <div className="reports-wrapper">
          {
            reports.map((report, index) => (
              <div key={index} className="report-card">
                <div className="report-column">
                  <span>Id : {report.id}</span>
                  <span>State : {report.state}</span>

                  <a href="#">Details</a>
                </div>

                <div className="report-column">
                  <span>Type : {report.type}</span>
                  <span>Message : {report.message}</span>
                </div>

                <div className="report-column">
                  <button>Block</button>
                  <button onClick={() => updateTicketStatus(report.id, 'CLOSED')}>Resolve</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
