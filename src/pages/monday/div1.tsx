import React, { useEffect, useState } from "react";
import { LadderData } from "@/types/FixturesLadder";

import styles from "../../styles/ladder.module.scss";
import FootballLoader from "@/components/loading-spinner/footballLoader";

const DivisionOne = () => {
  const [sheetData, setSheetData] = useState<LadderData[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxMDxHbHUndC5xnyB3hWJSUKqvfSa6k68xQsSq6lfEe4keK4yb9TCgAvJBqqf3RM_mm/exec?sheet=GroupA&startCell=H16&endCell=P24"
        );
        if (response.ok) {
          const data: LadderData[] = await response.json();
          setSheetData(data);
          console.log(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch data from the Google Sheet.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Monday United 1</h1>
      {loading ? (
        <>
          <FootballLoader />
          <p className={styles.loderCredit}>
            Loader credit:{" "}
            <a href="https://codepen.io/eyalcohen4/pen/mprbzP">Eyal Cohen</a>
          </p>
        </>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableHeaders}>Team Name</th>
                <th className={styles.tableHeaders}>Played</th>
                <th className={styles.tableHeaders}>W</th>
                <th className={styles.tableHeaders}>L</th>
                <th className={styles.tableHeaders}>GF</th>
                <th className={styles.tableHeaders}>GA</th>
                <th className={styles.tableHeaders}>GD</th>
                <th className={styles.tableHeaders}>Total Pts</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {sheetData.map((row, index) => (
                <tr key={index}>
                  <td className={styles.tableCells}>{row["Team name"]}</td>
                  <td className={styles.tableCells}>{row.GP}</td>
                  <td className={styles.tableCells}>{row.W}</td>
                  <td className={styles.tableCells}>{row.L}</td>
                  <td className={styles.tableCells}>{row.GF}</td>
                  <td className={styles.tableCells}>{row.GA}</td>
                  <td className={styles.tableCells}>{row.GD}</td>
                  <td className={styles.tableCells}>{row.PTS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DivisionOne;
