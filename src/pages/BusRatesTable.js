// import React from 'react';

// const BusRatesTable = () => {
//   const ratesData = [
    
//     { seater: "SWIFT DESIRE", mumbai: "4+1", mahabaleshwar: "12", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "AURA", mumbai: "4+1", mahabaleshwar: "12", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "TOYOTA ETIOS", mumbai: "4+1", mahabaleshwar: "14", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "ERITGA", mumbai: "6+1", mahabaleshwar: "15", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "INNOVA", mumbai: "6+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "SCORPIO", mumbai: "8+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "INNOVA CRYSTA", mumbai: "6+1", mahabaleshwar: "20", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "AUDI", mumbai: "4+1", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "TEMPO TRAVELLER", mumbai: "13/17 SEATER", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "MINI BUS", mumbai: "20 SEATER", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "BUS", mumbai: "32-52", mahabaleshwar: "ON CALL", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "TAVERA", mumbai: "8+1", mahabaleshwar: "18", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//     { seater: "KIA Carens", mumbai: "6+1/7+1", mahabaleshwar: "17/KM & 18/KM", specialPermitNumber: "918722158435 ", driver: "Extra", parking: "Extra" },
//   ];

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     margin: "20px auto",
//   };

//   const thStyle = {
//     backgroundColor: "#D0191F",
//     color: "white",
//     padding: "8px",
//     border: "1px solid #ddd",
//   };

//   const tdStyle = {
//     padding: "8px",
//     border: "1px solid #ddd",
//     textAlign: "center",
//   };

//   const trEvenStyle = {
//     backgroundColor: "#f2f2f2",
//   };

//   const handleWhatsAppClick = (number, seater) => {
//     console.log(`Opening WhatsApp for ${seater} with number ${number}`);
//     const message = `Hi, I would like to inquire about the rates for the ${seater}.`;
//     const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="container p-0">
//       {/* <h3>Rates for AC Buses</h3> */}
//       <div className="table-responsive">
//         <table style={tableStyle}>
//           <thead>
//             <tr>
//               <th style={thStyle}>Bus Name</th>
//               <th style={thStyle}>Seater</th>
//               <th style={thStyle}>Per KM</th>
//               <th style={thStyle}>Driver Food</th>
//               <th style={thStyle}>Toll Parking</th>
//               <th style={thStyle}>Book Now</th>
//             </tr>
//           </thead>
//           <tbody>
//             {ratesData.map((row, index) => (
//               <tr key={index} style={index % 2 === 0 ? trEvenStyle : null}>
//                 <td style={tdStyle}>{row.seater}</td>
//                 <td style={tdStyle}>{row.mumbai}</td>
//                 <td style={tdStyle}>{row.mahabaleshwar}</td>
//                 <td style={tdStyle}>{row.driver}</td>
//                 <td style={tdStyle}>{row.parking}</td>
//                 <td style={tdStyle}>
//                   <button
//                     onClick={() => handleWhatsAppClick(row.specialPermitNumber, row.seater)}
//                     style={{
//                       cursor: "pointer",
//                       backgroundColor: "#D0191F",
//                       padding: "10px",
//                       borderRadius: "8px",
//                       color: "white",
//                     }}
//                   >
//                     Book Now
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>


//     </div>
//   );
// };

// export default BusRatesTable;


import React from "react";

const CabRatesTable = () => {
  const ratesData = [
    {
      vehicle: "Dzire (Sedan)",
      capacity: "4+1",
      oneWay: "₹2700",
      roundTrip: "₹5000",
      toll: "Including",
    },
    {
      vehicle: "Ertiga (6+1)",
      capacity: "6+1",
      oneWay: "₹3500",
      roundTrip: "₹6500",
      toll: "Including",
    },
    {
      vehicle: "Kia Carens (6+1)",
      capacity: "6+1",
      oneWay: "₹4000",
      roundTrip: "₹7000",
      toll: "Including",
    },
    {
      vehicle: "Innova Crysta (7+1)",
      capacity: "7+1",
      oneWay: "₹5000",
      roundTrip: "₹9000",
      toll: "Including",
    },
    {
      vehicle: "Tempo Traveller (13 Seater)",
      capacity: "13 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
    {
      vehicle: "Tempo Traveller (17 Seater)",
      capacity: "17 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
    {
      vehicle: "Mini Bus (21 Seater)",
      capacity: "21 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
    {
      vehicle: "Mini Bus (32 Seater)",
      capacity: "32 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
    {
      vehicle: "Mini Bus (35 Seater)",
      capacity: "35 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
    {
      vehicle: "Mini Bus (50 Seater)",
      capacity: "50 Seater",
      oneWay: "On Call",
      roundTrip: "On Call",
      toll: "Including",
    },
  ];

  const handleWhatsAppClick = (vehicle) => {
    const number = "918722158435";

    const message = `Hi Belgaum Taxi Service,

I would like to book the ${vehicle}.

Please share the complete details.

Thank You.`;

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="container my-4">

      {/* <h2
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "25px",
          color: "#333",
        }}
      >
        Customized Packages
      </h2> */}

      <div className="table-responsive">

        <table
          className="table table-bordered text-center align-middle"
          style={{
            borderCollapse: "collapse",
            boxShadow: "0 3px 12px rgba(0,0,0,.08)",
          }}
        >
          <thead>

            <tr style={{ background: "#D01A1F", color: "#fff" }}>
              <th>TYPE OF VEHICLE</th>
              <th>CAPACITY</th>
              <th>ONE WAY PRICE</th>
              <th>ROUND TRIP (RETURN)</th>
              <th>TOLL & PARKING</th>
              <th>BOOK NOW</th>
            </tr>

          </thead>

          <tbody>

            {ratesData.map((item, index) => (

              <tr key={index}>

                <td>{item.vehicle}</td>

                <td>{item.capacity}</td>

                <td>{item.oneWay}</td>

                <td>{item.roundTrip}</td>

                <td>{item.toll}</td>

                <td>

                  <button
                    onClick={() => handleWhatsAppClick(item.vehicle)}
                    style={{
                      background: "#D01A1F",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "600",
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

      {/* <div
        style={{
          marginTop: "40px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Rules & Guidelines
        </h3>

        <ul
          style={{
            lineHeight: "2",
            paddingLeft: "20px",
          }}
        >
          <li>Driver allowance & food charges are extra.</li>

          <li>Daily running limit is 300 KM.</li>

          <li>
            Extra KM and extra hours will be charged additionally.
          </li>

          <li>
            Night charges apply from 12:00 AM to 6:00 AM.
          </li>

          <li>
            Interstate taxes, permit charges, toll and parking charges are extra wherever applicable.
          </li>

          <li>
            Government taxes will be charged as per government rules.
          </li>

          <li>
            Rates may change depending on fuel price fluctuations.
          </li>
        </ul>
      </div> */}

    </div>
  );
};

export default CabRatesTable;