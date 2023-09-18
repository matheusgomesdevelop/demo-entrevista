// Styles
import styles from "./style.module.scss";

// Componentes
import { Text } from "@/common/components/Typography/Text";
import { ThinTitle } from "@/common/components/Typography/Title";
import { Icon } from "@/common/components/Icon";
import { diferenciaisLazer_list } from "./diferenciais-list";

export const Environments = () => {
  return (
    <section id="environments" className={styles.environments_container}>
      <div className={styles.environments_container__wrapper}>
        <a href="#environments">
          <div className={styles.environments_container__polygon_1}>
            <div className={styles.environments_container__polygon_2} />
          </div>
        </a>

        <section className={styles.environments_container__sectionTitle}>
          <ThinTitle className={styles.environments_container__environment_title}>
            LAZER
            <Text className={styles.environments_container__environment_subtitle}>
              LAZER DE CLUBE PARA TODA A FAMÍLIA.
            </Text>
          </ThinTitle>
          {/* Diferenciais */}
          <div className={styles.environments_container__environments}>
            {diferenciaisLazer_list.map((dif, index) => {
              return <Icon icon={dif.src} label={dif.nome} key={`ambientes-lazer-${index + 1}`} />;
            })}
          </div>
          {/* Diferenciais */}
        </section>
      </div>
      <div className={styles.environments_container__under_polygon}>
        <div className={styles.environments_container__polygon_3} />
      </div>
    </section>
  );
};
