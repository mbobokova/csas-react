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
          <li>Název firmy: <strong>{parsedClientData.companyName}</strong></li>
          <li>Jednatel: <strong>{parsedClientData.companyManager}</strong></li>          
          <li>Adresa: <strong>{parsedClientData.companyAddress}</strong></li>
          <li>Tel.číslo: <strong>{parsedClientData.companyPhone}</strong></li>
          <li>E-mail: <strong>{parsedClientData.companyEmail}</strong></li>
          <li>IČO: <strong>{parsedClientData.companyIco}</strong></li>
        </ul>       
        <button onClick={deleteClientData}>Vyplnit znovu</button>
      </div>
    )
}

export default SubmittedPage;