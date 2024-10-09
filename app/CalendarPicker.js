// components/CalendarPicker.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPicker = () => {
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="date" className="mr-2 font-bold">Sélectionnez une date</label>
      <input
        type="text"
        value={date ? date.toISOString().split('T')[0] : ''}
        className="border border-gray-300 rounded p-2 cursor-pointer w-1/3" // Ajuste la largeur si nécessaire
        onClick={() => setShowCalendar(!showCalendar)}
        readOnly
        placeholder="" // Assure-toi que le placeholder est vide
      />
      {showCalendar && (
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="border border-gray-300 rounded mt-2 ml-2" // Ajoute un espacement en haut et à gauche du calendrier
        />
      )}
    </div>
  );
};

export default CalendarPicker;
