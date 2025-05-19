'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './CustomSelect.module.css';


const options = [
  { value: 'upi', label: 'UPI', image: '/images/upi.webp' },
  { value: 'Credit/Debit Card', label: 'Credit/Debit Card', image: '/images/card.webp' },
];

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.selectWrapper} ref={dropdownRef}>
      <div className={styles.selected} onClick={toggleDropdown}>
        <div className={styles.selectedContent}>
           <span>{selected.label}</span> 
          <Image src={selected.image} alt={selected.label} width={60} height={24} />
        </div>
        <span className={styles.arrow}>
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 15L12 9L6 15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </div>

      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => handleSelect(option)}
            > 
              <span>{option.label}</span>
              <Image className='me-4' src={option.image} alt={option.label} width={60} height={20} />
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
}
