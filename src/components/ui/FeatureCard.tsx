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
        <h2>
          {inView ? (
            <CountUp end={Number(feature.value)} duration={3} />
          ) : (
            0
          )}
        </h2>
        <div className="plus relative">
          +
          <Image
            src={feature.icon}
            alt={feature.key}
            className="left-5"
            width={40}
            height={40}
          />
        </div>
      </div>
      <p>{feature.key}</p>
    </div>
  );
}
