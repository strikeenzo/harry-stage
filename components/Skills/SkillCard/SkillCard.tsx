import Link from "next/link";
import { ExternalLink } from "react-feather";
import IconFactory from "../../Shared/Icons/IconFactory";

interface SkillProps {
  slug: string;
  iconName: string;
  name: string;
  description: string;
  link: string;
}

const SkillCard = ({
  slug,
  iconName,
  name,
  description,
  link,
}: SkillProps): JSX.Element => {
  return (
    <div className="bg-secondary p-4 rounded-lg border-tertiary border-[1px] hover:border-accent transition duration-200 group relative">
      <Link href={`/skills/${slug}`} passHref>
        <a className="flex space-x-4 ">
          <IconFactory name={iconName} className="h-12 w-12" />
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </a>
      </Link>
      <a
        className="opacity-0 hidden group-hover:opacity-100 group-hover:block absolute -top-2 -right-2 rounded-full p-1.5 bg-accent text-tertiary border-[1px] border-accent hover:bg-secondary hover:text-accent transition"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SkillCard;