import { useMemo } from "react";
import { styled } from "../../../../../theme/stitches.config";
import { ThemeHelper } from "../../../../helpers/theme";
import { InstagramIcon } from "../../../icons";
import { NoStyleWrapper } from "../../../structure";
import { ImageComponent } from "../components/Image";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { DepoimentText } from "../principal";

type IPostProps = {
  content: string;
  path: string;
  id: number;
};

const post: Array<IPostProps> = [
  {
    content:
      "Aquele momento inesquecível de realização! Mas nós queremos saber: quem é você, depois dessa conquista? 🤭",
    path: "/images/posts/post.png",
    id: 1,
  },
  {
    content:
      "Nunca é tarde para adquirir um apartamento e se você acha que não é possível, esse post vai te mostrar que com algumas atitudes viabilizarão essa mudança de chave.",
    path: "/images/posts/post2.png",
    id: 2,
  },
  {
    content: "Se Bonsucesso fosse uma pessoa, com certeza teria muita história para contar!",
    path: "/images/posts/post3.png",
    id: 3,
  },
  {
    content: "Decoração qualquer ambiente traz beleza, mas se for alinhado com funcionalidade fica ainda melhor.",
    path: "/images/posts/post4.png",
    id: 4,
  },
];

interface IInstagramPostsProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

const PostWrapper = styled("div", {
  alignContent: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "8px 0",
  maxWidth: "280px",
});

export const InstagramPosts = ({ section, corretor_data }: IInstagramPostsProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  //Post
  const post_div = useMemo(() => filter_component_by_name(active_components, "post_div"), []);
  const get_post_styles = get_component_styles(post_div);

  //Post content
  const post_content = useMemo(() => filter_component_by_name(active_components, "post_content"), []);
  const get_post_content_styles = get_component_styles(post_content);

  return (
    <NoStyleWrapper size={{ "@initial": "mobile", "@desktop": "desktop" }} css={{ ...section.styles }}>
      <div className={style.posts_wrapper}>
        {post.map((post, i) => (
          <PostWrapper key={post.id} css={{ ...get_post_styles }}>
            <ImageComponent size={{ "@initial": "post" }} src={post.path} />
            <div style={{ alignSelf: "flex-end" }}>
              <ImageComponent size={{ "@initial": "icon" }} src="/images/icon-instagram.svg" />
            </div>
            <DepoimentText size={{ "@initial": "sm" }} css={{ ...get_post_content_styles }}>
              {post.content}
            </DepoimentText>
          </PostWrapper>
        ))}
      </div>
    </NoStyleWrapper>
  );
};
