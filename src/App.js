import React, { useState } from "react";

const App = () => {
  return (
    <>
      <table className="tab">
        <tr>
          <th colSpan={7}>General Details</th>
        </tr>
        <tr>
          <td colSpan={4} className="full-input">
            <label for="date">Date:</label>
            <input type="text" name="date"></input>
          </td>
          <td colSpan={3} className="full-input">
            <label for="cusn">Customer Name:</label>
            <input type="text" name="cusn"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={4} className="full-input">
            <label for="cusa">Customer Address:</label>
            <input type="text" name="cusa"></input>
          </td>
          <td colSpan={3} className="full-input">
            <label for="jobn">Job Name:</label>
            <input type="text" name="jobn"></input>
          </td>
        </tr>

        <tr>
          <td className="full-input" colSpan={4}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={3} className="full-input">
            <label for="cusc">Customer Contact:</label>
            <input type="text" name="cusc"></input>
          </td>
        </tr>

        <tr>
          <td colSpan={2} className="full-input">
            <label for="zip">Zip Code:</label>
            <input type="text" name="zip"></input>
          </td>
          <td colSpan={2} className="full-input">
            <label for="pname">Plant Name:</label>
            <input type="text" name="pname"></input>
          </td>
          <td colSpan={3} className="full-input">
            <label for="ctel">Customer Tel. No:</label>
            <input type="text" name="ctel"></input>
          </td>
        </tr>
        <tr>
          <th colSpan={7}>Details of work Carried Out</th>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={7}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr />

        <tr>
          <th colSpan={7}>Future Action Needed</th>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Details
          </td>

          <td
            style={{
              backgroundColor: "#6495ED",
              border: "2px solid black",
              width: "200px",
            }}
          >
            Estimated Cost (if known)
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={6}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={6}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={6}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={6}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td className="full-input" colSpan={6}>
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>

        <tr>
          <th colSpan={7}>Parts Used</th>
        </tr>
        <tr>
          <td
            colSpan={2}
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Part No.
          </td>

          <td
            colSpan={4}
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Description
          </td>
          <td style={{ backgroundColor: "#6495ED", border: "2px solid black" }}>
            Cost
          </td>
        </tr>

        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td colSpan={4} className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
          <td className="full-input">
            <label for="nul"></label>
            <input type="text" name="nul"></input>
          </td>
        </tr>

        <tr>
          <th colSpan={4}>Labour/Times</th>
          <th>Signatures</th>
        </tr>
        <tr>
          <td
            className="full-input"
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Date
          </td>

          <td
            className="full-input"
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Travel
          </td>
          <td
            className="full-input"
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            On-site
          </td>
          <td
            className="full-input"
            style={{ backgroundColor: "#6495ED", border: "2px solid black" }}
          >
            Off-site
          </td>
          <td className="full-input">
            In referring to this job, quote No.
            <br />
            The times recorded are correct. The
            <br /> work has been completely to my
            <br /> satisfaction.
          </td>
          <td style={{ width: "150px" }} className="full-input">
            Parts/ Materials
            <br />
            Total
          </td>
          <td style={{ width: "100px" }} className="full-input"></td>
        </tr>
        <tr>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input">
            <label for="sign">Customer Signature</label>
          </td>
          <td className="full-input">
            <label for="sign">Labor:</label>
          </td>
          <td className="full-input"></td>
        </tr>

        <tr>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input">
            <label for="sign">Misc:</label>
          </td>
          <td className="full-input"></td>
        </tr>

        <tr>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input">
            <label for="sign">Tech Signature</label>
          </td>
          <td className="full-input">
            <label for="sign">Tax:</label>
          </td>
          <td className="full-input"></td>
        </tr>

        <tr>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input"></td>
          <td className="full-input">
            <label for="sign">Labor:</label>
          </td>
          <td className="full-input"></td>
        </tr>
      </table>
    </>
  );
};

export default App;
