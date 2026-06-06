import Link from "next/link";

export default function FuturisticPrototype() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06110f] text-[#f2fff9] font-[Arial,Helvetica,sans-serif]">
      <div className="min-h-screen bg-[linear-gradient(to_right,rgba(46,242,197,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(215,255,95,0.08)_1px,transparent_1px)] bg-[size:64px_64px]">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center border border-[#2ef2c5] bg-[#0d201c] font-mono text-sm font-bold text-[#d7ff5f]">
              DF
            </span>
            <span className="text-lg font-semibold tracking-tight">
              DappFlow
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[#a6c8bd] md:flex">
            <a className="transition hover:text-[#2ef2c5]" href="#">
              Challenges
            </a>
            <a className="transition hover:text-[#2ef2c5]" href="#">
              Rewards
            </a>
            <a className="transition hover:text-[#2ef2c5]" href="#">
              Profile
            </a>
          </nav>

          <a
            className="border border-[#2ef2c5] bg-[#2ef2c5] px-4 py-2 text-sm font-semibold text-[#06110f] transition hover:bg-[#d7ff5f] hover:text-[#06110f]"
            href="#"
          >
            Connect Wallet
          </a>
        </header>

        <section className="mx-auto grid min-h-[calc(100vh-152px)] w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex border border-[#ff5c8a] bg-[#180d14] px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#ff9bb5]">
              Learn to earn sandbox
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Build web3 skills through on-chain quests.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a6c8bd]">
              Complete developer challenges, prove wallet actions, collect SKILL
              tokens, and mint profile rewards that live on-chain.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="border border-[#d7ff5f] bg-[#d7ff5f] px-5 py-3 text-center text-sm font-bold text-[#06110f] transition hover:border-[#2ef2c5] hover:bg-[#2ef2c5]"
                href="#"
              >
                Connect Wallet
              </a>
              <a
                className="border border-[#44685c] bg-[#081815] px-5 py-3 text-center text-sm font-bold text-[#f2fff9] transition hover:border-[#ff5c8a] hover:text-[#ff9bb5]"
                href="#"
              >
                Explore Challenges
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border border-[#21443a] bg-[#081815]/90">
              {[
                ["10", "SKILL start"],
                ["01", "Avatar NFT"],
                ["SBT", "Skill badges"],
              ].map(([value, label]) => (
                <div
                  className="border-r border-[#21443a] p-4 last:border-r-0"
                  key={label}
                >
                  <p className="font-mono text-2xl font-bold text-[#d7ff5f]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#80a79b]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#2ef2c5] bg-[#081815] p-5 shadow-[12px_12px_0_#ff5c8a]">
            <div className="flex items-center justify-between border-b border-[#21443a] pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#80a79b]">
                  Quest console
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Wallet verified
                </h2>
              </div>
              <span className="border border-[#d7ff5f] px-3 py-1 font-mono text-sm text-[#d7ff5f]">
                LVL 01
              </span>
            </div>

            <div className="grid gap-4 py-6">
              {[
                ["Connect wallet", "Complete", "+10 SKILL"],
                ["Sign message", "Ready", "+10 SKILL"],
                ["Generate avatar", "Locked", "NFT"],
              ].map(([task, status, reward]) => (
                <div
                  className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#18362e] pb-4 last:border-b-0 last:pb-0"
                  key={task}
                >
                  <div>
                    <p className="font-semibold">{task}</p>
                    <p className="mt-1 text-sm text-[#80a79b]">{status}</p>
                  </div>
                  <span className="self-start border border-[#44685c] px-3 py-1 font-mono text-xs text-[#2ef2c5]">
                    {reward}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[96px_1fr] gap-5 border-t border-[#21443a] pt-5">
              <div className="grid aspect-square place-items-center border border-[#ff5c8a] bg-[#140f16]">
                <span className="font-mono text-3xl font-black text-[#ff9bb5]">
                  A1
                </span>
              </div>
              <div>
                <p className="text-sm text-[#80a79b]">Avatar mint preview</p>
                <p className="mt-2 text-xl font-semibold">Neon Operator</p>
                <div className="mt-4 h-2 bg-[#18362e]">
                  <div className="h-full w-2/3 bg-[#2ef2c5]" />
                </div>
                <p className="mt-2 font-mono text-xs text-[#d7ff5f]">
                  4 of 6 starter quests complete
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-[#21443a] px-5 py-5 text-sm text-[#80a79b] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>DappFlow - on-chain learning loop</span>
          <span>SKILL token / Avatar NFT / Skill badges</span>
        </footer>
      </div>
    </main>
  );
}
