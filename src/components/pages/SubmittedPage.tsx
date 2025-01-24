import { ClientData } from "../../App";

function SubmittedPage() {
    const cachedClientData = localStorage.getItem('clientData');
    const parsedClientData: ClientData = cachedClientData ? JSON.parse(cachedClientData) : null;

    return (
      <div>        
        <h1>{parsedClientData.companyName}, děkujeme za Vaše data.</h1>
        
        <ul>
          <li><strong>Company Name:</strong> {parsedClientData.companyName}</li>
          <li><strong>Company ICO:</strong> {parsedClientData.companyIco}</li>
          <li><strong>Company Address:</strong> {parsedClientData.companyAddress}</li>
          <li><strong>Company Phone:</strong> {parsedClientData.companyPhone}</li>
          <li><strong>Company Email:</strong> {parsedClientData.companyEmail}</li>
          <li><strong>Company Manager:</strong> {parsedClientData.companyManager}</li>
        </ul>       
        
      </div>
    )
}

export default SubmittedPage;