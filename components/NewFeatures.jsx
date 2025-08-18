import { MdArrowOutward } from 'react-icons/md';
import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle, link }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[180px] md:min-w-[210px]">
    {/* Icon */}
    <div className={`${styles.flexCenter} w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img
        src={imgUrl}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>

    {/* Title */}
    <h1 className="mt-6 sm:mt-6 font-bold text-[20px] sm:text-[24px] leading-[26px] sm:leading-[30px] text-white">
      {title}
    </h1>

    {/* Subtitle */}
    <p className="flex-1 mt-4 sm:mt-4 font-normal text-[14px] sm:text-[18px] text-[#b0b0b0] leading-[22px] sm:leading-[32px]">
      {subtitle}
    </p>

    {/* Link */}
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex-1 mt-4 sm:mt-4 font-normal text-[14px] sm:text-[18px] text-white leading-[20px] sm:leading-[32px]"
    >
      <span className="flex items-center gap-2 sm:gap-3 underline">
        Read More... <MdArrowOutward className="text-[16px] sm:text-[18px]" />
      </span>
    </a>
  </div>
);

export default NewFeatures;
