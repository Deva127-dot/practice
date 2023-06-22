import logo from './logo.svg';
import './App.css';
import GoogleDoc from './Google Doc/GoogleDoc';
import Practice1 from './Practice Day1.1/Practice1';
import InputBox from './Practice DAy 1.2/InputBox';
import Registration from './Practice Day 1.3/Registration';
import MyComponent from './ReactQuill/ReactQuill';
import PracticeProps from './Props Data/PracticeProps';
import PracticeProps2 from './Props Data/PracticeProps2';
import UpdatedGDoc from './Google Doc/UpdatedGDoc';
import GDoc2 from './Google Doc/GDoc2';
import LoginForm from './Free Time Practice/LoginForm';
import Practice2A from './Practice Day 2.1/Practice2A';
import Props from './components/Props/Props';
import data from './Information.json'

export default function App() {
  return (
    <div className='app_main'>
      {/* <GoogleDoc /> */}
      {/* <UpdatedGDoc/> */}
      {/* <GDoc2/> */}
      {/* <Practice1 /> */}
      {/* <InputBox/> */}
      {/* <Registration/> */}
      {/* <MyComponent/> */}
      {/* <PracticeProps /> */}
      {/* <PracticeProps2/> */}
      {/* <LoginForm/> */}
      {/* <Practice2A/> */}
      <p className='para'>Information</p>
      {
          data.map((item)=>{
            return(
            <Props 
              id={item.id}
              fName={item.first_name}
              lName={item.last_name}
              email={item.email}
              gender={item.gender}
            />
            )
          })
        }
          </div>
  );
}