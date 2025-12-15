import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    live?: string;
    imageUrl?: string;
};

export default function ProjectCard({ title, description, techStack, github, live, imageUrl }: ProjectCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>

        <ul className="flex flex-wrap gap-2 text-sm">
          {techStack.map((item : string) => (
            <li key={item} className="px-2 py-1 border rounded">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
}