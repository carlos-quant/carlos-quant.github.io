// components/ArticleCard.tsx

type Props = {
  title: string;
  date: string;
  readingTime: string;
};

export default function ArticleCard({
  title,
  date,
  readingTime,
}: Props) {
  return (
    <div className="border-b py-4">
      <h3 className="text-xl">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {date} · {readingTime}
      </p>
    </div>
  );
}
