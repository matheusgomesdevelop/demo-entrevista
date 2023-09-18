import { RefObject, useContext, useEffect, useRef } from "react";
import Image from "next/image";

// Styles
import style from "./style.module.scss";

// Libs
import { styled } from "@stitches/react";
import { FaBars } from "react-icons/fa";

// Components
import { SideMenu } from "../SideMenu";

// Helpers
import { MenuContext } from "@/common/context/SideMenuContext";
import { MenuItens } from "./menu-items";
import { IconButton } from "@/common/components/Button";
import { activeMenuImplantacao, clickAndScroll, removerItemSecao } from "./helpers";

const HeaderStyled = styled("div", {
  width: "100%",
  height: "70px",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "8px 2px 2px rgba(0, 0, 0, 0.16)",
  backgroundFilter: "blur(8px)",
  transition: "0.3s",
  position: "fixed",
  zIndex: "999",
});

export const HeaderLayout = () => {
  const { isMobile, isCollapsed, openSideMenu } = useContext(MenuContext);

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const links = menuRef.current.querySelectorAll("li");

      removerItemSecao(links);
      clickAndScroll(links);
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      activeMenuImplantacao(menuRef);
    }
  }, []);

  return (
    <HeaderStyled>
      {isCollapsed && <SideMenu />}

      <nav className={style.header} ref={menuRef}>
        <a href="#">
          <Image src="/images/logoSideSacoma.png" alt="Side Sacomã" width={100} height={40} />
        </a>

        {/* Menu Links */}
        <ul className={style.header__links}>
          {!isMobile && (
            <>
              {/* Menu Items */}
              {MenuItens.map((item, index) => {
                return (
                  <li
                    className={style.header__link}
                    id={item.id}
                    key={`menu-item-${index + 1}`}
                    data-secao={item.href.replace("#", "")}
                  >
                    {item.nome}
                  </li>
                );
              })}
              {/* Menu Items */}
            </>
          )}

          {/* Arrow Up */}
          <a href="#">
            <IconButton>
              <Image
                src="/icons/arrowUp.svg"
                alt="Arrow Up"
                width={15}
                height={15}
                className={style.header__back_to_top_button}
              />
            </IconButton>
          </a>
          {/* Arrow Up */}

          {/* Hamburguer Menu */}
          {isMobile && (
            <>
              {!isCollapsed && (
                <IconButton>
                  <FaBars size={25} onClick={openSideMenu} className={style.header__side_menu_icon} />
                </IconButton>
              )}
            </>
          )}
          {/* Hamburguer Menu */}
        </ul>
        {/* Menu Links */}
      </nav>
    </HeaderStyled>
  );
};
