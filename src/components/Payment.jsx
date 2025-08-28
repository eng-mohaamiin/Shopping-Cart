import React, { useState } from 'react';
import useShop from '../ShopContext';
import axios from 'axios';

const Payment = () => {
  const { total,clearCart } = useShop();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      return alert("Phone is empty");
    }
    await processPayment();
  };

  const processPayment = async () => {
    const body = {
      schemaVersion: '1.0',
      requestId: Date.now().toString(),
      timestamp: new Date().toISOString(),
      channelName: 'WEB',
      serviceName: 'API_PURCHASE',
      serviceParams: {
        merchantUid: import.meta.env.VITE_MERCHANT_U_ID,
        apiUserId: import.meta.env.VITE_MERCHANT_API_USER_ID,
        apiKey: import.meta.env.VITE_MERCHANT_API_KEY,
        paymentMethod: 'MWALLET_ACCOUNT',
        payerInfo: {
          accountNo: phone,
        },
        transactionInfo: {
          referenceId: 'INV123456',
          invoiceId: 'INV123456',
          amount: total,
          currency: 'USD',
          description: 'Reach shopping cart',
        },
      },
    };

    setLoading(true);

    try {
      const { data } = await axios.post("https://api.waafipay.net/asm", body);
      const msg = data.responseMsg || "";

      if (data.responseCode === "0") {
        alert(`✅ Payment successful for number ${phone}!`);
        setPhone("");
      } else if (msg.includes("4004")) {
        alert(` Payment rejected by user ${phone}.`);
      } else if (msg.includes("6002") || msg.toLowerCase().includes("sirta waa khalad")) {
        alert(` Incorrect PIN entered for number ${phone}.`);
		clearCart()
      } else if (msg.includes("5206") || msg.includes("Haraaga")) {
        alert(` Insufficient balance on number ${phone}.`);
      } else {
        alert(` Unknown error for number ${phone}: ${msg}`);
      }

    } catch (err) {
      console.error("Payment failed:", err);
      alert(`🚨 Network error. Could not process payment for ${phone}.`);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="25261..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="btn-proceed" type="submit">
          {loading ? "Loading..." : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
