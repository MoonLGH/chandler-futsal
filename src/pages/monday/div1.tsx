import { LadderData } from "@/types/FixturesLadder";
import React, { useEffect, useState } from "react";

function DivisionOne() {
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
          console.log(data); // Log the fetched data here
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
      <ul>
        {sheetData.map((row, index) => (
          <li key={index}>
            {row["Team name"]}, GP: {row.GP}, W: {row.W}, D: {row.D}, L: {row.L}
            , GF: {row.GF}, GA: {row.GA}, GD: {row.GD}, PTS: {row.PTS}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DivisionOne;
