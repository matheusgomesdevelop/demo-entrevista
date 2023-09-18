import styles from "./bullet.module.scss";

interface IBullet {
  number: number;
  text?: string;
  active?: boolean;
  etapaBullet?: boolean;
  inactive?: boolean;
}

export default function Bullet({
  number,
  text,
  active,
  etapaBullet,
  inactive,
}: IBullet) {
  return (
    <div
      className={
        etapaBullet
          ? `${styles.c_bullet} ${styles.c_bullet__etapa}`
          : styles.c_bullet
      }
    >
      {active ? (
        <span
          className={`${styles.c_bullet__number} ${styles.c_bullet__number_active}`}
        >
          {number}
        </span>
      ) : (
        <span
          className={
            inactive
              ? `${styles.c_bullet__number} ${styles.c_bullet__number_inactive}`
              : styles.c_bullet__number
          }
        >
          {number}
        </span>
      )}

      {text ? <p className={styles.c_bullet__text}>{text}</p> : null}
    </div>
  );
}
