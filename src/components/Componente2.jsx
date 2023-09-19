import styles from './Componente2.module.css'

export default function Componente2(){
    return (
       <div>
           <h2>Componente 2</h2>
           <button className={styles.btn}>Clique Aqui!</button>
           {/* não é produtivo {styles['color-paragr']}, o ideal é não usar o - */}
           <p className={styles['color-paragr']}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       </div>
    )
}