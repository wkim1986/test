const Gap = ({ data }: any) => {
  const height = data?.height || '0px';

  return (
    <div style={{
      height,
      width: '100%',
      flexShrink: 0,
      margin: '-10px 0'
    }} />
  );
};

export default Gap;