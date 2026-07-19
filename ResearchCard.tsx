// components/ResearchCard.tsx

type Props = {
  title: string;
  category: string;
  description: string;
};

export default function ResearchCard({
  title,
  category,
  description,
}: Props) {
  return (
    <div className="border p-6 hover:shadow-sm transition">
      <p className="text-sm text-gray-500">
        {category}
      </p>

      <h3 className="text-2xl mt-2">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}
