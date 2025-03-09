import { Link } from "react-router";
import { footerItems } from "@/data/footer-items";
import NewsLetter from "./newsletter";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <div className="bg-blue-500 dark:bg-gray-800 border-t dark:border-gray-600 p-10 text-white">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="grid md:grid-cols-5 gap-10">
          <NewsLetter className="col-span-2" />
          {footerItems.map((footer, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold">{footer.label}</h1>
              {footer.items.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full bg-white border-t" />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
