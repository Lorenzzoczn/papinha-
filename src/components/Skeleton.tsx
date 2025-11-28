type SkeletonProps = {
  width?: string | number;
  height?: number;
  radius?: number;
};

export const Skeleton = ({ width = '100%', height = 16, radius = 16 }: SkeletonProps) => (
  <div
    className="lp-skeleton"
    style={{
      width,
      height,
      borderRadius: radius,
    }}
  />
);

export default Skeleton;

