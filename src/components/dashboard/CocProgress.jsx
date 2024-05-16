const CocProgress = () => {
    const cocPro = [
        {
            name: "Addis Ababa",
            progress: "85%"
        },
        {
            name: "Dire Dawa",
            progress: "55%"
        }, 
        {
            name: "Gonder",
            progress: "35%"
        },
        {
            name: "Oromia",
            progress: "55%"
        },
        {
            name: "Sidama",
            progress: "45%"
        },
        {
            name: "Tigray",
            progress: "65%"
        },
        {
            name: "Yegbe",
            progress: "95%"
        }   
    ]

  return (
    <div className='p-2 bg-white border border-gray-200 rounded-lg shadow m-1 h-[438px]'>
        <h1 className="text-xl font-extrabold mb-10 mt-3">COC by City</h1>
        {
            cocPro.map((item, index) => (
                <div key={index} className='flex justify-between items-center mb-1 space-y-5'>
                    <div className='w-[120px] text-sm font-medium'>{item.name}</div>
                    <div className='w-[80%] bg-gray-200 rounded-full h-3'>
                        <div
                            className='bg-green-600 h-3 rounded-full'
                            style={{ width: `${item.progress}` }}
                        ></div>
                    </div>
                    <div className='ml-3 text-sm font-medium text-gray-600'>{item.progress}</div>
                </div>
            ))
        }
      {/* <div className='flex justify-between items-center mb-1'>
        <div className='w-[120px] text-sm font-medium'>Addis Ababa</div>
        <div className='w-[80%] bg-gray-200 rounded-full h-2.5'>
          <div
            className='bg-green-600 h-2.5 rounded-full'
            style={{ width: `85%` }}
          ></div>
        </div>
        <div className='ml-3 text-sm font-medium text-gray-600'>12,500</div>
      </div> */}
    </div>
  );
};

export default CocProgress;
