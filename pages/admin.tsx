import DashboardLayout from '../components/layouts/admin'
import Head from 'next/head'
const Layout = () => {
  return (
    <>
      <Head>
        <title>Dashboard Admin</title>
      </Head>
      <DashboardLayout>
        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 28 30"
                  >
                    <path
                      fill="currentColor"
                      d="M18.2 9.089c0 2.448-1.88 4.433-4.2 4.433-2.32 0-4.2-1.985-4.2-4.433 0-2.449 1.88-4.433 4.2-4.433 2.32 0 4.2 1.984 4.2 4.433zM25.2 12.044c0 1.633-1.254 2.956-2.8 2.956-1.546 0-2.8-1.323-2.8-2.956 0-1.632 1.254-2.955 2.8-2.955 1.546 0 2.8 1.323 2.8 2.955zM19.6 22.389c0-3.265-2.507-5.911-5.6-5.911-3.093 0-5.6 2.646-5.6 5.91v4.434h11.2V22.39zM8.4 12.044C8.4 13.677 7.146 15 5.6 15c-1.546 0-2.8-1.323-2.8-2.956 0-1.632 1.254-2.955 2.8-2.955 1.546 0 2.8 1.323 2.8 2.955zM22.4 26.822V22.39c0-1.558-.38-3.022-1.049-4.294.335-.091.687-.14 1.049-.14 2.32 0 4.2 1.985 4.2 4.434v4.433h-4.2zM6.649 18.095A9.214 9.214 0 005.6 22.389v4.433H1.4V22.39c0-2.449 1.88-4.433 4.2-4.433.362 0 .714.048 1.049.139z"
                    ></path>
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">3,456</h4>
                  <div className="text-gray-500">New Users</div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-green-600 bg-opacity-75">    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 28 28"
                >
                  <path
                    fill="currentColor"
                    d="M4.2 1.4a1.4 1.4 0 000 2.8h1.707l.428 1.711.014.059 1.9 7.6L7 14.82c-1.763 1.764-.514 4.78 1.98 4.78H21a1.4 1.4 0 000-2.8H8.98l1.4-1.4h9.22a1.4 1.4 0 001.252-.774l4.2-8.4A1.4 1.4 0 0023.8 4.2H8.793l-.435-1.74A1.4 1.4 0 007 1.4H4.2zM22.4 23.1a2.1 2.1 0 11-4.2 0 2.1 2.1 0 014.2 0zM9.1 25.2a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2z"
                  ></path>
                </svg></div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">300,621</h4>
                  <div className="text-gray-500">Total Orders</div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.2h14l1.4 12.6H5.6L7 11.2z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M9.8 8.4a4.2 4.2 0 018.4 0v4.2a4.2 4.2 0 11-8.4 0V8.4z"
                    ></path>
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">234,676</h4>
                  <div className="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Layout