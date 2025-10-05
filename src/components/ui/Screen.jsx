const Screen = ({ active = false, children }) => {
  return (
    <div className={`
      w-full h-full absolute top-0 left-0
      flex-col justify-center items-center p-10
      ${active ? 'flex' : 'hidden'}
    `}>
      {children}
    </div>
  );
};

export default Screen;
