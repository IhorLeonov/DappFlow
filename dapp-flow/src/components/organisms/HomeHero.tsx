import { Button } from "@/src/components/atoms/Button";
import { Container } from "@/src/components/atoms/Container";
import { Tag } from "@/src/components/atoms/Tag";
import { H1, P } from "@/src/components/atoms/Typography";
import { HeroStats } from "@/src/components/molecules/HeroStats";
import { QuestConsole } from "@/src/components/organisms/QuestConsole";

export function HomeHero() {
  return (
    <Container
      as="section"
      className="grid min-h-[calc(100vh-152px)] gap-10 py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"
    >
      <div>
        <Tag className="mb-5 px-3 py-2" variant="danger">
          Learn to earn sandbox
        </Tag>
        <H1 className="max-w-4xl">Build web3 skills through on-chain quests.</H1>
        <P className="mt-7 max-w-2xl text-lg leading-8">
          Complete developer challenges, prove wallet actions, collect SKILL tokens, and mint profile rewards that live
          on-chain.
        </P>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary">Connect Wallet</Button>
          <Button variant="outlined">Explore Challenges</Button>
        </div>

        <HeroStats />
      </div>

      <QuestConsole />
    </Container>
  );
}
