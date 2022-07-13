import { useState } from 'react';
import styles from './Card.module.css';

export default function Card({ imgSrc, showCard, isFlipped, isRemoved, onCardClick }) {
    return (
        <div className={`${styles['card']} ${isFlipped && styles['card--flipped']} ${isRemoved && styles['card--removed']} ${showCard && styles['card--show']}`} onClick={onCardClick}>
            <img className={styles['card__image']} src={imgSrc} />
        </div>
    );
}
