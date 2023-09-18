import { useContext } from "react";
import Link from "next/link";

// Styles
import styles from "./style.module.scss";

// Libs
import { MdOutlineClose } from "react-icons/md";

// Components
import { MenuItens } from "../Header/menu-items";

// Helpers
import { MenuContext } from "@/common/context/SideMenuContext";

interface ISideMenuItemProps {
  label: string;
  href: string;
  id: string;
}

export const SideMenu = () => {
  const { isCollapsed, closeSideMenu } = useContext(MenuContext);

  const SideMenuItem = ({ label, href, id }: ISideMenuItemProps) => {
    return (
      <li className={styles.side_menu_item} id={id}>
        <Link href={href} onClick={closeSideMenu}>
          {label}
        </Link>
      </li>
    );
  };

  return (
    <aside className={isCollapsed ? styles.side_menu_container : styles.side_menu_hidden}>
      {/* Open Menu */}
      <span onClick={closeSideMenu} className={styles.mobile_icon}>
        <MdOutlineClose />
      </span>
      {/* Open Menu */}

      <nav className={styles.side_menu_wrapper}>
        <ul className={styles.sider_menu}>
          {/* Menu items */}
          {MenuItens.map((item) => {
            return <SideMenuItem label={item.nome} href={item.href} id={item.id} />;
          })}
          {/* Menu items */}
        </ul>
      </nav>
    </aside>
  );
};
