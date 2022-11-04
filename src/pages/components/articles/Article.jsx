import { article } from "./data";

export default function Article() {
  return (
    <section className="section-background">
      <div className="container mx-auto">
        <div className="px-6">
          <h1 className="article-text-paragraph">Latest Article</h1>
        </div>
        <div className="grid-place">
          {article.map((item) => (
            <div className="item-id" key={item.id}>
              <picture>
                <source srcSet={item.img} type="image/webp" />
                <img src={item.img} alt="picture" />
              </picture>
              <div className="p-5">
                <p className="text-xs text-uncommitted-light-grayish-blue">
                  {item.by}
                </p>
                <a href="#">
                  <h5 className="item-heading">{item.title}</h5>
                </a>
                <p className="mb-3 text-uncommitted-light-grayish-blue text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
