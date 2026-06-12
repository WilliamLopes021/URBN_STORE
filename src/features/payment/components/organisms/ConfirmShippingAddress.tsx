import { useState } from "react";
import { MapPin, Pencil, Truck } from "lucide-react";

interface Address {
  recipientName: string;
  street: string;
  number: string;
  apartment: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
}

interface ConfirmShippingAddressProps {
  address: Address;
  setAddress: (address: Address) => void;
}

export const ConfirmShippingAddress = ({
  address,
  setAddress,
}: ConfirmShippingAddressProps) => {
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState<Address>({ ...address });

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setAddress({ ...tempAddress });
    setIsEditingAddress(false);
  };

  return (
    <section className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-border-strong">
      <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
        <div className="flex items-center gap-3">
          <MapPin className="text-accent-pink size-6" />
          <h2 className="text-lg font-black uppercase tracking-wider">
            Endereço de Entrega
          </h2>
        </div>
        {!isEditingAddress && (
          <button
            onClick={() => {
              setTempAddress({ ...address });
              setIsEditingAddress(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:bg-dark-gray/30 hover:border-accent-pink/50 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            <Pencil size={12} className="text-accent-pink" />
            Alterar
          </button>
        )}
      </div>

      {isEditingAddress ? (
        <form onSubmit={handleSaveAddress} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                Destinatário
              </label>
              <input
                type="text"
                required
                value={tempAddress.recipientName}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    recipientName: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                CEP
              </label>
              <input
                type="text"
                required
                value={tempAddress.zip}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    zip: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                Rua / Logradouro
              </label>
              <input
                type="text"
                required
                value={tempAddress.street}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    street: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                Número
              </label>
              <input
                type="text"
                required
                value={tempAddress.number}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    number: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                Complemento / Bloco
              </label>
              <input
                type="text"
                value={tempAddress.apartment}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    apartment: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                Bairro
              </label>
              <input
                type="text"
                required
                value={tempAddress.neighborhood}
                onChange={(e) =>
                  setTempAddress({
                    ...tempAddress,
                    neighborhood: e.target.value,
                  })
                }
                className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    required
                    value={tempAddress.city}
                    onChange={(e) =>
                      setTempAddress({
                        ...tempAddress,
                        city: e.target.value,
                      })
                    }
                    className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-light-gray font-semibold mb-1">
                    UF
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={2}
                    value={tempAddress.state}
                    onChange={(e) =>
                      setTempAddress({
                        ...tempAddress,
                        state: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full bg-card-bg border border-border focus:border-accent-pink rounded-md p-3 text-sm text-text-primary outline-none transition-colors text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsEditingAddress(false)}
              className="px-4 py-2 border border-border hover:bg-dark-gray/30 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-accent-pink hover:bg-accent-pink/80 rounded-md text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              Salvar
            </button>
          </div>
        </form>
      ) : (
        <div className="p-4 bg-card-bg/60 border border-border/50 rounded-lg flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-bold text-text-primary text-base">
              {address.recipientName}
            </p>
            <p className="text-sm text-light-gray/80">
              {address.street}, {address.number}{" "}
              {address.apartment && `· ${address.apartment}`}
            </p>
            <p className="text-xs text-light-gray/60">
              {address.neighborhood}, {address.city} - {address.state} ·{" "}
              {address.zip}
            </p>
          </div>
          <div className="bg-accent-pink/10 p-2.5 rounded-full text-accent-pink shrink-0 hidden md:block">
            <Truck size={20} />
          </div>
        </div>
      )}
    </section>
  );
};
