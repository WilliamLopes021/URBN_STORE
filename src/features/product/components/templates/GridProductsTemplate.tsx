import { Anchor } from "@/interfaces/router/Link";
import { Card } from "@/shared/components/atoms/Card";

export const GridProductTemplate = ({ products, label }) => {
  return (
    <>
      <div className="text-text-primary flex justify-between px-10 py-4">
        <h2 className="text-3xl uppercase tracking-wider font-bold">
          {label}{" "}
          <span className="text-accent-blue text-xl">
            ({products.length} Itens)
          </span>
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <p className="uppercase">Ordenar por:</p>
          <select
            name=""
            id=""
            className="border border-border px-2 bg-surface cursor-pointer text-text-primary uppercase tracking-widest font-light"
          >
            <option value="" className="text-sm font-light">
              Nome
            </option>
            <option value="" className="text-sm font-light">
              Preço
            </option>
            <option value="" className="text-sm font-light">
              Data
            </option>
          </select>
        </div>
      </div>
      <main className="flex flex-wrap px-10 py-4 gap-2 bg-surface">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="w-[240px] h-[300px]">
              <img
                className="w-full h-full object-center"
                src={product.images[0]}
                alt={product.name}
              />
            </div>
            <div className="text-text-primary uppercase py-4 w-full px-2">
              <p>{product.name}</p>
              <p className="text-accent-blue">{product.price}</p>

              <Anchor to={`/product/${product.id}`}>
                <button className="bg-accent py-2 px-6 rounded-sm my-2 hover:bg-accent/90 hover:cursor-pointer transition-all duration-200">
                  Ver Produto
                </button>
              </Anchor>
            </div>
          </Card>
        ))}
      </main>
    </>
  );
};
