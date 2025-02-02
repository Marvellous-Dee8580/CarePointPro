import React from 'react';
import { sessionHistoryData } from './ConsultationDummyData';

export default function ConsultationSessionHistory() {
  return (
    <div className="flex flex-col px-4 py-5 w-full bg-white rounded-3xl max-md:max-w-full">
      {/* Search and Date Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-60">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="w-[120px]">
          <input
            type="date"
            className="w-full px-3 py-2 border border-green-900 border-opacity-50 rounded-lg focus:outline-none"
          />
        </div>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-6 bg-gray-100 p-3 font-semibold text-green-900 rounded-t-lg">
        <div>Healthcare Provider</div>
        <div>Session Outcome</div>
        <div>Notes</div>
        <div>Duration</div>
        <div>Date</div>
        <div className="text-center">Virtual Type</div>
      </div>
      
      {/* Table Rows */}
      {sessionHistoryData.map((session, index) => (
        <div
          key={index}
          className={`grid grid-cols-6 p-3 text-gray-700 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div>{session.doctor}</div>
          <div>{session.outcome}</div>
          <div>{session.notes}</div>
          <div>{session.duration}</div>
          <div>{session.date}</div>
          <div className={`flex items-center justify-center ${session.status === 'missed' ? 'text-red-600' : 'text-green-900'}`}>
            {session.type === 'Video' && (
              <div className="flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2 w-5 h-5" style={{ fill: session.status === 'missed' ? 'red' : 'green' }}>
                  <path d="M12 12C11.45 12 10.9793 11.8043 10.588 11.413C10.1967 11.0217 10.0007 10.5507 10 10C9.99933 9.44933 10.1953 8.97867 10.588 8.588C10.9807 8.19733 11.4513 8.00133 12 8C12.5487 7.99867 13.0197 8.19467 13.413 8.588C13.8063 8.98133 14.002 9.452 14 10C13.998 10.548 13.8023 11.019 13.413 11.413C13.0237 11.807 12.5527 12.0027 12 12ZM6.5 9C6.78333 9 7.021 8.904 7.213 8.712C7.405 8.52 7.50067 8.28267 7.5 8C7.49933 7.71733 7.40333 7.48 7.212 7.288C7.02067 7.096 6.78333 7 6.5 7C6.21667 7 5.97933 7.096 5.788 7.288C5.59667 7.48 5.50067 7.71733 5.5 8C5.49933 8.28267 5.59533 8.52033 5.788 8.713C5.98067 8.90567 6.218 9.00133 6.5 9ZM5 21C4.71667 21 4.47933 20.904 4.288 20.712C4.09667 20.52 4.00067 20.2827 4 20C3.99933 19.7173 4.09533 19.48 4.288 19.288C4.48067 19.096 4.718 19 5 19H7.225L7.75 16.9C6.1 16.6167 4.72933 15.829 3.638 14.537C2.54667 13.245 2.00067 11.7327 2 10C2 8.05 2.67933 6.396 4.038 5.038C5.39667 3.68 7.05067 3.00067 9 3H15C16.95 3 18.6043 3.67933 19.963 5.038C21.3217 6.39667 22.0007 8.05067 22 10C22 11.7333 21.454 13.246 20.362 14.538C19.27 15.83 17.8993 16.6173 16.25 16.9L16.775 19H19C19.2833 19 19.521 19.096 19.713 19.288C19.905 19.48 20.0007 19.7173 20 20C19.9993 20.2827 19.9033 20.5203 19.712 20.713C19.5207 20.9057 19.2833 21.0013 19 21H5ZM12 14C13.1 14 14.0417 13.6083 14.825 12.825C15.6083 12.0417 16 11.1 16 10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10C8 11.1 8.39167 12.0417 9.175 12.825C9.95833 13.6083 10.9 14 12 14Z" fill="#026102"/>
                </svg> */}
                <span className="ml-2">{session.type}</span>
              </div>
            )}
            {session.type === 'Audio' && (
              <div className="flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2 w-5 h-5" style={{ fill: session.status === 'missed' ? 'red' : 'green' }}>
                  <path d="M19.8901 9.30342C20.0162 8.45313 19.9737 7.58632 19.7651 6.75242C19.4796 5.61302 18.8893 4.57283 18.0576 3.74342C17.2282 2.91149 16.188 2.32104 15.0486 2.03542C14.2146 1.82693 13.3478 1.78463 12.4976 1.91092M16.0951 8.90192C16.165 8.43784 16.1248 7.96382 15.9779 7.5181C15.8309 7.07239 15.5813 6.66744 15.2491 6.33592C14.9175 6.00372 14.5126 5.75408 14.0669 5.60713C13.6212 5.46018 13.1471 5.42003 12.6831 5.48992" stroke="#026102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.18817 3.39697C6.36654 3.39706 6.54164 3.44487 6.69532 3.53542C6.849 3.62597 6.97566 3.75598 7.06217 3.91197L8.28567 6.11497C8.36461 6.25714 8.40769 6.41642 8.41118 6.579C8.41466 6.74158 8.37845 6.90255 8.30567 7.04797L7.12717 9.40447C7.12717 9.40447 7.46867 11.1605 8.89767 12.5895C10.3272 14.0185 12.0772 14.3545 12.0772 14.3545L14.4332 13.176C14.5787 13.1032 14.7398 13.067 14.9025 13.0706C15.0651 13.0742 15.2245 13.1174 15.3667 13.1965L17.5767 14.425C17.7324 14.5117 17.8621 14.6384 17.9524 14.7921C18.0427 14.9457 18.0902 15.1208 18.0902 15.299V17.836C18.0902 19.1275 16.8902 20.061 15.6662 19.6475C13.1522 18.7995 9.25017 17.184 6.77617 14.711C4.30317 12.2375 2.68817 8.33497 1.83967 5.82097C1.42667 4.59697 2.35967 3.39697 3.68467 3.39697" stroke="#026102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> */}
                <span className="ml-2">{session.type}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}