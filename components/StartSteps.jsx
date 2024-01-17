
import { FaLaptopCode } from 'react-icons/fa';
import styles from '../styles';

const StartSteps = ({ text }) => (
  <div className={`${styles.flexCenter}flex-row items-center`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white"><FaLaptopCode className="text-2xl" /> </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p>

  </div>
);

export default StartSteps;
