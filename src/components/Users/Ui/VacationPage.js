import React, { useState } from 'react';
import { useLocation /* other hooks */ } from 'react-router-dom';

import classes from './VacationPage.module.css';
import o6u from '../../../../src/components/Users/media/O6U_Logo.jpg';
import Signature from '../../../../src/components/Users/media/Signature.png';
import Signature2 from '../../../../src/components/Users/media/Signature2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const VacationPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  console.log(location.state.vacation);
  const [type, setType] = useState(() => {
    if (location.state.vacation.leave_type === 'Sick') return 'مرضي';
    else if (location.state.vacation.leave_type === 'Casual') return 'عارضة';
    else if (location.state.vacation.leave_type === 'Ordinary')
      return 'اعتيادي';
    else if (location.state.vacation.leave_type === 'Unpaid')
      return 'بدون مرتب';
    else return 'مرضي';
  });

  const [vacation, setVacation] = useState(location.state.vacation);
  return (
    <div className={`${classes.container} test`}>
      <div className={classes.header}>
        <h2>
          October 6 University {'\n'}department of staff affairs{'\n'}
        </h2>
        <img className={classes.image} src={o6u} alt='' />
        <div className={classes.first}>
          <h2>جامعة 6 اكتوبر</h2>
          <h2>اداره شئون هيئه التدريس</h2>
        </div>
      </div>
      <div>
        <h1 style={{ borderBottom: 'solid 1px #000000' }}>طلب اجازه</h1>
      </div>
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <h1>السيد اللواء / امين عام الجامعه</h1>
      </div>
      <div>
        <h1> ،،،،،،،،تحيـة طيبـة وبعـد </h1>
      </div>
      <div className={classes.vacationType}>
        <h2>
          : أرجو التكرم باملوافقة على منحى أجــــازه وذلك على النحو التالي:
        </h2>
        <div>
          <h1>إعتيادى </h1>
          {type === 'اعتيادي' ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </div>
        <div>
          <h1>عارضة</h1>
          {type === 'عارضة' ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </div>
        <div>
          <h1>مرضى </h1>
          {type === 'مرضي' ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </div>
        <div>
          <h1> بدون مرتب </h1>
          {type === 'بدون مرتب' ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </div>
      </div>
      <div className={classes.information}>
        <div className={classes.filed}>
          <h1>: وظيفة </h1>
          <h2 style={{width:"50%", textAlign:"center"}} >{t(`${vacation.sender_role}`)} </h2>
        </div>
        <div className={classes.filed}>
          <h1> :مقدمه لسيادتكم </h1>
          <h2 style={{width:"50%", textAlign:"center"}}>{vacation.sender_name}</h2>
        </div>
        <div className={classes.filed}>
          <h1> : قسم </h1>
          <h2 style={{width:"50%", textAlign:"center"}}>{t(`${vacation.sender_department}`)} </h2>
        </div>
        <div className={classes.filed}>
          <h1> :كلية </h1>
          <h2 >{t(`${vacation.sender_college}`)} </h2>
        </div>
      </div>
      <div className={classes.taple}>
        <div className={classes.header}>
          <div>
            <h1>ملاحاظات</h1>
          </div>
          <div>
            <h1>الرصــــــــــــــــيد</h1>
          </div>
          <div>
            <h1>المـــــــــــــــــــــــــــدة </h1>
          </div>
          <div>
            <h1>نوع الاجازه</h1>
          </div>
        </div>
        <div className={classes.content}>
          <div></div>
          <div>
            <div className={classes.ttt}>
              <div>
                <h1>الباقي</h1>
                <h3></h3>
              </div>
              <div>
                <div>
                  <h1>المستنفذ</h1>
                  <h3></h3>
                </div>
              </div>
              <div>
                <h1>إجمالي الرصيد</h1>
                <h3></h3>
              </div>
            </div>
          </div>
          <div className={classes.time}>
            <div>
              <h1>إجمالي الاجازه</h1>
              <h3>{vacation.num_days}</h3>
            </div>
            <div>
              <h1>إلـــــى</h1>
              <h3>{vacation.end_date}</h3>
            </div>
            <div>
              <h1>مــــــــن</h1>
              <h3>{vacation.start_date}</h3>
            </div>
          </div>
          <div>
            <h1>{type}</h1>
          </div>
        </div>
      </div>
      <div className={classes.data}>
        <div>
          <h1>التاريخ</h1>
          <h2>{vacation.created_at}</h2>
        </div>
        <div className={classes.filed}>
          <h1> التوقيع </h1>
          <img style={{ width: '80px' }} src={Signature2} alt='' />
        </div>
      </div>
      <div className={classes.no}>
        <h1>توقيع القائم بعمل جدول الدراسة في هذه المده بدلا من  سيادته </h1>
        <div className={classes.tttt}>
          <div>
            <h1>الاسم</h1>
            <div>....................</div>
          </div>
          <div>
            <h1> الدرجه العلميه</h1>
            <div>....................</div>
          </div>
        </div>
      </div>
      <div className={classes.names}>
        <div>
          <h1>-:رئيس القسم</h1>
          <h3>{vacation.reciever_from_same_department}</h3>
        </div>
        <div>
          <h1> -:عميد الكلية</h1>
          <img style={{ width: '40px' }} src={Signature} alt='' />
        </div>
      </div>
      <button
        className={classes.btnAddTask}
        onClick={() => {
          console.log('hi');
          window.print();
        }}
        id='print-btn'
      >
        Print
      </button>
    </div>
  );
};

export default VacationPage;
