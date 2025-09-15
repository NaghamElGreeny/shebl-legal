import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FeatureItem } from "../../../types";

export default function FeatureCard({ feature }: { feature: FeatureItem }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="card place-items-center" ref={ref}>
      <div className="icon" dir="ltr">
        {/* <h2 className="number font-bold md:text-[40px] text-[20px]">
          {inView ? (
            <CountUp end={Number(feature.value)} duration={3} />
          ) : (
            0
          )}
        </h2> */}
           {/* <h2 className="font-bold text-[clamp(1.5rem,4vw,2.5rem)]"> */}
           <h2 className="font-bold ">
          {inView ? <CountUp end={Number(feature.value)} duration={3} /> : 0}
        </h2>
        <div className="plus relative">
          +
          <Image
            src={feature.icon}
            alt={feature.key}
            // className="img left-5"
            className="img"
            width={40}
            height={40}
          />
        </div>
      </div>
      <p>{feature.key}</p>
    </div>
  );
}