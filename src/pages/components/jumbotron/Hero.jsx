export default function Hero() {
  return (
    <section className="jumbotron">
      <picture className="jumbotron-picture">
        <source srcSet="/images/image-mockups.png" type="image/webp" />
        <img src="/images/image-mockups.png" alt="picture" />
      </picture>

      <picture className="icon-desktop">
        <source srcSet="/icon/bg-intro-desktop.svg" type="image/webp" />
        <img src="/icon/bg-intro-desktop.svg" alt="picture" />
      </picture>

      <picture className="icon-mobile">
        <source
          srcSet="/icon/bg-intro-mobile.svg"
          className="w-full"
          type="image/webp"
        />
        <img src="/icon/bg-intro-mobile.svg" className="w-full" alt="picture" />
      </picture>

      <div className="hero-sm">
        <h1 className="text-paragraph">Next generation digital banking</h1>
        <p className="text-uncommitted-light-grayish-blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div>
          <button type="button" className="btn-gradient btn-invite">
            Request Invite
          </button>
        </div>
      </div>
    </section>
  );
}
