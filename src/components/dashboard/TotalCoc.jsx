const TotalCoc = () => {
    return (
      <div className="h-72">
        <div className='w-48 p-4 bg-white border border-gray-200 rounded-lg shadow m-1 h-full flex flex-col justify-between'>
          <div className='mb-1 self-start'>Total COC created this month</div>
          <div className='mt-auto'>
            <p className='mb-1 font-extrabold text-6xl'>2460</p>
            <h5 className='mb-2 font-semibold tracking-tight text-gray-900'>
             <span className="text-green-400"> +23% </span>since last month
            </h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default TotalCoc;
  