type EmptyStateProps = {
  title: string;
  description: string;
  icon?: string;
};

export const EmptyState = ({ title, description, icon = '🍲' }: EmptyStateProps) => (
  <div className="lp-empty-state">
    <span className="emoji">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default EmptyState;

