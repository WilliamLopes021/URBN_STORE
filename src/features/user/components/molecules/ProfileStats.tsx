import StatItem from "../atoms/StatItem";

const ProfileStats = ({ stats = [] }) => (
  <div className="flex items-center gap-5 flex-wrap">
    {stats.map((stat, i) => (
      <div key={i} className="flex items-center gap-5">
        <StatItem {...stat} />
        {i < stats.length - 1 && (
          <div
            className="h-7 w-px flex-shrink-0"
            style={{ background: "#2a2a2a" }}
          />
        )}
      </div>
    ))}
  </div>
);

export default ProfileStats;
