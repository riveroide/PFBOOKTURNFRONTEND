import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

const StepsContents = ({ stepnum ,setbookingPost, bookingPost }) => {


if(stepnum===1) return (<div className='h-full'>
  <Step1 setbookingPost={setbookingPost} bookingPost={bookingPost}/>
</div>)
if(stepnum===2) return (<div>
  <Step2 setbookingPost={setbookingPost} bookingPost={bookingPost}/>
</div>)
  return (<div>
    <Step3 setbookingPost={setbookingPost} bookingPost={bookingPost}/>
  </div>
  )
}

export default StepsContents