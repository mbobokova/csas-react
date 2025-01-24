import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ClientContactPage from './components/pages/ClientContactPage';
import SubmittedPage from './components/pages/SubmittedPage'
import './App.css'


export interface ClientData {
  companyName: string;
  companyIco: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyManager: string;
}

function App() {
  const [clientData, setClientData] = useState<ClientData | null>(null);

  useEffect(() => {
    // Block "/submitted-page" path if clientData were not filled
    const cachedClientData = localStorage.getItem('clientData');
    if (cachedClientData) {
      try {
        const parsedData: ClientData = JSON.parse(cachedClientData);
        setClientData(parsedData);
      } catch (error) {
        console.error('Error parsing client data from localStorage:', error);
      }
    }
  }, []);


  return (
    <>   
      <BrowserRouter>
      <Routes>
            <Route
              path="/"
              element={<ClientContactPage />}
            />
            <Route
              path="/submitted-page"              
              element={clientData ? <SubmittedPage /> : <Navigate to="/" />}
            />
          </Routes>    
    </BrowserRouter>

    </>
  )
}

export default App;
