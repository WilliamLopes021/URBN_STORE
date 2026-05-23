import { Crown } from "lucide-react";
import { Avatar } from "../atoms/Avatar";
import ProfileStats from "../molecules/ProfileStats";
import TierCard from "../molecules/TierCard";

export const ProfileHeader = ({ user }) => (
  <div className="flex items-start gap-6 px-6 py-6 border-b border-border">
    <Avatar src={user.avatar} alt={user.name} />

    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h1 className="font-black text-3xl uppercase tracking-wider leading-none text-text-primary">
          {user.name}
        </h1>
        <Crown size={20} className="text-accent-pink" />
      </div>
      <ProfileStats stats={user.stats} />
    </div>

    <TierCard
      tier={user.tier}
      description="Top Tier. Exclusive access. You've unlocked it all."
      onViewBenefits={user.onViewBenefits}
    />
  </div>
);
