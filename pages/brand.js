import styles from './input.module.css';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Brand() {
  const [prodNo, setProdNo] = useState('');
  const [brandUrl, setBrandUrl] = useState('');
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);

  const register = () => {
    axios
      .get('https://common.webudding.net/v1/brand/list')
      .then((res) => {
        const items = res.data.data.items
        for (let i = 0; i < items.length; i++) {
          let prod_no = items[i].prod_no
          let brand_url = items[i].brand_url
          setItem({ prod_no, brand_url })
          console.log(brand_url)
        }
        
      });
  };

  return (
    <div className={styles.center}>
      <button className={styles.btn} onClick={register}>
        요청
      </button>
    </div>
  );
}
