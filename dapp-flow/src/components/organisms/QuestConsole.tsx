import { Tag } from "@/src/components/atoms/Tag";
import { H2, MonoText } from "@/src/components/atoms/Typography";
import { AvatarProgress } from "@/src/components/molecules/AvatarProgress";
import { QuestItem } from "@/src/components/molecules/QuestItem";

const quests = [
  { reward: "+10 SKILL", status: "Complete", title: "Connect wallet" },
  { reward: "+10 SKILL", status: "Ready", title: "Sign message" },
  { reward: "NFT", status: "Locked", title: "Generate avatar" },
];

export function QuestConsole() {
  return (
    <aside className="border border-df-primary bg-df-surface p-5 shadow-df-console">
      <div className="flex items-center justify-between border-b border-df-border pb-4">
        <div>
          <MonoText className="uppercase tracking-[0.2em] text-df-muted-strong">
            Quest console
          </MonoText>
          <H2 className="mt-1">Wallet verified</H2>
        </div>
        <Tag variant="accent">LVL 01</Tag>
      </div>

      <div className="grid gap-4 py-6">
        {quests.map((quest) => (
          <QuestItem
            key={quest.title}
            reward={quest.reward}
            status={quest.status}
            title={quest.title}
          />
        ))}
      </div>

      <AvatarProgress />
    </aside>
  );
}
