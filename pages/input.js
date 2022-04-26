import styles from './input.module.css'
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Input() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState([]);

  const register = () => {
    axios.post('https://common.webudding.net/v1/event/coupon/list', {
      nickname: name,
      phone: phone,
    }).then((res)=>{
      const resultCode = res.data.resultCode
      console.log(res.data)
      if(resultCode === 1){
        setCode(res.data.data)
      }
      if(resultCode === -1) {
        window.alert('잘못된 요청입니다! 입력하신 정보를 확인 후 다시 시도해주세요!')
      }
      if(resultCode === -99) {
        window.alert('닉네임 또는 휴대전화번호가 일치하지 않습니다! 입력하신 정보를 확인 후 다시 시도해주세요!')
      }
    })
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  return (
    <div>
      <p className={styles.title}>닉네임</p>
      <input className={styles.input} onChange={handleName}/>
      <p className={styles.title}>휴대전화번호</p>
      <input className={styles.input} onChange={handlePhone}/>
      <button className={styles.btn} onClick={register}>쿠폰번호 받기</button>
      <h2>{code[0]}</h2>
      <h2>{code[1]}</h2>
      <h2>{code[2]}</h2>
    </div>
  );
}
