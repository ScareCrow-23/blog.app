import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function CallToAction() {
  return (
    <div className=" flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className=" flex-1 flex justify-center flex-col items-center">
        <h2 className="text-2xl">Wanna Know more about us?</h2>
        <p className="text-gray-500 my-5">Follow us on our socials</p>
        <div className=" flex gap-3 ">
          <AiFillInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://i.pinimg.com/564x/1b/06/80/1b0680f19bf4014fe76a2ae3b8865be5.jpg"
          //   src="https://i.pinimg.com/564x/c9/9f/38/c99f380aad9dde6e8081ffd6f68bebc2.jpg"
          //   src="https://i.pinimg.com/564x/cf/a9/06/cfa9065324031b079d58bbf4064640dd.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
