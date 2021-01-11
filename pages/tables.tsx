import DashboardLayout from '../components/layouts/admin'
import Head from 'next/head'

const LayoutTables = () => {
  return (
    <>
      <Head>
        <title>Table UI</title>
      </Head>
      <DashboardLayout>
        <h3 className="text-gray-700 text-3xl font-medium">Tables</h3>
      </DashboardLayout>
    </>
  )
}

export default LayoutTables