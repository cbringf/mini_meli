import { NextPage } from "next";

export type SliderProps = {
  pictures: string[];
};

const Slider: NextPage<SliderProps> = ({ pictures }) => {
  return <img src={pictures[0]} width="480px" />;
};

export default Slider;
