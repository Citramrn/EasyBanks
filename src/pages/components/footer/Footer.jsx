import { menu, icon } from "./menu";

export default function Footer() {
  return (
    <footer className="bg-dark-blue py-10">
      <div className="footers">
        <div className="class-footer">
          <picture>
            <source srcSet="/icon/logo-white.svg" type="image/webp" />
            <img src="/icon/logo-white.svg" alt="picture" />
          </picture>
          <div className="flex justify-between items-center mt-5">
            {icon.map((icons) => (
              <picture key={icons.id}>
                <source srcSet={icons.icn} type="image/webp" />
                <img src={icons.icn} alt="picture" />
              </picture>
            ))}
          </div>
        </div>

        <div className="footer-menu">
          {menu.map((footer) => (
            <a key={footer.id} href="#">
              {footer.title}
            </a>
          ))}
        </div>

        <div className="btn-classname">
          <button
            type="button"
            className="btn-gradient  px-7 py-2.5 rounded-full"
          >
            Request Invite
          </button>
          <p className="text-uncommitted-light-grayish-blue mt-3">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
