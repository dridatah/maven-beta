type BadgePropsType = {
  title: string;
};
export default function Badge({ title }: BadgePropsType) {
  return (
    <span className="inline-block text-[#BBBBBB] text-sm font-medium mr-2 mb-2.5 px-4 py-1.5 rounded-full border border-[#E2E2E2]">
      {title}
    </span>
  );
}
