import React, { useState, useEffect } from 'react';
import css from './TodayListModal.module.css';
import snippets from '../../assets/images/sippets.svg';

const TodayListModal = ({ show, onClose, onSave, previousWaterData }) => {
  const [waterAmount, setWaterAmount] = useState(
    previousWaterData ? previousWaterData.amount : 0
  );
  const [inputWaterAmount, setInputWaterAmount] = useState(waterAmount);
  const [selectedTime, setSelectedTime] = useState(
    previousWaterData ? previousWaterData.time : getCurrentTime()
  );
  const [amPm, setAmPm] = useState(
    getAmPm(previousWaterData?.time || getCurrentTime())
  );

  // Функція для отримання поточного часу з округленням до найближчих 5 хвилин
  function getCurrentTime() {
    const date = new Date();
    const minutes = Math.round(date.getMinutes() / 5) * 5;
    return `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  // Функція для визначення AM або PM
  function getAmPm(time) {
    const [hours] = time.split(':').map(Number);
    return hours >= 12 ? 'PM' : 'AM';
  }

  // Оновлювати AM/PM коли змінюється час
  useEffect(() => {
    setAmPm(getAmPm(selectedTime));
  }, [selectedTime]);

  const generateTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 5) {
        const hour = h < 10 ? `0${h}` : h;
        const minute = m < 10 ? `0${m}` : m;
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };

  const handleBlur = () => {
    let updatedAmount = Number(inputWaterAmount);
    if (updatedAmount < 0) updatedAmount = 0; // Не допускаємо значення менше 0
    setWaterAmount(updatedAmount);
  };

  const incrementWaterAmount = () => {
    setWaterAmount(prev => {
      const updatedAmount = Math.min(prev + 50, 5000);
      setInputWaterAmount(updatedAmount); // Синхронізація з input
      return updatedAmount;
    });
  };

  const decrementWaterAmount = () => {
    setWaterAmount(prev => {
      const updatedAmount = Math.max(prev - 50, 0); // Значення не повинно бути меншим 0
      setInputWaterAmount(updatedAmount); // Синхронізація з input
      return updatedAmount;
    });
  };

  const handleSave = () => {
    const dataToSave = {
      amount: waterAmount,
      time: selectedTime,
    };
    onSave(dataToSave);
    onClose();
  };

  if (!show) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <div className={css.headerContainer}>
          <div className={css.modalTitle}>Edit the entered amount of water</div>
          <button className={css.modalClose} onClick={onClose}>
            <svg className="icon-x" width="24" height="24">
              <use href={`${snippets}#icon-x`}></use>
            </svg>
          </button>
        </div>

        <div className={css.previousData}>
          {previousWaterData ? (
            <div className={css.waterInfoContainer}>
              <svg className={css.icon} width="36" height="36">
                <use href={`${snippets}#icon-glass`}></use>
              </svg>
              <div className={css.waterIndicator}>
                {previousWaterData.amount} ml{' '}
              </div>
              <div className={css.amPmIndicator}>
                {previousWaterData.time}
                <span className={css.amPmIndicator}>{amPm}</span>
              </div>
            </div>
          ) : (
            <p>No notes yet</p>
          )}
        </div>

        <div className={css.editSection}>
          <label className={css.correctData}>Correct entered data:</label>
          <label className={css.amWater}>Amount of water:</label>
          <div className={css.stepInput}>
            <button className={css.roundButton} onClick={decrementWaterAmount}>
              -
            </button>
            <span>{waterAmount} ml</span>
            <button className={css.roundButton} onClick={incrementWaterAmount}>
              +
            </button>
          </div>
          <label className={css.recTime}>Recording time:</label>
          <div className={css.timeSelectBlock}>
            <select
              value={selectedTime}
              onChange={e => setSelectedTime(e.target.value)}
            >
              {generateTimeOptions().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <label className={css.wtUsed}>
            Enter the value of the water used:
          </label>
          <input
            type="number"
            value={inputWaterAmount}
            onChange={e => setInputWaterAmount(e.target.value)}
            onBlur={handleBlur}
            className={css.waterInput}
          />
        </div>

        <div className={css.modalActions}>
          <div className={css.stepOutput}>
            <output>{waterAmount}ml</output>
          </div>
          <button
            className={`${css.stepSave} ${css.saveButtonStyle}`}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayListModal;
