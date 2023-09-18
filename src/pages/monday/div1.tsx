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
          "https://script.googleusercontent.com/macros/echo?user_content_key=Mia_aWdkbRGJUe226wmhISL9KFvUPryRV3OhQRgY_I0KXYvFTbwyLpMfFA2g9uxKpcqzTbMYTOOpfEEoPOTNJOLUx0L5Clw_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOF5fIZTsmm_iRj1cCxsoHPc6eYmBhztlqZIGTVla62gQKUqx3RTtyEA6js3pEjQaYlhaCFGcC8Eu6n6-qsuHhZsitApjzb-cA&lib=MujewijslvIomOEfbP5h_wvcve-GX9lZR"
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
      <h1>Monday United 2</h1>
      {loading ? (
        <FootballLoader />
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableHeader}>Team Name</th>
                <th className={styles.tableHeader}>GP</th>
                <th className={styles.tableHeader}>W</th>
                <th className={styles.tableHeader}>L</th>
                <th className={styles.tableHeader}>GF</th>
                <th className={styles.tableHeader}>GA</th>
                <th className={styles.tableHeader}>GD</th>
                <th className={styles.tableHeader}>Total Pts</th>
              </tr>
            </thead>
            <tbody>
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
