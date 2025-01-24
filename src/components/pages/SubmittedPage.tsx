import { ClientData } from "../../App";
import classes from "./SubmittedPage.module.css"

function SubmittedPage() {
    const cachedClientData = localStorage.getItem('clientData');
    const parsedClientData: ClientData = cachedClientData ? JSON.parse(cachedClientData) : null;
    const deleteClientData= () =>  {
      localStorage.removeItem('clientData');
      window.location.reload();
    }
    return (
      <div className={classes.page_window}>        
        <h1>{parsedClientData.companyName}, děkujeme za Vaše data.</h1>

        <p>Shrnutí odeslaných dat:</p>
        <ul className={classes.page_list}>
          <li>Company Name: <strong>{parsedClientData.companyName}</strong></li>
          <li>Company ICO: <strong>{parsedClientData.companyIco}</strong></li>
          <li>Company Address: <strong>{parsedClientData.companyAddress}</strong></li>
          <li>Company Phone: <strong>{parsedClientData.companyPhone}</strong></li>
          <li>Company Email: <strong>{parsedClientData.companyEmail}</strong></li>
          <li>Company Manager: <strong>{parsedClientData.companyManager}</strong></li>
        </ul>       
        <button onClick={deleteClientData}>Vyplnit znovu</button>
      </div>
    )
}

export default SubmittedPage;