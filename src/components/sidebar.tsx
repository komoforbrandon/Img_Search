import { Link } from 'react-router-dom';
import { HomeIcon, Menu, X, HistoryIcon, Settings } from 'lucide-react';

type leftsideBarProp ={
    isLeftbar:boolean;
    changeIsLeftbar:(isLeftbar:boolean)=>void;
}
export default function Sidebar({isLeftbar, changeIsLeftbar}:leftsideBarProp) {
const hideWidth = 'w-14.5'
const closeSidebar = () => {
  changeIsLeftbar(false);
}

    return (
        <div className={`flex ${!isLeftbar ? hideWidth : 'w-fit'} bg-blue-500/40 h-screen overflow-hidden sticky top-0`}>
            <div className='w-65 m-2'>
                <div className='logo-container'>
                    <div className="flex flex-row justify-between mt-3 mb-10">
                        <button className='flex px-3 hover:bg-blue-500/50 hover:text-white hover:rounded-2xl w-40 p-3 my-1' onClick={() => changeIsLeftbar(!isLeftbar)}>
                            <Menu size={24} className='mr-3' /> 
                            <span className='font-extrabold text-blue-900 ml-1'>IMGSearch</span>
                        </button>
                        <button onClick={closeSidebar} className='hover:bg-blue-500/50 hover:text-white hover:rounded-2xl w-10 p-3 my-1'>
                            <X size={18} className='mr-3' />
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <Link to="/" >
                            <button className='flex hover:bg-blue-500/50 hover:text-white hover:rounded-2xl w-40 p-3 my-1'>
                                <HomeIcon size={24} className='mr-3.5' />
                                <span className='font-bold text-blue-950 m-1'>Home</span>

                            </button>
                        </Link>
                        <Link to="/history">
                        <button className='flex hover:bg-blue-500/50 hover:text-white hover:rounded-2xl w-40 p-3 my-1'>
                            <HistoryIcon size={24} className='mr-3.5' />
                            <span className='font-bold text-blue-950 m-1'>History</span>
                        </button>
                        </Link>
                        <Link to="/settings">
                        <button className='flex hover:bg-blue-500/50 hover:text-white hover:rounded-2xl w-40 p-3 my-1'>
                            <Settings size={24} className='mr-3.5' />
                         <span className='font-bold text-blue-950 m-1'>Settings</span>
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )

}
