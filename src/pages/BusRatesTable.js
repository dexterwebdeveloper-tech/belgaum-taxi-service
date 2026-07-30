import React from 'react';

const BusRatesTable = () => {
  const ratesData = [
    
    { seater: "SWIFT DESIRE", mumbai: "4+1", mahabaleshwar: "12", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "AURA", mumbai: "4+1", mahabaleshwar: "12", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "TOYOTA ETIOS", mumbai: "4+1", mahabaleshwar: "14", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "ERITGA", mumbai: "6+1", mahabaleshwar: "15", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "INNOVA", mumbai: "6+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "SCORPIO", mumbai: "8+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "INNOVA CRYSTA", mumbai: "6+1", mahabaleshwar: "20", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "AUDI", mumbai: "4+1", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "TEMPO TRAVELLER", mumbai: "13/17 SEATER", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "MINI BUS", mumbai: "20 SEATER", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "BUS", mumbai: "32-52", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "TAVERA", mumbai: "8+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
    { seater: "KIA Carens", mumbai: "6+1/7+1", mahabaleshwar: "17/KM & 18/KM", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
  ];

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px auto",
  };

  const thStyle = {
    backgroundColor: "#F4B31B",
    color: "white",
    padding: "8px",
    border: "1px solid #ddd",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const trEvenStyle = {
    backgroundColor: "#f2f2f2",
  };

  const handleWhatsAppClick = (number, seater) => {
    console.log(`Opening WhatsApp for ${seater} with number ${number}`);
    const message = `Hi, I would like to inquire about the rates for the ${seater}.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container p-0">
      {/* <h3>Rates for AC Buses</h3> */}
      <div className="table-responsive">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Bus Name</th>
              <th style={thStyle}>Seater</th>
              <th style={thStyle}>Per KM</th>
              <th style={thStyle}>Driver Food</th>
              <th style={thStyle}>Toll Parking</th>
              <th style={thStyle}>Book Now</th>
            </tr>
          </thead>
          <tbody>
            {ratesData.map((row, index) => (
              <tr key={index} style={index % 2 === 0 ? trEvenStyle : null}>
                <td style={tdStyle}>{row.seater}</td>
                <td style={tdStyle}>{row.mumbai}</td>
                <td style={tdStyle}>{row.mahabaleshwar}</td>
                <td style={tdStyle}>{row.driver}</td>
                <td style={tdStyle}>{row.parking}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleWhatsAppClick(row.specialPermitNumber, row.seater)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F4B31B",
                      padding: "10px",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default BusRatesTable;

