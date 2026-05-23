import SectionHeader from "../atoms/SectionHeader";
import AddressCard from "../molecules/AddressCard";

const SavedAddresses = ({ addresses = [], onManage, onEdit }) => (
  <div>
    <SectionHeader
      title="Saved Addresses"
      actionLabel="Manage Addresses"
      onAction={onManage}
    />
    <div className="flex flex-col gap-3">
      {addresses.map((addr, i) => (
        <AddressCard key={i} {...addr} onEdit={() => onEdit?.(addr, i)} />
      ))}
    </div>
  </div>
);

export default SavedAddresses;
