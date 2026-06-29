import { SearchX } from "lucide-react";
import { Anchor } from "@/interfaces/router/Link";

export const ProductNotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <main className="flex-1 flex flex-col items-center justify-center text-text-primary px-4 text-center animate-in fade-in duration-700">
        <SearchX className="w-24 h-24 text-accent-pink mb-6 animate-bounce" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Produto Não Encontrado</h1>
        <p className="text-gray-400 max-w-md mb-8 text-lg">
          Desculpe, não conseguimos encontrar o produto que você está procurando. Ele pode ter sido removido ou o link está incorreto.
        </p>
        <Anchor
          to="/"
          className="bg-accent-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-pink-600 transition-colors hover:scale-105 transform duration-200"
        >
          Voltar para a Loja
        </Anchor>
      </main>
    </div>
  );
};
