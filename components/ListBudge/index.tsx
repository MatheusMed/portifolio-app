import styles from "./styles.module.css";
import lista from './listaBudge';
import Image from "next/image";

function ListBudge() {



  return (
    <div className={styles.container} >

      {lista.map((item, index) => (
        <>
          <div key={index} style={{ padding: 10 }} >
            <h4>{item.name}</h4>
            <Image src={item.src} alt='' width={150} height={50} />
          </div>
        </>
      ))}

    </div>
  );



}


export default ListBudge;