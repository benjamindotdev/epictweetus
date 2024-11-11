import { Speech, AtSign, PersonStanding } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <Speech size={24} />
      <AtSign size={16} />
      <span className="flex flex-row gap-0 items-center">
        <PersonStanding size={24} />
        <PersonStanding size={20} />
        <PersonStanding size={16} />
      </span>
    </div>
  );
};

export default Logo;
