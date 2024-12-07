const Dashboard = () => {
  return (
    <div className="h-auto">
      <div className="flex justify-center items-start mb-6 flex-col">
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="bg-white border border-gray-100 p-4 rounded-md w-full h-28 flex flex-row items-center justify-between md:justify-center text-right md:text-left">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </div>

            <div className="mx-8">
              <p className="text-xl font-bold">12</p>
              <p className="text-gray-600">Total Grievances</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-4 rounded-md w-full h-28 flex flex-row items-center justify-between md:justify-center text-right md:text-left">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <div className="mx-8">
              <p className="text-xl font-bold">1</p>
              <p className="text-gray-600">Total Closed</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-4 rounded-md w-full h-28 flex flex-row items-center justify-between md:justify-center text-right md:text-left">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <div className="mx-8">
              <p className="text-xl font-bold">1</p>
              <p className="text-gray-600">Monthly Grievance</p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-4 rounded-md w-full h-28 flex flex-row items-center justify-between md:justify-center text-right md:text-left">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="mx-8">
              <p className="text-xl font-bold">3</p>
              <p className="text-gray-600">Monthly Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Recent Grievances</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold rounded-lg flex justify-center items-center w-32 h-10 text-yellow-900 bg-yellow-100">
              Received
            </h4>
          </div>

          <div>
            <h4 className="font-semibold rounded-lg flex justify-center items-center w-32 h-10 text-orange-900 bg-orange-100">
              In Progress
            </h4>
          </div>

          <div>
            <h4 className="font-semibold rounded-lg flex justify-center items-center w-32 h-10 text-primary-900 bg-primary-100">
              Closed
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
