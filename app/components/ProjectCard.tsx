import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
  imageUrl: string;
};

export default function ProjectCard({ title, description, techStack, github, live, imageUrl }: ProjectCardProps) {
  return (
    <div className="border rounded-xl shadow overflow-hidden hover:scale-105 transition-transform duration-300 ">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover"
      />

      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

        <ul className="flex flex-wrap gap-2 text-xs">
          {techStack.map((item: string) => (
            <li key={item} className="px-2 py-1 border rounded">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
            GitHub
          </Link>

          {live && (
            <Link href={live} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
              Live Demo
            </Link>
          )}

        </div>


      </div>
    </div>
  );
}