// Infra & Services
import { AxiosHttpClient } from "@/infra/adapters/axiosAdapter";
import { UuidGenerator } from "@/infra/services/UuidGenerator";
import { CurrencyAndMoneyNormalizer } from "@/infra/money/Currency&MoneyNormalizer";
import { MoneyFactory } from "@/domain/factories/MoneyFactory";

// Adapters
import { AuthApiAdapter } from "@/infra/adapters/api/AuthApiAdapter";
import { ClientApiAdapter } from "@/infra/adapters/api/ClientApiAdapter";
import { CategoryApiAdapter } from "@/infra/adapters/api/CategoryApiAdapter";
import { ProductApiAdapter } from "@/infra/adapters/api/ProductApiAdapter";
import { OrderApiAdapter } from "@/infra/adapters/api/OrderApiAdapter";
import { PaymentApiAdapter } from "@/infra/adapters/api/PaymentApiAdapter";
import { AdminApiAdapter } from "@/infra/adapters/api/AdminApiAdapter";

// Use Cases - Auth
import { LoginUseCase } from "@/application/modules/auth/use-cases/LoginUseCase";
import { LogoutUseCase } from "@/application/modules/auth/use-cases/LogoutUseCase";
import { RefreshUseCase } from "@/application/modules/auth/use-cases/RefreshUseCase";

// Use Cases - Category
import { CreateCategoryUseCase } from "@/application/modules/category/use-cases/CreateCategoryUseCase";
import { EditCategoryUseCase } from "@/application/modules/category/use-cases/EditCategoryUseCase";
import { DeleteCategoryUseCase } from "@/application/modules/category/use-cases/DeleteCategoryUseCase";
import { GetCategoryUseCase } from "@/application/modules/category/use-cases/GetCategoryUseCase";
import { GetAllCategoriesUseCase } from "@/application/modules/category/use-cases/GetAllCategoriesUseCase";

// Use Cases - Product
import { CreateProductUseCase } from "@/application/modules/product/use-cases/CreateProduct";
import { EditProductUseCase } from "@/application/modules/product/use-cases/EditProductUseCase";
import { DeleteProductUseCase } from "@/application/modules/product/use-cases/DeleteProductUseCase";
import { GetProductUseCase } from "@/application/modules/product/use-cases/GetProductUseCase";
import { GetAllProductsUseCase } from "@/application/modules/product/use-cases/GetAllProductsUseCase";

// Use Cases - Client
import { CreateClientUseCase } from "@/application/modules/client/use-cases/CreateClientUseCase";
import { EditClientUseCase } from "@/application/modules/client/use-cases/EditClientUseCase";
import { DeleteClientUseCase } from "@/application/modules/client/use-cases/DeleteClientUseCase";
import { GetClientUseCase } from "@/application/modules/client/use-cases/GetClientUseCase";

// Use Cases - Order
import { CreateOrderUseCase } from "@/application/modules/order/use-cases/CreateOrder";
import { EditOrderUseCase } from "@/application/modules/order/use-cases/EditOrder";
import { CancelOrderUseCase } from "@/application/modules/order/use-cases/CancelOrder";
import { GetOrderUseCase } from "@/application/modules/order/use-cases/GetOrder";

// Use Cases - Payment
import { ProcessPaymentUseCase } from "@/application/modules/payment/use-cases/ProcessPaymentUseCase";
import { CancelPaymentUseCase } from "@/application/modules/payment/use-cases/CancelPaymentUseCase";
import { RefundPaymentUseCase } from "@/application/modules/payment/use-cases/RefundPaymentUseCase";
import { GetPaymentUseCase } from "@/application/modules/payment/use-cases/GetPaymentUseCase";
import { GetAllPaymentsUseCase } from "@/application/modules/payment/use-cases/GetAllPaymentsUseCase";

