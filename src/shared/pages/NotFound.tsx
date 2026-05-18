import { useRouter } from "@/interfaces/router/useRouter";
import { SubTitle } from "../components/atoms/SubTitle";
import { Button } from "../components/atoms/Button";

export const NotFound = () => {
  const navigate = useRouter();

  return (
    <main className="min-h-dvh bg-surface font-sans flex flex-col items-center justify-center relative overflow-hidden px-6 py-10">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07] bg-size-[60px_60px] mask"
        style={{
          backgroundImage:
            "var(--color-gradient-pink-r), var(--color-gradient-pink-b)",
        }}
      />

      <div
        aria-hidden
        className="absolute size-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(252,20,116,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-xl text-text-primary max-w-sm w-full">
        <span className="text-accent-pink text-[0.7rem] font-black tracking-[0.3em] uppercase">
          Erro — Página não encontrada
        </span>

        <div className="relative leading-none">
          <h1 className="text-[clamp(7rem,28vw,11rem)] font-black text-text-primary tracking-tight uppercase select-none">
            4<span className="text-accent-pink">0</span>4
          </h1>

          <div
            aria-hidden
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/5 h-[2px] bg-accent-pink shadow-glow-pink"
          />
        </div>

        <SubTitle>Perdido no caos.</SubTitle>

        <p className="text-light-gray text-sm leading-relaxed max-w-xs">
          Esta página foi além dos limites — ou nunca existiu. Volte e continue
          explorando.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Button
            onClick={() => navigate("/")}
            className="text-[0.75rem] tracking-[0.15em] uppercase px-8 py-3"
          >
            Voltar ao início
          </Button>

          <Button
          color="secondary"
            onClick={() => navigate(-1)}
            className="text-[0.75rem] tracking-[0.15em] uppercase px-8 py-3"
          >
            Página anterior
          </Button>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute -bottom-8 -right-4 text-[clamp(10rem,35vw,22rem)] text-dark-gray opacity-15 select-none leading-none pointer-events-none"
      >
        404
      </span>
    </main>
  );
};