import { H3, MonoText, SmallText } from "@/src/components/atoms/Typography";

export function AvatarProgress() {
  return (
    <div className="grid grid-cols-[96px_1fr] gap-5 border-t border-df-border pt-5">
      <div className="grid aspect-square place-items-center border border-df-danger bg-df-surface-avatar">
        <span className="font-mono text-3xl font-black text-df-danger-soft">
          A1
        </span>
      </div>

      <div>
        <SmallText>Avatar mint preview</SmallText>
        <H3 className="mt-2">Neon Operator</H3>
        <div className="mt-4 h-2 bg-df-border-soft">
          <div className="h-full w-2/3 bg-df-primary" />
        </div>
        <MonoText className="mt-2">4 of 6 starter quests complete</MonoText>
      </div>
    </div>
  );
}
