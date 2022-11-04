import Image from "next/image";
import { easyBank } from "./datas";

export default function Grid() {
  return (
    <section className="section-grid">
      <div className="text-center lg:text-left container mx-auto">
        <div className="px-6 max-w-2lg mx-auto">
          <h2 className="easy-tag">Why choose Easybank?</h2>
          <p className="paragraph-tag">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="grid-tag">
          {easyBank.map((item) => (
            <div key={item.id} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <Image src={item.icons} alt="icon" width="60" height="60" />
              </div>

              <h2 className="heading-tag">{item.heading}</h2>
              <p className="item-paragraph">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
