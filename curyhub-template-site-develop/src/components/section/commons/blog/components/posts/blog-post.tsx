import { BoldTextStyled } from "../../../../../util/titulo";
import style from "./style.module.scss";

interface IBlogPostProps {
  type?: "vertical" | "horizontal";
  subtitle?: string;
}

const Post = ({
  type = "vertical",
  subtitle,
}: IBlogPostProps) => {
  return (
    <div
      className={
        type == "horizontal"
          ? style.blog_post_horizontal
          : style.blog_post_vertical
      }>
      <div>
        <img
          src="https://cury.net/storage/images_webp/products/gallery/62c5d00a1ddbd.jpeg.webp"
          height={type == "horizontal" ? "100" : "320"}
          width={type == "horizontal" ? "120" : "400"}
          alt="blog post"
          style={
            type == "horizontal" ? { display: "block" } : {}
          }
        />
      </div>
      <div>
        {subtitle && (
          <BoldTextStyled type="light">
            {subtitle}
          </BoldTextStyled>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse fugit praesentium deserunt ab error
          minima doloribus. Asperiores repellendus officiis
          beatae veritatis optio maiores aut sit!
        </p>
      </div>
    </div>
  );
};

export const BlogPost = () => {
  return (
    <div className={style.container}>
      <div className={style.container__blog_main_content}>
        <div>
          <Post subtitle="teste" />
        </div>
        <div className={style.container__sub_posts}>
          <Post type="horizontal" />
          <Post type="horizontal" />
          <Post type="horizontal" />
        </div>
      </div>
      <div className={style.container__blog_content}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