// Use Cases - Admin
import { CreateAdminUseCase } from "@/application/modules/admin/use-cases/CreateAdminUseCase";
import { EditAdminUseCase } from "@/application/modules/admin/use-cases/EditAdminUseCase";
import { DeleteAdminUseCase } from "@/application/modules/admin/use-cases/DeleteAdminUseCase";
import { GetAdminUseCase } from "@/application/modules/admin/use-cases/GetAdminUseCase";
import type { AuthCallbacks } from "@/infra/adapters/axiosAdapter";

// 1. Instanciar Core Infra e Factories

export function bootstrap() {
  const authCallbacks: AuthCallbacks = {
    refresh: async () => {},
    unauthorized: async () => {},
  };

  const httpClient = new AxiosHttpClient(authCallbacks);

  const idGenerator = new UuidGenerator();
  const moneyNormalizer = new CurrencyAndMoneyNormalizer();
  const moneyFactory = new MoneyFactory(moneyNormalizer);

  // 2. Instanciar Adapters
  const authAdapter = new AuthApiAdapter(httpClient);
  const clientAdapter = new ClientApiAdapter(httpClient);
  const categoryAdapter = new CategoryApiAdapter(httpClient);
  const productAdapter = new ProductApiAdapter(httpClient);
  const orderAdapter = new OrderApiAdapter(httpClient);
  const paymentAdapter = new PaymentApiAdapter(httpClient);
  const adminAdapter = new AdminApiAdapter(httpClient);

  // 3. Instanciar Use Cases
  const useCases = {
    auth: {
      login: new LoginUseCase(authAdapter),
      logout: new LogoutUseCase(authAdapter),
      refresh: new RefreshUseCase(authAdapter),
    },
    category: {
      create: new CreateCategoryUseCase(idGenerator, categoryAdapter),
      edit: new EditCategoryUseCase(categoryAdapter),
      delete: new DeleteCategoryUseCase(categoryAdapter),
      get: new GetCategoryUseCase(categoryAdapter),
      getAll: new GetAllCategoriesUseCase(categoryAdapter),
    },
    product: {
      create: new CreateProductUseCase(
        idGenerator,
        productAdapter,
        moneyFactory,
      ),
      edit: new EditProductUseCase(productAdapter),
      delete: new DeleteProductUseCase(productAdapter),
      get: new GetProductUseCase(productAdapter),
      getAll: new GetAllProductsUseCase(productAdapter),
    },
    client: {
      create: new CreateClientUseCase(idGenerator, clientAdapter),
      edit: new EditClientUseCase(clientAdapter),
      delete: new DeleteClientUseCase(clientAdapter),
      get: new GetClientUseCase(clientAdapter),
    },
    order: {
      create: new CreateOrderUseCase(idGenerator, orderAdapter, productAdapter),
      edit: new EditOrderUseCase(orderAdapter),
      cancel: new CancelOrderUseCase(orderAdapter),
      get: new GetOrderUseCase(orderAdapter),
    },
    payment: {
      process: new ProcessPaymentUseCase(
        idGenerator,
        paymentAdapter,
        orderAdapter,
      ),
      cancel: new CancelPaymentUseCase(paymentAdapter),
      refund: new RefundPaymentUseCase(paymentAdapter),
      get: new GetPaymentUseCase(paymentAdapter),
      getAll: new GetAllPaymentsUseCase(paymentAdapter),
    },
    admin: {
      create: new CreateAdminUseCase(idGenerator, adminAdapter),
      edit: new EditAdminUseCase(adminAdapter),
      delete: new DeleteAdminUseCase(adminAdapter),
      get: new GetAdminUseCase(adminAdapter),
    },
  };

  // 4. Configurar Http Client com Callbacks de Autenticação
  httpClient.setCallbacks({
    refresh: async () => useCases.auth.refresh.execute(),
    unauthorized: async () => useCases.auth.logout.execute(),
  });

  return {
    httpClient,
    useCases,
  };
}
