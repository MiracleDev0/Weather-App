import { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <div className={`${isLightMode? 'bg-gradient-to-r from-gray-200 to-gray-500': 'bg-gradient-to-r from-gray-500 to-gray-900 '} min-h-screen`}>
        <div className="flex justify-between items-center p-8">
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isLightMode}
              onChange={toggleLightMode} 
            />
            <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isLightMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </label>
        </div>
          <div className='w-1/3'>
            <Input 
                placeholder="Search for your preferred city" 
                prefix={<SearchOutlined style={{ fontSize: '20px' }} />} 
                className="pl-5  pr-4 py-2 rounded-full bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
            />
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full">
              Current Location
            </button>
          </div>
          
        </div>
        <div className="container mx-auto max-w-screen-xl p-8">
          <div className="grid grid-cols-[2fr_3fr] gap-8"> {/* Grid layout */}

            {/* Location and Time */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center "> 
              {/* ... (Location, Time, Date) */}
            </div>

            {/* Weather Info */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
              {/* ... (Temperature, Feels like, Humidity, etc.) */}
            </div>

          </div>

          {/* Forecasts */}
          <div className="grid grid-cols-[1.8fr_3.2fr] gap-8 mt-8"> {/* Grid for forecasts */}

            {/* 5-Day Forecast */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              {/* ... (Forecast information) */}
            </div>

            {/* Hourly Forecast */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              {/* ... (Forecast information) */}
            </div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
