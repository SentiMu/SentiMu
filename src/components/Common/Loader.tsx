interface LoaderProps {
  isLanding?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLanding }) => {
  return (
    <div className={`flex ${isLanding ? 'h-screen' : 'h-full'} items-center justify-center bg-white dark:bg-black`}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
