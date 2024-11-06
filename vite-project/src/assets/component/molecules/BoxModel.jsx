import DoneTasks from "../atoms/DoneTasks"
import Text from "../atoms/Text"
import Button from "./Button"
import Input from "./Input"
import ContentImg from '../images/image.png'
const BoxModel = () => {
  return (
    <div className="flex items-center bg-white rounded-[36px] py-[24px] pr-[24px] pl-[64px]">
      <div className="mr-[65px]">
        <h1 className="text-[#242742] text-[56px] font-bold leading-[100%]">Stay updated!</h1>
        <Text 
          text="Join 60,000+ product managers receiving monthly updates on:"
          paddyng="py-[24px]"
        />
        <DoneTasks />
        <Input />
        <Button />
      </div>  
      <div>
        <img src={ContentImg} alt="img" />
      </div>
    </div>
  )
}

export default BoxModel