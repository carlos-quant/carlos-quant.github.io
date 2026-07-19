// components/SectionTitle.tsx

export default function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="text-4xl mb-8 border-b pb-2">
      {title}
    </h2>
  );
}
