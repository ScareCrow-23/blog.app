import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsInstagram, BsGithub, BsTwitter, BsThreads } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-[#008080]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-centered whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <img
                src={logo}
                alt=""
                className="h-12 w-12 bg-black rounded-full object-contain object-center overflow-hidden "
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopner noreferrer">
                  About Me
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ScareCrow-23"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Web Weavers"
            year={new Date().getFullYear()}
          />
          <div className=" flex gap-6 sm:mt-2 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsThreads} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
