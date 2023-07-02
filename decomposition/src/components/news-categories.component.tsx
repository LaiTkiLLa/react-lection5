/**
 * Компонент отображающий список новостных категорий (Сейчас в СМИ, В Германии и тд.)
 */
import React from "react";


const styles = {
    width: '800px',
    height: '40px',
    background: 'aqua',
}

export const NewsCategories = () => {
    return (
        <div style={styles}>Новостные категории</div>
    )
}