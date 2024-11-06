import Text from "../atoms/Text"

const Input = () => {
  return (
    <div className="">
            <Text 
            text="Email address"
            paddyng="pt-[40px] pb-[8px]"
        />
      <div>
      <input className="w-[376px] px-[24px] py-[16px] rounded-[8px] border border-[rgba(25,24,43,0.25)] font-roboto text-[16px] font-normal leading-[150%]" placeholder="email@company.com" type="text" />
      </div>
    </div>
  )
}

export default Input