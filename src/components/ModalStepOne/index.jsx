import React, {useState} from 'react';
import styles from './styles.module.css'

export const ModalStepOne = (props) => {
    const [step, setStep] = useState(0)
    return <div className={styles.container}>
        {step === 0 ? <div className={styles.wrapper}>
            <p>Tem certeza que deseja assinar
                 os itens abaixo?</p>

            <ul>{props.items.map((value, index) => <li key={index}>{value}</li>)}</ul>

            <span>Obs.: Após assinado a ação só pode ser desfeita pelos noivos</span>

            <div className={styles.buttons}>
                <button onClick={() => {props.setOpen(false)}}>Voltar</button>
                <button onClick={() => {
                    setStep(1) 
                    props.onSubmit()
                    }}>Finalizar</button>
            </div>
        </div> : <div className={styles.wrapper}>
            <p>Agradecemos sua colaboração 💚</p>

           

            <span>Data de entrega: 20/10/2024</span>

           
        </div> }
        
    </div>
}