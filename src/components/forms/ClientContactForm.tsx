import {useState} from "react";
import axios from "axios";
import classes from './ClientContactForm.module.css';

function ClientContactForm() {
    // Recieved Client Data
    const [companyName, setCompanyName] = useState<string>('');
    const [companyManager, setCompanyManager] = useState<string>('');
    const [companyAddress, setCompanyAdress] = useState<string>('');
    const [companyPhone, setCompanyPhone] = useState<string>('');
    const [companyEmail, setCompanyEmail] = useState<string>('');    
    const [companyIco, setCompanyIco] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const clientData = {
            companyName,
            companyManager,
            companyAddress,
            companyPhone,
            companyEmail,
            companyIco
        };    

        try {
            // Send data to server for JSON file
            await axios.post('http://localhost:5000/client-data', clientData);
            // Store clientData in local storage
            localStorage.setItem('clientData', JSON.stringify(clientData));
            // Redirect with Routes logic
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Failed to save data.');
        }
    };

    return (
        <div className={classes.form_window}>
        <h1>Dotazník klientských údajů</h1>
        <form onSubmit={handleSubmit} className={classes.form_content}>
            <div className={classes.form_row}>
                <label htmlFor="companyName" className={classes.form_label}>
                    Název firmy:
                </label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={classes.form_input}
                    />
            </div>
            <div className={classes.form_row}>
                <label htmlFor="companyManager"  className={classes.form_label}>
                    Jednatel:
                </label>
                <input
                    type="text"
                    value={companyManager}
                    onChange={(e) => setCompanyManager(e.target.value)}                    
                    className={classes.form_input}
                    />
            </div>
            <div className={classes.form_row}>
                <label htmlFor="email"  className={classes.form_label}>
                    Adresa:
                </label>
                <input
                    type="text"
                    value={companyAddress}
                    onChange={(e) => setCompanyAdress(e.target.value)}
                    className={classes.form_input}
                    />
            </div>
            <div className={classes.form_row}>
                <label htmlFor="email"  className={classes.form_label}>
                    Tel.číslo:
                </label>
                <input
                    type="text"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    placeholder="+420"
                    className={classes.form_input}
                    />
            </div>
            <div className={classes.form_row}>
                <label htmlFor="email"  className={classes.form_label}>
                    E-mail:
                </label>
                <input
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}                    
                    className={classes.form_input}
                    />
            </div>
            <div className={classes.form_row}>
                <label htmlFor="email"  className={classes.form_label}>
                    IČO:
                </label>
                <input
                    type="number"
                    value={companyIco}
                    onChange={(e) => setCompanyIco(e.target.value)}                    
                    className={classes.form_input}
                    />
            </div>
            <button type="submit">Odeslat</button>

        </form>
        </div>
    )
}

export default ClientContactForm;