import { Tag } from "@/src/components/atoms/Tag";
import { SmallText } from "@/src/components/atoms/Typography";

type QuestItemProps = {
  reward: string;
  status: string;
  title: string;
};

export function QuestItem({ reward, status, title }: QuestItemProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-df-border-soft pb-4 last:border-b-0 last:pb-0">
      <div>
        <p className="font-semibold">{title}</p>
        <SmallText className="mt-1">{status}</SmallText>
      </div>
      <Tag className="self-start" variant="reward">
        {reward}
      </Tag>
    </div>
  );
}
