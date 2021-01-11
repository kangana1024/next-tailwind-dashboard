import DashboardLayout from '../components/layouts/admin'
import Head from 'next/head'
const LayoutUI = () => {
  return (
    <>
      <Head>
        <title>Components UI</title>
      </Head>
      <DashboardLayout>
        <h3 className="text-gray-700 text-3xl font-medium">UI</h3>
      </DashboardLayout>
    </>
  )
}

export default LayoutUI