import style from "./style.module.scss";
import { NoStyleWrapper } from "../../../structure";
import { ThemeHelper } from "../../../../helpers/theme";
import { ImageComponent } from "../components/Image";
import { styled } from "../../../../../theme/stitches.config";
import { DepoimentText } from "../principal";
import { useMemo } from "react";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { Icon } from "../../../icons";
import { LinkComponent } from "../../../link";

type PostsProps = {
  title: string;
  post: string;
  id: number;
};

const posts: Array<PostsProps> = [
  {
    title: "A praticidade do bicicletário suspenso",
    post: "Lorem, ipsum ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem itaque tempora odit perspiciatis provident, accusantium ipsum nam, ex molestiae sed reiciendis excepturi amet illo qui harum impedit iusto sapiente doloribus blanditiis nobis. Repudiandae earum provident velit quam, at modi voluptates nulla quae sint doloribus voluptatem eveniet, ullam ipsam assumenda possimus vitae corporis facere! Reprehenderit blanditiis a, error odio magni sunt! Illo vero hic doloremque corrupti obcaecati vel cum voluptatem fugit facere atque laudantium dolorem alias aspernatur soluta sed ea consectetur quaerat, maxime quae. Repudiandae ea animi rem dolorum, dolore aut illo numquam magni officia tenetur facilis? Distinctio aliquam, laudantium quae quos incidunt labore rem? Atque minus beatae debitis. Fugiat est deserunt ullam voluptas quia similique sequi ex maiores distinctio quam consequatur magni culpa laudantium, laborum itaque perspiciatis cumque modi exercitationem corrupti dignissimos vero magnam iure repellendus? Sequi, vel soluta! Accusantium, dolorem exercitationem animi nulla perferendis iste fuga maiores eveniet odit non possimus, est nihil ut at iure magnam ipsum?",
    id: 1,
  },
];

interface IBlogProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const Blog = ({ section, corretor_data }: IBlogProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Image
  const div_image = useMemo(() => filter_component_by_name(active_components, "image-secao"), []);
  const get_image_styles = get_component_styles(div_image);

  // Content Header
  const content_header = useMemo(() => filter_component_by_name(active_components, "content-header"), []);
  const get_content_header_styles = get_component_styles(content_header);

  // Content Title
  const content_title = useMemo(() => filter_component_by_name(active_components, "content-title"), []);
  const get_content_title_styles = get_component_styles(content_title);

  // Content Description
  const content_description = useMemo(() => filter_component_by_name(active_components, "content-description"), []);
  const get_content_description_styles = get_component_styles(content_description);

  // Content Button
  const content_button = useMemo(() => filter_component_by_name(active_components, "content-button"), []);
  const get_content_button_styles = get_component_styles(content_button);

  const PostWrapper = styled("div", {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: "10px 39px",

    "@desktop": {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <NoStyleWrapper
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
      className={style.container}
      css={{ ...section.styles }}
    >
      <div className={style.container__wrapper}>
        {posts.map((post) => (
          <PostWrapper key={post.id}>
            <img className={style.container__image} alt="blog post image" src="/images/computer.png" />
            <div className={style.container__content}>
              <DepoimentText size={{ "@initial": "smBold" }} css={{ ...get_content_header_styles }}>
                Blog
              </DepoimentText>
              <DepoimentText
                size={{ "@initial": "lg" }}
                css={{ ...get_content_title_styles }}
                className={style.container__content_title}
              >
                {post.title}
              </DepoimentText>
              <DepoimentText size={{ "@initial": "xsmBold" }} css={{ ...get_content_description_styles }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo.
              </DepoimentText>
              <LinkComponent
                href="/"
                prefetch={false}
                link="underline"
                css={{ ...get_content_button_styles }}
                style={{ minWidth: "110.56px" }}
              >
                <p>Veja mais</p>
              </LinkComponent>
            </div>
          </PostWrapper>
        ))}
      </div>
    </NoStyleWrapper>
  );
};
