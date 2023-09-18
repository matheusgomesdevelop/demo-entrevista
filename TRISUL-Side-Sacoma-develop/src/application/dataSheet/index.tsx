import styles from "./style.module.scss";
import { styled } from "@stitches/react";
import { SheetData1, SheetData2 } from "./sheet-items";
import { ReactNode } from "react";

interface ISheetInfoProps {
  title: string;
  data?: string;
  multipleData?: ReactNode[];
  divider?: boolean;
}

const SheetInfoWrapper = styled("div", {
  alignContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22.4px",
});

const SheetInfo = ({ title, data, multipleData, divider = true }: ISheetInfoProps) => {
  return (
    <SheetInfoWrapper className={styles.sheet_info_container}>
      <span>
        <p className={styles.info_title}>{title}:</p> {data && <p className={styles.info_description}>{data}</p>}
      </span>

      {multipleData && (
        <div className={styles.sheet_info_container__multiple_info}>
          {multipleData.map((item, index) => (
            <div key={`multiple-item-${index + 1}`}>{item}</div>
          ))}
        </div>
      )}
      {divider && <div className={styles.sheet_info_container__divider} />}
    </SheetInfoWrapper>
  );
};

export const Datasheet = () => {
  return (
    <section id="fichaTecnica" className={styles.data_sheet_container}>
      <div className={styles.data_sheet_container__wrapper}>
        <h4>Ficha técnica</h4>
        <div className={styles.data_sheet_container__infos}>
          <div className={styles.data_sheet_container__left_column}>
            {SheetData1.map((data, index) => (
              <SheetInfo
                key={`sheet-1-info-${index + 1}`}
                title={data.title}
                data={data.data}
                multipleData={data.multipleData}
                divider={data.divider}
              />
            ))}
          </div>
          <div className={styles.data_sheet_container__right_column}>
            {SheetData2.flatMap((data, index) => (
              <SheetInfo
                key={`sheet-2-info-${index + 1}`}
                title={data.title}
                data={data.data}
                multipleData={data.multipleData}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.data_sheet__under_polygon}>
        <div className={styles.data_sheet__polygon_3} />
      </div>
    </section>
  );
};
