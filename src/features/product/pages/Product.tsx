import { Footer } from "@/shared/components/molecules/Footer";
import { NavBar } from "@/shared/components/molecules/NavBar";
import { DisplayProductImage } from "../components/molecules/DisplayProductImage";
import { DisplayProductDescription } from "../components/molecules/DisplayProductDescription";
import { useRouterParams } from "@/interfaces/router/useParams";
import { products } from "../constants/mockProducts";
import { SubTitle } from "@/shared/components/atoms/SubTitle";
import { ProductCard } from "../components/atoms/ProductCard";
import { CustomerReviews } from "../components/organism/ReviewSection";
import { reviews } from "../constants/mockReviews";
import { averageRate } from "../services/averageRate";

export const Product = () => {
  const { id } = useRouterParams();
  const product = products.find((product) => product.id === id);
  const { averageRating, totalCount } = averageRate(reviews, id);

  return (
    <>
      <NavBar />
      <DisplayProductImage images={product.images} />
      <DisplayProductDescription
        name={product.name}
        price={product.price}
        description={product.description}
        sizes={product.sizes}
        images={product.images}
        category={product.category}
      />
      <section className="p-6 border-t border-dark-gray text-text-primary max-w-[1000px] mx-auto w-full">
        <header className="text-2xl">
          <SubTitle>Produtos similares</SubTitle>
        </header>
        <div className="flex mt-4 gap-3 overflow-y-hidden">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images[0]}
              text={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto w-full border-t border-dark-gray">
        <CustomerReviews
          reviews={reviews}
          averageRating={averageRating}
          totalCount={totalCount}
        />
      </section>
      <Footer />
    </>
  );
};
