import React from 'react';
import styles from '../styles/SigninModal.css'

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>{props.children}
          <div>
            <img src={ require('../assets/images/SigninModal/pins.png')}/>
          </div>
            <img src={ require('../assets/images/SigninModal/star.png')} id='star1'/>
            <img src={ require('../assets/images/SigninModal/star_v2.png')} id='star2'/>
            <img src={ require('../assets/images/SigninModal/star_v2.png')} id='star3'/>
          </main>
          <footer>
            <button className="close" onClick={close}>
              완료
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;