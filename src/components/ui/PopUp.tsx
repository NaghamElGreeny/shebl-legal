// 'use client';

// import React, { useEffect, useState } from 'react';
// import { getPrivacy, getTerms } from '../../../services/ClientApiHandler';

// interface PopupData {
//   id: number;
//   type: 'terms' | 'privacy';
//   title: string;
//   description: string;
// }

// export default function Popup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [popupData, setPopupData] = useState<PopupData | null>(null);
//   const [privacy, setPrivacy] = useState<PopupData | null>(null);
//   const [terms, setTerms] = useState<PopupData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [privacyRes, termsRes] = await Promise.all([getPrivacy(), getTerms()]);
//         setPrivacy(privacyRes?.privacy || null);
//         setTerms(termsRes?.terms || null);
//       } catch (err) {
//         console.error('Error fetching popup data:', err);
//       }
//     };

//     fetchData();
//   }, []);

//   const openPopupWithData = (data: PopupData) => {
//     setPopupData(data);
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//     setPopupData(null);
//   };

//   return (
//     <div className="flex flex-row gap-4">
//       {/* Terms Button */}
//       {terms && (
//         <button
//           onClick={() => openPopupWithData({ ...terms, type: 'terms' })}
//         >
//           <p>{terms.title}</p>
//         </button>
//       )}

//       {/* Privacy Button */}
//       {privacy && (
//         <button
//           onClick={() => openPopupWithData({ ...privacy, type: 'privacy' })}
//         >
//           <p>{privacy.title}</p>
//         </button>
//       )}

//       {/* Popup */}
//       {isOpen && popupData && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5 w-full">
//           <div className="bg-white dark:bg-darkBg rounded-2xl shadow-xl w-3/4 p-6 relative">
//             <button
//               onClick={closePopup}
//               className="absolute top-1 left-5 text-red-500 hover:text-red-700"
//               aria-label="Close popup"
//             >
//               <span className="text-4xl font-bold">×</span>
//             </button>

//             <div className="p-4 overflow-y-auto max-h-[70vh]">
//               <h2 className="text-xl font-bold mb-4 text-primaryFont dark:text-darkFont">
//                 {popupData.title}
//               </h2>
//               <div
//                 className="text-sm leading-relaxed text-primaryFont dark:text-darkFont"
//                 dangerouslySetInnerHTML={{ __html: popupData.description }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import React, { useEffect, useState } from 'react';
import { getPrivacy, getTerms } from '../../../services/ClientApiHandler';

interface PopupData {
  id: number;
  type: 'terms' | 'privacy';
  title: string;
  description: string;
}

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState<PopupData | null>(null);
  const [privacy, setPrivacy] = useState<PopupData | null>(null);
  const [terms, setTerms] = useState<PopupData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [privacyRes, termsRes] = await Promise.all([getPrivacy(), getTerms()]);
        setPrivacy(privacyRes?.privacy || null);
        setTerms(termsRes?.terms || null);
      } catch (err) {
        console.error('Error fetching popup data:', err);
      }
    };

    fetchData();
  }, []);

  const openPopup = (data: PopupData) => {
    setPopupData(data);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupData(null);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Render Buttons */}
      {[terms, privacy].map(
        (item) =>
          item && (
            <button
              key={item.id}
              onClick={() => openPopup(item)}
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              {item.title}
            </button>
          )
      )}

      {/* Popup Modal */}
      {isOpen && popupData && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="bg-white dark:bg-darkBg rounded-2xl shadow-xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-2xl"
              aria-label="Close popup"
            >
              &times;
            </button>

            {/* Popup Content */}
            <div className="p-2 overflow-y-auto max-h-[70vh]">
              <h2
                id="popup-title"
                className="text-lg md:text-xl font-bold mb-4 text-primaryFont dark:text-darkFont"
              >
                {popupData.title}
              </h2>
              <div
                className="text-sm md:text-base leading-relaxed text-primaryFont dark:text-darkFont space-y-3"
                dangerouslySetInnerHTML={{ __html: popupData.description }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
