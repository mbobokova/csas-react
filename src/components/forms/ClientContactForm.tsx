import {useState} from "react";

function ClientContactForm() {
    const [companyName, setCompanyName] = useState<string>('');
    const [companyManager, setCompanyManager] = useState<string>('');
    const [companyAdress, setCompanyAdress] = useState<string>('');
    const [companyPhone, setCompanyPhone] = useState<string>('');
    const [companyEmail, setCompanyEmail] = useState<string>('');    
    const [companyIco, setCompanyIco] = useState<string>('');


    return (
        <>
        <form action="POST">
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
                    value={companyAdress}
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