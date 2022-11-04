import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const listItem = ["Home", "About", "Contact", "Blog", "Carrers"];

  return (
    <div>
      <header className="header-section ">
        <div className="container-navbar">
          <picture>
            <source srcSet="/icon/logo.svg" type="image/webp" />
            <img src="/icon/logo.svg" alt="picture" />
          </picture>
          <div className="md:order-2 hidden lg:block">
            <button
              type="button"
              className="btn-gradient text-uncommitted-white  px-7 py-2.5 rounded-full"
            >
              Request Invite
            </button>
          </div>

          <div className="list-menu">
            <ul className="text-menu">
              {listItem.map((menu) => (
                <li key={menu.id} className="margin-check">
                  {menu}
                </li>
              ))}
            </ul>
          </div>

          <div onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <button className="sm:hidden">
                <picture>
                  <source srcSet="/icon/icon-close.svg" type="image/webp" />
                  <img src="/icon/icon-close.svg" alt="picture" />
                </picture>
              </button>
            ) : (
              <button className="sm:hidden">
                <picture>
                  <source srcSet="/icon/icon-hamburger.svg" type="image/webp" />
                  <img src="/icon/icon-hamburger.svg" alt="picture" />
                </picture>
              </button>
            )}
          </div>
        </div>
      </header>
      {/* Header  mobile*/}
      <div
        className={`fixed inset-0 z-30 mt-5 bg-gradients ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mobile-menu">
          {listItem.map((link) => (
            <li className="py-3 list-none" key={link.id}>
              {link}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
