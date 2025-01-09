import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  

  return (
    <>
      <div className="bg-gradient-to-r from-gray-200 to-gray-400 min-h-screen">
        <div className="flex justify-between items-center p-8">
          <div>
            Switch
          </div>
          <div className='w-1/3'>
            <Input 
                placeholder="Search for your preferred city" 
                prefix={<SearchOutlined style={{ fontSize: '20px' }} />} 
                className="pl-5  pr-4 py-2 rounded-full bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
            />
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
              Current Location
            </button>
          </div>
        </div>
        {/* <section className='flex justify-between p-8 shadow-xl'>
          <div className='w-1/3 h-3 bg-red-300'></div>
          <div className='w-2/3 h-3  bg-red-300' ></div>
        </section> */}
      </div>
      
    </>
  )
}

export default App
