import React, { useState } from 'react';
import './App.css';
import BuyerFields from './components/BuyerFields';
import SellerFields from './components/SellerFields';
import Confirmation from './components/Confirmation';

function App() {
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
        setFormData({});
        setIsSubmitted(false);
    };

    const handleSubmit = (data) => {
        setFormData(data);
        setIsSubmitted(true);
    };

    return (
        <div className="container">
            <h1>Reserve Your Place</h1>
            {!isSubmitted ? (
                <form>
                    <label htmlFor="user-type">I am a:</label>
                    <select id="user-type" value={userType} onChange={handleUserTypeChange} required>
                        <option value="" disabled>Select user type</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    {userType === 'buyer' && <BuyerFields onSubmit={handleSubmit} />}
                    {userType === 'seller' && <SellerFields onSubmit={handleSubmit} />}
                </form>
            ) : (
                <Confirmation formData={formData} />
            )}
        </div>
    );
}

export default App;