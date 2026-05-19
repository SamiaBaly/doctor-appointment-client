const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] gap-4">
      <span className="loading loading-spinner loading-xl text-sky-500"></span>

      <p className="text-gray-500 font-medium">Loading your appointments...</p>
    </div>
  );
};

export default Loading;
