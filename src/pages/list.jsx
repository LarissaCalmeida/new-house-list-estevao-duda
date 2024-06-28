import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "@/styles/list.module.css";
import { useRouter } from "next/router";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ModalStepOne } from "@/components/ModalStepOne";
// import db from '../firebase/firestore';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4LzdXzX8UPjbhhCKAMHW2faER0hXJzWE",
  authDomain: "list-marriage.firebaseapp.com",
  projectId: "list-marriage",
  storageBucket: "list-marriage.appspot.com",
  messagingSenderId: "966507929030",
  appId: "1:966507929030:web:846b07e68f5db2ac7c26c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function List() {
  const { 0: text } = useTypewriter({
    words: ["Estêvão e Eduarda"],
    loop: true,
  });

  // const currentName = localStorage ?  : ""

  const [openModalStepOne, setOpenModalStepOne] = useState(false)

  const [currentName, setCurrentName] = useState("")

  const [dataFiltered, setDataFiltered] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedName, setSelectedName] = useState([])

  useEffect(() => {
    const value = window.localStorage.getItem("name")

    if(value) setCurrentName(value)
  } , [])

  const dataList = [
    {
      id: 1,
      value: "Geladeira",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {id: 2,
      value: "Microondas",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 3,
      value: "Air Fryer",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },

    {
      id: 4,
      value: "Fogão",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 5,
      value: "Mesa de jantar com 4 cadeiras",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 6,
      value: "Jogo de Panela",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 7,
      value: "Panela de Pressão 4,5L",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 8,
      value: "Tábua de corte em vidro",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 9,
      value: "Frigideira antiaderente",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {id: 10,
      value: "Processador de alimentos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 11,
      value: "Liquidificador",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 12,
      value: "Batedeira",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 13,
      value: "Cafeteira",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 14,
      value: "Sanduicheira",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 15,
      value: "Jogo Americano",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 16,
      value: "Jogo de Pratos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 17,
      value: "Jogo de Pratos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 18,
      value: "Jogo de Pratos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 19,
      value: "Jogo de Pratos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 20,
      value: "Porta mantimentos em vidro",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 21,
      value: "Conjunto de vasilhas e 4 panos de prato",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 22,
      value: "Conjunto de vasilhas e 4 panos de prato",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 23,
      value: "Kit travessas",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 24,
      value: "Marinex grande com tampa",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {

      id: 25,
      value: "Fruteira",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 26,
      value: "Assadeiras",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 27,
      value: "Kit de sobremesa em vidro",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 28,
      value: "Kit de sobremesa em vidro",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 29,
      value: "Jogo de xícaras",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 30,
      value: "Jogo de xícaras",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 31,
      value: "Jogo de xícaras",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 32,
      value: "Jogo de copos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 33,
      value: "Jogo de copos",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 34,
      value: "Jogo de taças",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 35,
      value: "Jogo de jantar",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 36,
      value: "Jogo de talher em inox",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 37,
      value: "Jogo de tapete antiaderente para cozinha",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 38,
      value: "Kit copo e jarra de suco",
      category: "cozinha",
      checked: false,
      nameChecked: "",
    },
    {
      id: 39,
      value: "Ferro de passar",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 40,
      value: "Máquina de lavar",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 41,
      value: "Varal suspenso com pés",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 42,
      value: "Tábua de passar",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 43,
      value: "Cama Box",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 44,
      value: "Guarda-roupa casal",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 45,
      value: "Jogo de lençol",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 46,
      value: "Jogo de lençol",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 47,
      value: "Jogo de toalhas",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 48,
      value: "Jogo de toalhas",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 49,
      value: "Jogo de toalhas",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 50,
      value: "Jogo de toalhas",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 51,
      value: "Cortina",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 52,
      value: "Cortina",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 53,
      value: "Cortina",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 54,
      value: "Edredom",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 55,
      value: "Jogo de cama",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 56,
      value: "Jogo de cama",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 57,
      value: "Jogo de cama",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 58,
      value: "Travesseiros",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 59,
      value: "Garrafa térmica",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 60,
      value: "Cuscuzeiro",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 61,
      value: "Boleira de vidro",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 62,
      value: "Vasilhas",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 63,
      value: "Fruteira",
      category: "sala",
      checked: false,
      nameChecked: "",
    },
    {
      id: 64,
      value: "Assadeira",
      category: "sala",
      checked: false,
      nameChecked: "",
    },

  ];

  const onSubmit = async () => {
    
    try {
      selected.map(async (value) => {
        const docRef = await addDoc(collection(db, "personItem"), {
          ...value,
          nameChecked: currentName,
          idItem: value.id
        });
      })
        
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "personItem"))
      const _data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const _dataList = [...dataList];
     
      _data.map((value) => {
        const _idx = dataList.findIndex((v) => v.id  == value.idItem)
      
        if(_idx !== -1) {
        _dataList[_idx].checked = true;
        _dataList[_idx].nameChecked = value.nameChecked;
        }
      })

      setDataFiltered([..._dataList])
    }

    fetchItems()
  }, [])

  return (
    <>
      <Head>
        <title>Chá de casa nova</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <header>
          <h1>Chá de casa nova</h1>

          <div className={styles.typingContainer}>
            <h2 id="sentence" className={styles.sentence}>
              {text}
            </h2>
            <span className={styles.cursor}>
              <Cursor cursorColor="#536f5d" />
            </span>
          </div>

          <p>
            <span>Data de entrega: </span>20/10/2024
          </p>

          <button type="button">
            <a href="#list"> Ir para lista</a>
          </button>

          <img src="/arrow.png" alt="" />
        </header>

        <section id="list">
          
          <div className={styles.filter}>
            <div>
            <span>Lista de chá de casa nova</span>
              {/* <img
                src="/down-arrow.png"
                alt=""
                className={styles.left}
                onClick={() => {
                  backFilter();
                }}
              />
              <span>{filter[currentIndex]}</span>
              <img
                src="/down-arrow.png"
                alt=""
                className={styles.right}
                onClick={() => {
                  nextFilter();
                }}
              /> */}
            </div>
          </div>

          <div className={styles.checkbox}>
            {dataFiltered.map((value, index) => {
              // console.log(value);
              return <><div key={index}>
                <input
                  type="checkbox"
                  id={value.value}
                  name="list"
                  value={value.value}
                  disabled={value.checked}
                  checked={value.checked || selectedName.includes(value.value)}
                  onChange={(e) => { 
                    console.log(selected)
                    if(selectedName.includes(value.value)){
                      const _idx = selectedName.indexOf(value.value);
                      selectedName.splice(_idx, 1);
                      selected.splice(_idx, 1);
                    } else {
                      selectedName.push(value.value);
                      selected.push(value);

                      setSelected([...selected])
                      setSelectedName([...selectedName])
                    }
                  }}
                />
                <label for={value.value}>{value.value} - <span>{selectedName.includes(value.value) ? currentName : value.nameChecked}</span></label>
              </div></>
            })}
          </div>

          <button disabled={selected.length === 0} onClick={() => {
            if(selected.length > 0){
              setOpenModalStepOne(true)
              // onSubmit();
            }
          }}>Assinar</button>

         { openModalStepOne &&  <ModalStepOne items={selectedName} setOpen={setOpenModalStepOne} onSubmit={onSubmit} />}
        </section>
      </main>
    </>
  );
}
