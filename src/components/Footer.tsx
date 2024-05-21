import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-center border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white h-52">
      <div className="container flex justify-between items-center px-12">
        <Image src='/logo.svg' height={64} width={64} alt="logo"/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;