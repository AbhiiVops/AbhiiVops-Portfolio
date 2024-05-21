interface Props {
  links: {
    title: string;
    id: string;
  }[];
  handleClick: (id: string) => void;
}

const MenuOverlay = ({ links, handleClick }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} onClick={() => handleClick(link.id)} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;