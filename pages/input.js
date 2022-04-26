import styles from './input.module.css';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Input() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState([]);
  const [show, setShow] = useState(false);

  const register = () => {
    axios
      .post('https://common.webudding.net/v1/event/coupon/list', {
        nickname: name,
        phone: phone,
      })
      .then((res) => {
        const resultCode = res.data.resultCode;
        console.log(res.data);
        if (resultCode === 1) {
          setCode(res.data.data);
          setShow(true)
        }
        if (resultCode === -1) {
          window.alert(
            '잘못된 요청입니다! 입력하신 정보를 확인 후 다시 시도해주세요!',
          );
        }
        if (resultCode === -99) {
          window.alert(
            '닉네임 또는 휴대전화번호가 일치하지 않습니다! 입력하신 정보를 확인 후 다시 시도해주세요!',
          );
        }
      });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className={styles.center}>
      {show === false && 
      <>
      <article>
        <p className={styles.title}>닉네임</p>
        <input
          className={styles.input}
          onChange={handleName}
          placeholder="마이페이지에서 확인 가능합니다."
        />
      </article>
      <article>
        <p className={styles.title}>휴대전화번호</p>
        <p className={styles.phonedesc}> - 을 제외하고 입력해주세요.</p>
        <input className={styles.input} onChange={handlePhone} />
      </article>
      <button className={styles.btn} onClick={register}>
        쿠폰번호 받기
      </button>
      </>
      }
      
     {show && 
      <>
      <h4>
        {name} 버디님을 위한 할인 쿠폰이 발급되었어요!
      </h4>
      <section className={styles.sec}>
        <article className={styles.coupon}>
          <h2 className={styles.code}>{code[0]}</h2>
          <p className={styles.desc}>회원 구매 시 사용 가능 / 2022.04.30까지</p>
        </article>
        <article className={styles.price}>
          <h2 className={styles.won}>10,000₩</h2>
        </article>
      </section>
      <section className={styles.sec}>
        <article className={styles.coupon}>
          <h2 className={styles.code}>{code[1]}</h2>
          <p className={styles.desc}>회원 구매 시 사용 가능 / 2022.04.30까지</p>
        </article>
        <article className={styles.price}>
          <h2 className={styles.won}>10,000₩</h2>
        </article>
      </section>
      <section className={styles.sec}>
        <article className={styles.coupon}>
          <h2 className={styles.code}>{code[2]}</h2>
          <p className={styles.desc}>회원 구매 시 사용 가능 / 2022.04.30까지</p>
        </article>
        <article className={styles.price}>
          <h2 className={styles.won}>10,000₩</h2>
        </article>
      </section>
      </>
     }
    </div>
  );
}
