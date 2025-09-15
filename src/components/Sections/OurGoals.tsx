import React from 'react';
import { FeatureItem, whyusdata } from '../../../types';
// import styles from '../../styles/OurGoals.scss'; // SCSS Module
import '../../styles/OurGoals.scss';
export default function OurGoals({ goals }: { goals: whyusdata }) {
  const features = goals.features;
  return (
    <div className="w-full py-12 flex justify-center items-center">
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-6 items-center !justify-center">
        
        {/* Group1 */}
        <div className="relative bg-primaryCard dark:bg-darkCard  max-h-[420px] rounded-3xl w-[381px] overflow-hidden z-0 justify-self-center self-center">
          <h3 className="goalTitle ">العدل</h3>
          <img src="/assets/images/goals.png" alt="goals" className="z-10" />
        </div>

        {/* Group2 */}
        <div className="lg:ltr:ml-8 lg:rtl:mr-8 lg:col-span-3 min-h-[400px] gap-8 rounded-2xl p-8 bg-[var(--card)] flex flex-col">
          <div className="rounded-full p-3 gap-2 w-14 h-14 bg-white flex items-center justify-center">
            <img src="/assets/icons/hero-3.png" alt="icon" />
          </div>

          <div className="flex flex-col gap-10">
            <div className="gap-5 flex flex-col">
              <h3 className="font-bold text-[40px] text-primaryFont dark:text-darkFont">
                {goals.title}
              </h3>
              <p className="text-SharedFontSub">{goals.description}</p>
            </div>

            <div className="flex lg:flex-row flex-col">
              <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 list-disc lg:w-full min-h-[88px] gap-2 pl-5">
                {features.map((goal: FeatureItem) => (
                  <li key={goal.id} className="text-SharedFontSub pt-3 font-[Din]">
                    {goal.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
