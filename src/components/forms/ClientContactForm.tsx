import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function ClientContactForm() {
    // Recieved Client Data
    const [companyName, setCompanyName] = useState<string>('');
    const [companyManager, setCompanyManager] = useState<string>('');
    const [companyAddress, setCompanyAdress] = useState<string>('');
    const [companyPhone, setCompanyPhone] = useState<string>('');
    const [companyEmail, setCompanyEmail] = useState<string>('');    
    const [companyIco, setCompanyIco] = useState<string>('');
    // For redirect after submit form
    const navigate = useNavigate();

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
            // Redirect
            navigate('/submitted-page');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Failed to save data.');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="form-label">
                    Název firmy:
                </label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    Jednatel:
                </label>
                <input
                    type="text"
                    value={companyManager}
                    onChange={(e) => setCompanyManager(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    Adresa:
                </label>
                <input
                    type="text"
                    value={companyAddress}
                    onChange={(e) => setCompanyAdress(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    Tel.číslo:
                </label>
                <input
                    type="text"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    E-mail:
                </label>
                <input
                    type="text"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    IČO:
                </label>
                <input
                    type="text"
                    value={companyIco}
                    onChange={(e) => setCompanyIco(e.target.value)}
                    placeholder="Company Name"
                    />
            </div>
            <button type="submit">Odeslat</button>

        </form>
        </>
    )
}

export default ClientContactForm;