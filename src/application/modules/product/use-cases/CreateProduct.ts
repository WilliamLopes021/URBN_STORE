import { Product } from "@/domain/entities/Product/Product";
import { Name } from "@/domain/value-objects/Name";
import { Currency } from "@/domain/value-objects/Currency";
import { UniqueEntityId } from "@/domain/value-objects/UniqueEntityId";
import type { IdGenerator } from "@/application/interfaces/ports/IdGenerator";
import type { ProductApiPort } from "@/application/modules/product/ports/ProductApiPort";
import type { CreateProductInputDTO } from "../dtos/CreateProductDTO";
import { MoneyFactory } from "@/domain/factories/MoneyFactory";

export class CreateProductUseCase {
  private readonly idGenerator: IdGenerator;
  private readonly productApiPort: ProductApiPort;
  private readonly moneyFactory: MoneyFactory;

  constructor(
    idGenerator: IdGenerator,
    productApiPort: ProductApiPort,
    moneyFactory: MoneyFactory,
  ) {
    this.idGenerator = idGenerator;
    this.productApiPort = productApiPort;
    this.moneyFactory = moneyFactory;
  }

  async execute(input: CreateProductInputDTO): Promise<Product> {
    const { name, description, price, categoryId, stock, images } = input;

    const categoryIdVO = UniqueEntityId.create(categoryId);

    const id = this.idGenerator.generateUuid()
    const nameVO = Name.create(name);
    const currency = Currency.create("BRL");
    const priceVO = this.moneyFactory.create(price, currency);

    const product = Product.create({
      id,
      name: nameVO,
      description,
      price: priceVO,
      categoryId: categoryIdVO,
      stock,
      images,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productApiPort.create(product);

    return product;
  }
}
