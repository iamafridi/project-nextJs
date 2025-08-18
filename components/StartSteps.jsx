import { FaLaptopCode } from 'react-icons/fa';
import styles from '../styles';

const StartSteps = ({ text }) => (
  <div className={`${styles.flexCenter} flex-row items-center w-full`}>
    {/* Icon */}
    <div className={`${styles.flexCenter} w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <FaLaptopCode className="text-xl sm:text-2xl text-white" />
    </div>

    {/* Text */}
    <p className="flex-1 ml-3 sm:ml-6 font-normal text-[14px] sm:text-[18px] text-[#B0B0B0] leading-[20px] sm:leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
